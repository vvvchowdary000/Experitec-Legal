// import React from 'react';
// import './index.css'; // Make sure this matches the path to your CSS file
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import {
//   LayoutDashboard, FileText, Archive,
//   Settings, Shield
// } from 'lucide-react';

// // Layouts
// import DashboardLayout from './layouts/DashboardLayout';

// // Pages
// import Dashboard from './pages/Dashboard';
// import COIandFormTracker from './pages/Coi';
// import ArchivePage from './pages/Archive';
// import FormTemplatesScreen from './pages/FormTemplates';
// // import Settings from './pages/Settings';

// // Navigation configuration
// const navigation = [
//   { name: 'Dashboard', path: '/', icon: LayoutDashboard },
//   { name: 'COI Tracking', path: '/coi', icon: Shield },
//   { name: 'Forms', path: '/forms', icon: FileText },
//   { name: 'Archive', path: '/archive', icon: Archive },
//   { name: 'Settings', path: '/settings', icon: Settings }
// ];

// const App = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-50">
//         <DashboardLayout navigation={navigation}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/coi" element={<COIandFormTracker />} />
//             {/* <Route path="/forms" element={<COITracking formType="forms" />} /> */}
//             <Route path="/archive" element={<ArchivePage />} />
//             {/* <Route path="/settings" element={<Settings />} /> */}
//             <Route path="/form_templates" element={<FormTemplatesScreen />} />
//             <Route path="*" element={<Navigate to="/" replace />} />
//           </Routes>
//         </DashboardLayout>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from "react";
import "./index.css"; // Ensure this matches the path to your CSS file
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Archive,
  Settings,
  Shield,
} from "lucide-react";

// Layouts
import DashboardLayout from "./layouts/DashboardLayout";

// Pages
import Dashboard from "./pages/Dashboard";
import COIandFormTracker from "./pages/Coi";
import ArchivePage from "./pages/Archive";
import FormTemplatesScreen from "./pages/FormTemplates";
import Login from "./pages/Login"; // Import the Login page

// Navigation configuration
const navigation = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "COI Tracking", path: "/coi", icon: Shield },
  { name: "Forms", path: "/forms", icon: FileText },
  { name: "Archive", path: "/archive", icon: Archive },
  { name: "Settings", path: "/settings", icon: Settings },
];

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Public Route: Login Page */}
          <Route path="/login" element={<Login />} />
          {/* Protected Routes: Only accessible if authenticated- no authentication for now */}
          <Route
            path="/"
            element={
              <DashboardLayout navigation={navigation}>
                <Dashboard />
              </DashboardLayout>
            }
          />
          <Route
            path="/coi"
            element={
              <DashboardLayout navigation={navigation}>
                <COIandFormTracker />
              </DashboardLayout>
            }
          />
          <Route
            path="/archive"
            element={
              <DashboardLayout navigation={navigation}>
                <ArchivePage />
              </DashboardLayout>
            }
          />
          <Route
            path="/form_templates"
            element={
              <DashboardLayout navigation={navigation}>
                <FormTemplatesScreen />
              </DashboardLayout>
            }
          />
          {/* Redirect all other routes to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
