import { useNavigate } from "react-router-dom";
import Logo from "/images/logo.svg";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-transparent py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6">
        <div className="flex items-center">
          <img src={Logo} alt="SocioMetrics Logo" className="h-10" />
          <h1 className="mx-2 font-bold  text-sm md:text-2xl text-white sm:text-3xl lg:text-4xl">
            SocioMetrics
          </h1>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="btn group w-auto px-2  py-1  md:px-4 md:py-2 bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
          >
            <span className="relative inline-flex items-center text-[10px] md:text-[18px]">
              Get Started
            </span>
          </button>

          <button
            onClick={() =>
              (window.location.href =
                "https://github.com/CoderSwarup/level-supermind-hackerthon")
            }
            rel="noopener noreferrer"
            className="btn group w-auto px-2 py-1  md:px-4 md:py-2 bg-gradient-to-t from-gray-800 to-gray-700 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:w-auto"
          >
            <span className="relative inline-flex items-center text-[10px]  md:text-[18px]">
              GitHub
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
