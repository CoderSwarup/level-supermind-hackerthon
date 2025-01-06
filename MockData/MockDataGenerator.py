import csv
import json
import random
import os
import uuid
from datetime import datetime, timedelta

platforms = {
    "YOUTUBE": {
        "columns": ["ID", "DATE", "MEDIATYPE", "LIKES", "SHARE", "COMMENTS", "ENGAGEMENT"],
        "media_types": ["REELS", "VIDEO", "STATIC_POST", "TEXT"],
    },
    "INSTAGRAM": {
        "columns": ["ID", "DATE", "MEDIATYPE", "LIKES", "SHARE", "COMMENTS", "ENGAGEMENT"],
        "media_types": ["REELS", "VIDEO", "STATIC_POST", "CAROUSEL"],
    },
    "TWITTER": {
        "columns": ["ID", "DATE", "MEDIATYPE", "LIKES", "SHARE", "COMMENTS", "REPOST", "ENGAGEMENT"],
        "media_types": ["TEXT", "VIDEO", "STATIC_POST"],
    },
    "LINKEDIN": {
        "columns": ["ID", "DATE", "MEDIATYPE", "LIKES", "SHARE", "COMMENTS", "REPOST", "ENGAGEMENT"],
        "media_types": ["STATIC_POST", "REELS", "TEXT"],
    },
}

def generate_mock_data(platform, media_types, num_records=200):
    data = []
    for _ in range(num_records):
        record_id = str(uuid.uuid4())  
        media_type = random.choice(media_types)
        likes = random.randint(10, 5000)
        shares = random.randint(5, 1000)
        comments = random.randint(1, 500)
        reposts = random.randint(1, 300) if "REPOST" in platforms[platform]["columns"] else None
        engagement = likes + shares + comments + (reposts if reposts else 0)
        date = (datetime.now() - timedelta(days=random.randint(0, 365))).strftime("%Y-%m-%d")
        row = [record_id, date, media_type, likes, shares, comments]
        if reposts is not None:
            row.append(reposts)
        row.append(engagement)
        data.append(row)
    return data

def save_data_to_files(platform, data, columns):
    folder = f"data/{platform.lower()}"
    os.makedirs(folder, exist_ok=True)
    csv_file = f"{folder}/{platform.lower()}_data.csv"
    json_file = f"{folder}/{platform.lower()}_data.json"

    with open(csv_file, mode="w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(columns)
        writer.writerows(data)

    json_data = [dict(zip(columns, row)) for row in data]
    with open(json_file, mode="w", encoding="utf-8") as file:
        json.dump(json_data, file, indent=4)

    print(f"Data saved for {platform}: {csv_file}, {json_file}")

def combine_data(all_data):
    combined_columns = ["ID", "PLATFORM", "DATE", "MEDIATYPE", "LIKES", "SHARE", "COMMENTS", "ENGAGEMENT"]
    combined_data = []
    for platform, data in all_data.items():
        for row in data:
            combined_row = [row[0], platform, *row[1:]]
            combined_data.append(combined_row)

    random.shuffle(combined_data)

    folder = "data/combined"
    os.makedirs(folder, exist_ok=True)
    csv_file = f"{folder}/combined_data.csv"
    json_file = f"{folder}/combined_data.json"

    with open(csv_file, mode="w", newline="", encoding="utf-8") as file:
        writer = csv.writer(file)
        writer.writerow(combined_columns)
        writer.writerows(combined_data)

    json_data = [dict(zip(combined_columns, row)) for row in combined_data]
    with open(json_file, mode="w", encoding="utf-8") as file:
        json.dump(json_data, file, indent=4)

    print(f"Combined data saved: {csv_file}, {json_file}")

if __name__ == "__main__":
    all_data = {}
    for platform, details in platforms.items():
        print(f"Generating data for {platform}...")
        data = generate_mock_data(platform, details["media_types"],num_records=random.randint(170, 200))
        all_data[platform] = data
        save_data_to_files(platform, data, details["columns"])

    combine_data(all_data)
