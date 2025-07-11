import React from 'react';
import { Trophy, Target, Flame, Gift, Star, Zap, TrendingUp, Calendar, Award } from 'lucide-react';
import { UserProgress } from '../types';

interface MaximizedRightPanelProps {
  userProgress: UserProgress;
}

export const MaximizedRightPanel: React.FC<MaximizedRightPanelProps> = ({ userProgress }) => {
  const progressPercentage = (userProgress.dailyGoals.applications / userProgress.dailyGoals.maxApplications) * 100;
  const viewProgressPercentage = (userProgress.dailyGoals.viewedJobs / userProgress.dailyGoals.maxViewedJobs) * 100;

  return (
    <div style={{
      backgroundColor: 'var(--content-background)',
      border: '1px solid var(--subtle-border)',
      borderRadius: '8px',
      padding: '20px',
      height: 'fit-content',
      maxHeight: 'calc(100vh - 140px)',
      overflowY: 'auto'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '18px',
          fontWeight: '600',
          color: 'var(--text-primary)',
          margin: '0 0 4px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <TrendingUp size={20} style={{ color: 'var(--primary-action)' }} />
          Your Progress
        </h3>
        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          margin: 0
        }}>
          Level {userProgress.level} • {userProgress.xp} XP
        </p>
      </div>
      
      {/* Daily Goals */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Target size={16} style={{ color: 'var(--primary-action)' }} />
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
              Daily Applications
            </span>
          </div>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            {userProgress.dailyGoals.applications}/{userProgress.dailyGoals.maxApplications}
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
          />
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
          {userProgress.dailyGoals.maxApplications - userProgress.dailyGoals.applications} more to unlock AI tools!
        </p>
      </div>

      {/* Job Views Progress */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Star size={16} style={{ color: 'var(--reward)' }} />
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
              Jobs Explored
            </span>
          </div>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
            {userProgress.dailyGoals.viewedJobs}/{userProgress.dailyGoals.maxViewedJobs}
          </span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill reward"
            style={{ width: `${Math.min(viewProgressPercentage, 100)}%` }}
          />
        </div>
      </div>

      {/* Streak Counter */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Flame size={16} style={{ color: 'var(--secondary-action)' }} />
            <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>
              Streak
            </span>
          </div>
          <span style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: 'var(--secondary-action)'
          }}>
            {userProgress.streak} days
          </span>
        </div>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
          Keep applying to maintain your streak!
        </p>
      </div>

      {/* Recent Achievements */}
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: 'var(--text-primary)', 
          margin: '0 0 12px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          <Trophy size={16} style={{ color: 'var(--achievement)' }} />
          Recent Achievements
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {userProgress.achievements.slice(0, 2).map((achievement) => (
            <div 
              key={achievement.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '12px',
                backgroundColor: 'var(--main-background)',
                borderRadius: '8px',
                border: '1px solid var(--subtle-border)'
              }}
            >
              <span style={{ fontSize: '20px' }}>{achievement.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ 
                  fontSize: '14px', 
                  fontWeight: '500', 
                  color: 'var(--text-primary)',
                  margin: '0 0 2px 0'
                }}>
                  {achievement.title}
                </p>
                <p style={{ 
                  fontSize: '12px', 
                  color: 'var(--achievement)',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  +{achievement.xpReward} XP
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next Reward */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 195, 0, 0.1) 0%, rgba(0, 168, 232, 0.1) 100%)',
        padding: '16px',
        borderRadius: '8px',
        border: '1px solid var(--reward)',
        marginBottom: '20px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px', 
          marginBottom: '8px'
        }}>
          <Gift size={16} style={{ color: 'var(--reward)' }} />
          <span style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: 'var(--text-primary)'
          }}>
            Next Reward
          </span>
        </div>
        <p style={{ 
          fontSize: '14px', 
          color: 'var(--text-secondary)', 
          margin: '0 0 12px 0'
        }}>
          Apply to {userProgress.dailyGoals.maxApplications - userProgress.dailyGoals.applications} more job{userProgress.dailyGoals.maxApplications - userProgress.dailyGoals.applications !== 1 ? 's' : ''} to unlock AI Cover Letter Generator
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="progress-bar" style={{ flex: 1 }}>
            <div 
              className="progress-fill reward"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
            {userProgress.dailyGoals.maxApplications - userProgress.dailyGoals.applications} left
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: 'var(--text-primary)', 
          margin: '0 0 12px 0'
        }}>
          Quick Actions
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <button className="btn-primary" style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center'
          }}>
            <Zap size={14} />
            <span>Apply with AI</span>
          </button>
          <button className="btn-secondary" style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center'
          }}>
            <Star size={14} />
            <span>Save to Pipeline</span>
          </button>
          <button className="btn-achievement" style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center'
          }}>
            <Calendar size={14} />
            <span>Schedule Follow-up</span>
          </button>
        </div>
      </div>
    </div>
  );
};