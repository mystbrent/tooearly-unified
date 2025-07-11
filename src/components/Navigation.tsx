import React from 'react';
import { Search, BarChart3, User, Zap, Flame, Star } from 'lucide-react';
import { ViewMode, UserProgress } from '../types';

interface NavigationProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  userProgress: UserProgress;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentMode,
  onModeChange,
  userProgress
}) => {
  const modes = [
    { id: 'discovery' as ViewMode, label: 'Discovery', icon: Search },
    { id: 'pipeline' as ViewMode, label: 'My Pipeline', icon: BarChart3 },
    { id: 'unified' as ViewMode, label: 'Smart View', icon: Star }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">TooEarly</h1>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {modes.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => onModeChange(id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                    currentMode === id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* User Progress & Actions */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center space-x-1 text-orange-600">
                <Flame size={16} />
                <span className="font-medium">{userProgress.streak}</span>
              </div>
              <div className="flex items-center space-x-1 text-blue-600">
                <Zap size={16} />
                <span className="font-medium">{userProgress.xp}</span>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <Zap size={16} />
              <span>Turbo</span>
            </button>
            <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          {modes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => onModeChange(id)}
              className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200 flex items-center space-x-2 ${
                currentMode === id
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon size={16} />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};