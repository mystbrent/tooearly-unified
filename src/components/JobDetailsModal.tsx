import React from 'react';
import { X, MapPin, DollarSign, Calendar, Building, ExternalLink, Heart, Bookmark, Zap } from 'lucide-react';
import { Job } from '../types';

interface JobDetailsModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (job: Job) => void;
  onSave: (job: Job) => void;
  onLike: (jobId: string) => void;
}

export const JobDetailsModal: React.FC<JobDetailsModalProps> = ({
  job,
  isOpen,
  onClose,
  onApply,
  onSave,
  onLike
}) => {
  if (!isOpen || !job) return null;

  const formatSalary = (salary: Job['salary']) => {
    const format = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `$${format(salary.min)}-${format(salary.max)}`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Building size={24} className="text-gray-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
                <p className="text-lg text-gray-600">{job.company}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Job Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={16} />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <DollarSign size={16} />
              <span>{formatSalary(job.salary)}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <Calendar size={16} />
              <span>Posted {formatDate(job.postedDate)}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <span className="capitalize">{job.workMode} • {job.type}</span>
            </div>
          </div>

          {/* Match Score */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Match Score</span>
              <span className="text-sm font-semibold text-green-600">{job.matchScore}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${job.matchScore}%` }}
              />
            </div>
          </div>

          {/* Skills/Tags */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Skills & Tags</h3>
            <div className="flex flex-wrap gap-2">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Job Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
          </div>

          {/* Requirements */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Requirements</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Benefits</h3>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              {job.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Actions */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <button
                onClick={() => onLike(job.id)}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  job.isLiked
                    ? 'bg-red-50 text-red-600'
                    : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
                }`}
              >
                <Heart size={20} fill={job.isLiked ? 'currentColor' : 'none'} />
              </button>
              <button
                onClick={() => onSave(job)}
                className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 transition-colors duration-200"
              >
                <Bookmark size={20} />
              </button>
              <button className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-gray-100 transition-colors duration-200">
                <ExternalLink size={20} />
              </button>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              >
                Close
              </button>
              <button
                onClick={() => onApply(job)}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2"
              >
                <Zap size={16} />
                <span>Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};