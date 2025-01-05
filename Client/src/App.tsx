import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path="youtube" element={<div>YouTube Analytics</div>} />
          <Route path="instagram" element={<div>Instagram Analytics</div>} />
          <Route path="twitter" element={<div>Twitter Analytics</div>} />
          <Route path="linkedin" element={<div>LinkedIn Analytics</div>} />
          <Route path="chat" element={<div>Chat</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}