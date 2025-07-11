import React, { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';
import { FilterState } from '../types';

interface JobFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export const JobFilters: React.FC<JobFiltersProps> = ({ filters, onFiltersChange }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const jobTypes = ['full-time', 'part-time', 'contract', 'internship'];
  const workModes = ['remote', 'onsite', 'hybrid'];
  const experienceLevels = ['entry', 'mid', 'senior', 'lead'];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      {/* Search */}
      <div className="mb-6">
        <div className="relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search jobs, companies, or skills..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={filters.company}
            onChange={(e) => handleFilterChange('company', e.target.value)}
          />
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Filters</h3>
        <div className="flex flex-wrap gap-2">
          {workModes.map((mode) => (
            <button
              key={mode}
              onClick={() => {
                const newModes = filters.workMode.includes(mode)
                  ? filters.workMode.filter(m => m !== mode)
                  : [...filters.workMode, mode];
                handleFilterChange('workMode', newModes);
              }}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                filters.workMode.includes(mode)
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {mode.charAt(0).toUpperCase() + mode.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          <MapPin size={16} className="inline mr-1" />
          Location
        </label>
        <input
          type="text"
          placeholder="e.g., San Francisco, Remote, United States"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
        />
      </div>

      {/* Advanced Filters Toggle */}
      <button
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 mb-4"
      >
        <Filter size={16} />
        <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Filters</span>
      </button>

      {/* Advanced Filters */}
      {showAdvanced && (
        <div className="space-y-4 pt-4 border-t border-gray-200">
          {/* Job Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Briefcase size={16} className="inline mr-1" />
              Job Type
            </label>
            <div className="space-y-2">
              {jobTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.jobType.includes(type)}
                    onChange={(e) => {
                      const newTypes = e.target.checked
                        ? [...filters.jobType, type]
                        : filters.jobType.filter(t => t !== type);
                      handleFilterChange('jobType', newTypes);
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock size={16} className="inline mr-1" />
              Experience Level
            </label>
            <div className="space-y-2">
              {experienceLevels.map((level) => (
                <label key={level} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.experienceLevel.includes(level)}
                    onChange={(e) => {
                      const newLevels = e.target.checked
                        ? [...filters.experienceLevel, level]
                        : filters.experienceLevel.filter(l => l !== level);
                      handleFilterChange('experienceLevel', newLevels);
                    }}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700 capitalize">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <DollarSign size={16} className="inline mr-1" />
              Salary Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.salaryRange[0]}
                  onChange={(e) => handleFilterChange('salaryRange', [Number(e.target.value), filters.salaryRange[1]])}
                />
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={filters.salaryRange[1]}
                  onChange={(e) => handleFilterChange('salaryRange', [filters.salaryRange[0], Number(e.target.value)])}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};