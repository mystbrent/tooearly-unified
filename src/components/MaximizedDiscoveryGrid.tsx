import React from 'react';
import { EnhancedJobCard } from './EnhancedJobCard';
import { Job } from '../types';

interface MaximizedDiscoveryGridProps {
  jobs: Job[];
  onJobView: (job: Job) => void;
  onJobApply: (job: Job) => void;
  onJobLike: (jobId: string) => void;
}

export const MaximizedDiscoveryGrid: React.FC<MaximizedDiscoveryGridProps> = ({
  jobs,
  onJobView,
  onJobApply,
  onJobLike
}) => {
  // Assign priorities to jobs for demonstration
  const jobsWithPriority = jobs.slice(0, 6).map((job, index) => {
    let priority: 'trending' | 'hot' | 'rare' | 'urgent' | 'normal' = 'normal';
    
    if (job.matchScore >= 95) priority = 'rare';
    else if (job.matchScore >= 90) priority = 'trending';
    else if (job.matchScore >= 85) priority = 'hot';
    else if (index === 5) priority = 'urgent'; // Last card as urgent for demo
    
    return { ...job, priority };
  });

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: '20px',
      padding: '20px',
      backgroundColor: 'var(--main-background)',
      minHeight: 'calc(100vh - 200px)'
    }}>
      {jobsWithPriority.map((job) => (
        <EnhancedJobCard
          key={job.id}
          job={job}
          priority={job.priority}
          onLike={onJobLike}
          onView={onJobView}
          onQuickApply={onJobApply}
        />
      ))}
      
      {/* Discover More Card */}
      {jobs.length > 6 && (
        <div 
          className="maximized-card"
          style={{
            height: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(0, 168, 232, 0.1) 0%, rgba(126, 217, 87, 0.1) 100%)',
            border: '2px dashed var(--primary-action)',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 168, 232, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
          }}
        >
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>
            🔍
          </div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: 'var(--primary-action)',
            margin: '0 0 8px 0',
            textAlign: 'center'
          }}>
            DISCOVER MORE
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            textAlign: 'center',
            margin: '0 0 16px 0',
            lineHeight: '1.4'
          }}>
            Use our ML to find hidden gems!
          </p>
          <button className="btn-primary" style={{
            fontSize: '14px',
            fontWeight: '600',
            padding: '10px 20px'
          }}>
            🔍 EXPLORE
          </button>
        </div>
      )}
    </div>
  );
};