import React from 'react';
import { SmartFilters } from './SmartFilters';
import { MaximizedDiscoveryGrid } from './MaximizedDiscoveryGrid';
import { ProgressiveSidebar } from './ProgressiveSidebar';
import { Job, FilterState, UserProgress } from '../types';

interface EnhancedDiscoveryModeProps {
  jobs: Job[];
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  userProgress: UserProgress;
  onJobView: (job: Job) => void;
  onJobApply: (job: Job) => void;
  onJobLike: (jobId: string) => void;
}

export const EnhancedDiscoveryMode: React.FC<EnhancedDiscoveryModeProps> = ({
  jobs,
  filters,
  onFiltersChange,
  userProgress,
  onJobView,
  onJobApply,
  onJobLike
}) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      height: 'calc(100vh - 64px)',
      backgroundColor: 'var(--main-background)'
    }}>
      {/* Smart Filters Header */}
      <SmartFilters filters={filters} onFiltersChange={onFiltersChange} />
      
      {/* Main Content Area */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 350px',
        gap: '0',
        height: '100%',
        overflow: 'hidden'
      }}>
        {/* Job Grid */}
        <div style={{ 
          overflowY: 'auto',
          height: '100%'
        }}>
          <MaximizedDiscoveryGrid
            jobs={jobs}
            onJobView={onJobView}
            onJobApply={onJobApply}
            onJobLike={onJobLike}
          />
        </div>
        
        {/* Progressive Sidebar */}
        <div style={{
          backgroundColor: 'var(--main-background)',
          borderLeft: '1px solid var(--subtle-border)',
          padding: '20px',
          overflowY: 'auto'
        }}>
          <ProgressiveSidebar userProgress={userProgress} />
        </div>
      </div>
    </div>
  );
};