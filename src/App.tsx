import React, { useState, useEffect } from 'react';
import { MaximizedNavigation } from './components/MaximizedNavigation';
import { EnhancedDiscoveryMode } from './components/EnhancedDiscoveryMode';
import { MaximizedPipelineBoard } from './components/MaximizedPipelineBoard';
import { MaximizedUnifiedView } from './components/MaximizedUnifiedView';
import { JobDetailsModal } from './components/JobDetailsModal';
import { useJobData } from './hooks/useJobData';
import { ViewMode, FilterState, Job } from './types';
import './styles/colors.css';

function App() {
  const [currentMode, setCurrentMode] = useState<ViewMode>('discovery');
  const [filters, setFilters] = useState<FilterState>({
    location: '',
    jobType: [],
    workMode: [],
    experienceLevel: [],
    salaryRange: [0, 200000],
    company: '',
    skills: []
  });
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showJobModal, setShowJobModal] = useState(false);

  const {
    jobs,
    pipelineStages,
    userProgress,
    addJobToPipeline,
    moveJobBetweenStages,
    updateUserProgress,
    toggleJobLike
  } = useJobData();

  // Filter jobs based on current filters
  const filteredJobs = jobs.filter(job => {
    if (filters.location && !job.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.company && !job.company.toLowerCase().includes(filters.company.toLowerCase())) {
      return false;
    }
    if (filters.jobType.length > 0 && !filters.jobType.includes(job.type)) {
      return false;
    }
    if (filters.workMode.length > 0 && !filters.workMode.includes(job.workMode)) {
      return false;
    }
    if (job.salary.min < filters.salaryRange[0] || job.salary.max > filters.salaryRange[1]) {
      return false;
    }
    return true;
  });

  const handleJobView = (job: Job) => {
    setSelectedJob(job);
    setShowJobModal(true);
    
    // Update daily goals
    updateUserProgress({
      ...userProgress,
      dailyGoals: {
        ...userProgress.dailyGoals,
        viewedJobs: Math.min(userProgress.dailyGoals.viewedJobs + 1, userProgress.dailyGoals.maxViewedJobs)
      }
    });
  };

  const handleJobApply = (job: Job) => {
    // Add to pipeline
    addJobToPipeline(job, 'applied');
    
    // Update daily goals and XP
    updateUserProgress({
      ...userProgress,
      xp: userProgress.xp + 20,
      dailyGoals: {
        ...userProgress.dailyGoals,
        applications: Math.min(userProgress.dailyGoals.applications + 1, userProgress.dailyGoals.maxApplications)
      }
    });
    
    setShowJobModal(false);
  };

  const handleJobSave = (job: Job) => {
    addJobToPipeline(job, 'wishlist');
    
    // Update XP for saving
    updateUserProgress({
      ...userProgress,
      xp: userProgress.xp + 5
    });
    
    setShowJobModal(false);
  };

  const renderMainContent = () => {
    switch (currentMode) {
      case 'discovery':
        return (
          <EnhancedDiscoveryMode
            jobs={filteredJobs}
            filters={filters}
            onFiltersChange={setFilters}
            userProgress={userProgress}
            onJobView={handleJobView}
            onJobApply={handleJobApply}
            onJobLike={toggleJobLike}
          />
        );

      case 'pipeline':
        return (
          <div style={{ padding: '20px', backgroundColor: 'var(--main-background)' }}>
            <MaximizedPipelineBoard
              stages={pipelineStages}
              onMoveJob={moveJobBetweenStages}
              onAddJob={(stageId) => {
                console.log('Add job to stage:', stageId);
              }}
            />
          </div>
        );

      case 'unified':
        return (
          <div style={{ padding: '20px', backgroundColor: 'var(--main-background)' }}>
            <MaximizedUnifiedView
              jobs={filteredJobs}
              pipelineStages={pipelineStages}
              userProgress={userProgress}
              onJobView={handleJobView}
              onJobApply={handleJobApply}
              onJobLike={toggleJobLike}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="maximized-layout">
      <MaximizedNavigation
        currentMode={currentMode}
        onModeChange={setCurrentMode}
        userProgress={userProgress}
      />
      
      {renderMainContent()}

      {/* Job Details Modal */}
      <JobDetailsModal
        job={selectedJob}
        isOpen={showJobModal}
        onClose={() => setShowJobModal(false)}
        onApply={handleJobApply}
        onSave={handleJobSave}
        onLike={toggleJobLike}
      />
    </div>
  );
}

export default App;