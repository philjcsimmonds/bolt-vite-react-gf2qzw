import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, BarChart, UserPlus, Trophy, GraduationCap, Building2 } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { to: '/', icon: BarChart, label: 'Dashboard' },
    { to: '/employees', icon: Users, label: 'Employees' },
    { to: '/recruitment', icon: UserPlus, label: 'Recruitment' },
    { to: '/performance', icon: Trophy, label: 'Performance' },
    { to: '/training', icon: GraduationCap, label: 'Training' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 px-3 py-4 flex flex-col">
      <div className="flex items-center gap-2 px-3 mb-8">
        <Building2 className="h-8 w-8 text-blue-600" />
        <span className="text-xl font-bold text-gray-800">HR Manager</span>
      </div>
      <nav className="space-y-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <Icon className="h-5 w-5" />
            <span className="font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;