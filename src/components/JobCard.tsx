import React from 'react';
import { Heart, Eye, Zap, MapPin, DollarSign, Building } from 'lucide-react';
import { Job } from '../types';

interface JobCardProps {
  job: Job;
  onLike: (jobId: string) => void;
  onView: (job: Job) => void;
  onQuickApply: (job: Job) => void;
  compact?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({
  job,
  onLike,
  onView,
  onQuickApply,
  compact = false
}) => {
  const formatSalary = (salary: Job['salary']) => {
    const format = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `$${format(salary.min)}-${format(salary.max)}`;
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-50';
    if (score >= 70) return 'text-blue-600 bg-blue-50';
    if (score >= 50) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-gray-300 ${compact ? 'p-4' : 'p-6'}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            <Building size={20} className="text-gray-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm">{job.title}</h3>
            <p className="text-sm text-gray-600">{job.company}</p>
          </div>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium ${getMatchColor(job.matchScore)}`}>
          {job.matchScore}% MATCH
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin size={14} className="mr-2" />
          <span>{job.location}</span>
          <span className="mx-2">•</span>
          <span className="capitalize">{job.workMode}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign size={14} className="mr-2" />
          <span>{formatSalary(job.salary)}</span>
          <span className="mx-2">•</span>
          <span className="capitalize">{job.type}</span>
        </div>
      </div>

      {/* Tags */}
      {!compact && (
        <div className="flex flex-wrap gap-1 mb-4">
          {job.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button
            onClick={() => onLike(job.id)}
            className={`p-2 rounded-full transition-colors duration-200 ${
              job.isLiked
                ? 'bg-red-50 text-red-600 hover:bg-red-100'
                : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
            }`}
          >
            <Heart size={16} fill={job.isLiked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => onView(job)}
            className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors duration-200"
          >
            <Eye size={16} />
          </button>
        </div>
        <button
          onClick={() => onQuickApply(job)}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          <Zap size={14} />
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};