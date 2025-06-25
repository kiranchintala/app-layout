import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@mtbs/shared-lib';
import {
  Home,
  Calendar,
  Star,
  User,
  Settings,
  Wrench
} from 'lucide-react';

const LeftNav = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isOwner = user?.role === 'admin';

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <Home className="w-5 h-5" /> },
    { path: '/booking', label: 'Book Appointment', icon: <Calendar className="w-5 h-5" /> },
    ...(isOwner
      ? [
        { path: '/manage-services', label: 'Manage Services', icon: <Wrench className="w-5 h-5" /> },
        { path: '/manage-feedback', label: 'Customer Feedback', icon: <Star className="w-5 h-5" /> },
      ]
      : [
        { path: '/feedback', label: 'Feedback', icon: <Star className="w-5 h-5" /> },
        { path: '/profile', label: 'Profile Settings', icon: <User className="w-5 h-5" /> },
      ])
  ];

  return (
    <nav className="w-64 h-full bg-white border-r flex flex-col items-center justify-between py-8 shadow-sm">
      <div className="w-full flex flex-col items-center">
        <img src="/logo.png" alt="Logo" className="w-21 h-21 mb-2" />
        <ul className="w-full px-4 space-y-1">
          {navItems.map(({ path, label, icon }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <Link
                  to={path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${isActive
                    ? 'bg-purple-100 text-purple-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-purple-600'
                    }`}
                >
                  {icon}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Magic touch by Shilpa</div>
    </nav>
  );
};

export default LeftNav;
