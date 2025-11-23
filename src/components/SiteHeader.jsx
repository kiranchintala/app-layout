import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@mtbs/shared-lib';
import {
  Home,
  Calendar,
  Star,
  User,
  Wrench
} from 'lucide-react';

const SiteHeader = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const isOwner = user?.role === 'admin';

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: <Home className="w-4 h-4" /> },
    { path: '/booking', label: 'Book Appointment', icon: <Calendar className="w-4 h-4" /> },
    ...(isOwner
      ? [
        { path: '/manage-services', label: 'Services', icon: <Wrench className="w-4 h-4" /> },
        { path: '/manage-feedback', label: 'Feedback', icon: <Star className="w-4 h-4" /> },
      ]
      : [
        { path: '/feedback', label: 'Feedback', icon: <Star className="w-4 h-4" /> },
        { path: '/profile', label: 'Profile Settings', icon: <User className="w-4 h-4" /> },
      ])
  ];

  return (
    <header className="bg-gradient-to-r from-[#8b65ff] to-[#c87dff] text-white px-6 py-3 shadow flex justify-between items-center">
      {/* Logo + Navigation */}
      <div className="flex items-center gap-8">
        <img
          src="/logo-small.png"
          alt="Beauty Parlor Logo"
          className="h-10 w-auto object-contain"
        />
        <nav className="flex gap-4 items-center">
          {navItems.map(({ path, label, icon }) => {
            const isActive = location.pathname === path;
            return (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-1 px-2 py-1 rounded text-sm transition-all ${isActive ? 'bg-white text-purple-600 font-semibold' : 'hover:bg-purple-500'
                  }`}
              >
                {icon}
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-4">
        {user && (
          <span className="text-sm">
            Hi, <strong>{user.name || user.email}</strong>
          </span>
        )}
        <button
          onClick={logout}
          className="bg-white text-purple-600 px-3 py-1 rounded hover:bg-gray-100 text-sm font-medium"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default SiteHeader;
