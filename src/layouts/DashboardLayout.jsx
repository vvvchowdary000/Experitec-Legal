import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  CircleHelp,
  ChartNoAxesColumn,
  BookOpen,
  Bell,
  ChevronDown,
  Menu,
  LayoutDashboard,
  FileText,
  Archive,
  Settings,
  Shield
} from "lucide-react";
import profilePic from "../assets/profile_icon.jpg";

const navigation = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "COI & Form Requests",
    path: "/coi",
    icon: Shield,
  },

  {
    name: "Archive",
    path: "/archive",
    icon: Archive,
  },

  {
    name: "Document Repository",
    path: "/documents_repository",
    icon: FileText,
  },

  {
    name: "Form Templates",
    path: "/form_templates",
    icon: BookOpen,
  },

  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },

  {
    name: "Reports",
    path: "/reports",
    icon: ChartNoAxesColumn,
  },

  {
    name: "FAQs",
    path: "/faqs",
    icon: CircleHelp,
  },
];

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clear tokens, etc.)
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 flex flex-col w-64 bg-white border-r transform
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:inset-0
      `}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 px-4 border-b">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="https://experitec.com/website/media/impact-partner/header/images/Experitec-logo.png"
              alt="Logo"
              className="w-30 h-auto"
            />{" "}
            {/* Replace the Shield component */}
            {/* <span className="text-xl font-semibold text-gray-900">Legal Review</span> */}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {navigation.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-lg
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }
                `}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile */}
        {/* <div className="border-t p-4">
          <button className="flex items-center w-full space-x-3" onClick={() => setUserMenuOpen(!userMenuOpen)}>
            <img
              src={profilePic}
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 text-left">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Legal Coordinator</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
          {userMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border rounded-lg shadow-lg z-10 mt-1">
              <div className="py-1">
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div> */}
        {/* User Profile */}

        <div className="border-t p-4 relative">
          <button
            className="flex items-center w-full space-x-3"
            onClick={handleLogout}
          >
            <img src={profilePic} alt="User" className="w-8 h-8 rounded-full" />
            <div className="flex-1 text-left">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">Legal Coordinator</div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="w-full">
          <div className="relative z-10 flex-shrink-0 h-16 bg-white border-b flex">
            <button
              className="lg:hidden px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Header Content */}
            <div className="flex-1 px-4 flex justify-between">
              <div className="flex-1 flex"></div>
              <div className="ml-4 flex items-center md:ml-6">
                <button className="relative p-2 rounded-full hover:bg-gray-100">
                  <Bell className="h-6 w-6 text-gray-400" />
                  {/* Notification dot */}
                  <span className="absolute top-1.5 right-1.5 block h-2 w-2 rounded-full bg-red-500"></span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          <div className="py-6 px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
