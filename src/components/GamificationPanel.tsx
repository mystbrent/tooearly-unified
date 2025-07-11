import React from 'react';
import { Trophy, Target, Flame, Gift, Star, Zap } from 'lucide-react';
import { UserProgress } from '../types';

interface GamificationPanelProps {
  userProgress: UserProgress;
}

export const GamificationPanel: React.FC<GamificationPanelProps> = ({ userProgress }) => {
  const progressPercentage = (userProgress.dailyGoals.applications / userProgress.dailyGoals.maxApplications) * 100;
  const viewProgressPercentage = (userProgress.dailyGoals.viewedJobs / userProgress.dailyGoals.maxViewedJobs) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Your Progress</h3>
      
      {/* Daily Goals */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Target size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Daily Applications</span>
          </div>
          <span className="text-sm text-gray-500">
            {userProgress.dailyGoals.applications}/{userProgress.dailyGoals.maxApplications}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {userProgress.dailyGoals.maxApplications - userProgress.dailyGoals.applications} more to unlock AI tools!
        </p>
      </div>

      {/* Job Views Progress */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Star size={16} className="text-yellow-600" />
            <span className="text-sm font-medium text-gray-700">Jobs Explored</span>
          </div>
          <span className="text-sm text-gray-500">
            {userProgress.dailyGoals.viewedJobs}/{userProgress.dailyGoals.maxViewedJobs}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-yellow-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(viewProgressPercentage, 100)}%` }}
          />
        </div>
      </div>

      {/* Streak Counter */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Flame size={16} className="text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Streak</span>
          </div>
          <span className="text-sm font-semibold text-orange-600">
            {userProgress.streak} days
          </span>
        </div>
        <p className="text-xs text-gray-500">Keep applying to maintain your streak!</p>
      </div>

      {/* Recent Achievements */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3 flex items-center">
          <Trophy size={16} className="text-yellow-600 mr-2" />
          Recent Achievements
        </h4>
        <div className="space-y-2">
          {userProgress.achievements.slice(0, 2).map((achievement) => (
            <div key={achievement.id} className="flex items-center space-x-3 p-2 bg-gray-50 rounded-md">
              <span className="text-lg">{achievement.icon}</span>
              <div>
                <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                <p className="text-xs text-gray-500">+{achievement.xpReward} XP</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Reward */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Gift size={16} className="text-purple-600" />
          <span className="text-sm font-medium text-gray-700">Next Reward</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">
          Apply to 1 more job to unlock AI Cover Letter Generator
        </p>
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-white rounded-full h-2">
            <div 
              className="bg-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-xs text-gray-500">
            {userProgress.dailyGoals.maxApplications - userProgress.dailyGoals.applications} left
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Quick Actions</h4>
        <div className="space-y-2">
          <button className="w-full flex items-center space-x-2 p-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200">
            <Zap size={14} />
            <span>Apply with AI</span>
          </button>
          <button className="w-full flex items-center space-x-2 p-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors duration-200">
            <Star size={14} />
            <span>Save to Pipeline</span>
          </button>
        </div>
      </div>
    </div>
  );
};