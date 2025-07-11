import React from 'react';
import { AlertTriangle, Calendar, DollarSign, TrendingUp, Clock, CheckCircle, Eye } from 'lucide-react';
import { Job, PipelineStage, UserProgress } from '../types';
import { MaximizedJobCard } from './MaximizedJobCard';

interface MaximizedUnifiedViewProps {
  jobs: Job[];
  pipelineStages: PipelineStage[];
  userProgress: UserProgress;
  onJobView: (job: Job) => void;
  onJobApply: (job: Job) => void;
  onJobLike: (jobId: string) => void;
}

export const MaximizedUnifiedView: React.FC<MaximizedUnifiedViewProps> = ({
  jobs,
  pipelineStages,
  userProgress,
  onJobView,
  onJobApply,
  onJobLike
}) => {
  const highMatchJobs = jobs.filter(job => job.matchScore >= 85).slice(0, 3);
  const urgentActions = [
    { type: 'follow-up', company: 'StartupXYZ', days: 7, action: 'Send follow-up email' },
    { type: 'interview', company: 'BigTech Inc', time: 'Tomorrow 2PM', action: 'Final round prep' },
    { type: 'negotiation', company: 'ScaleUp Co', amount: '$135K → $150K', action: 'Counter offer' }
  ];

  return (
    <div className="unified-layout">
      {/* Left Column - New Opportunities */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{
          backgroundColor: 'var(--content-background)',
          border: '1px solid var(--subtle-border)',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0 0 12px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            🔍 High Match Jobs
            <span style={{
              backgroundColor: 'var(--achievement)',
              color: 'white',
              padding: '2px 8px',
              borderRadius: '12px',
              fontSize: '12px'
            }}>
              {highMatchJobs.length}
            </span>
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {highMatchJobs.map((job) => (
              <div key={job.id} style={{
                backgroundColor: 'var(--main-background)',
                border: '1px solid var(--subtle-border)',
                borderRadius: '6px',
                padding: '12px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', margin: 0 }}>
                      {job.title}
                    </h4>
                    <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '2px 0' }}>
                      {job.company}
                    </p>
                  </div>
                  <div className="match-score high" style={{ fontSize: '11px' }}>
                    {job.matchScore}%
                  </div>
                </div>
                
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  💰 ${job.salary.min / 1000}K-${job.salary.max / 1000}K • 📍 {job.location}
                </div>
                
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button className="btn-primary" style={{ fontSize: '12px', padding: '4px 8px' }}>
                    Quick Apply
                  </button>
                  <button 
                    onClick={() => onJobView(job)}
                    style={{
                      backgroundColor: 'var(--main-background)',
                      border: '1px solid var(--subtle-border)',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      fontSize: '12px',
                      color: 'var(--text-secondary)',
                      cursor: 'pointer'
                    }}
                  >
                    <Eye size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Today's Reward */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 195, 0, 0.1) 0%, rgba(126, 217, 87, 0.1) 100%)',
          border: '1px solid var(--reward)',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h4 style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0 0 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            🎁 Today's Reward
          </h4>
          <div className="progress-bar" style={{ marginBottom: '8px' }}>
            <div 
              className="progress-fill reward"
              style={{ width: `${(userProgress.dailyGoals.applications / userProgress.dailyGoals.maxApplications) * 100}%` }}
            />
          </div>
          <p style={{ fontSize: '12px', color: 'var(--text-secondary)', margin: 0 }}>
            {userProgress.dailyGoals.maxApplications - userProgress.dailyGoals.applications} more applications → Unlock AI Resume Builder
          </p>
        </div>
      </div>

      {/* Center Column - Priority Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{
          backgroundColor: 'var(--content-background)',
          border: '1px solid var(--subtle-border)',
          borderRadius: '8px',
          padding: '20px'
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0 0 16px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            🎯 Priority Actions
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {urgentActions.map((action, index) => (
              <div key={index} style={{
                backgroundColor: action.type === 'follow-up' ? 'rgba(255, 127, 17, 0.1)' : 
                                action.type === 'interview' ? 'rgba(255, 195, 0, 0.1)' : 
                                'rgba(0, 168, 232, 0.1)',
                border: `1px solid ${action.type === 'follow-up' ? 'var(--secondary-action)' : 
                                   action.type === 'interview' ? 'var(--reward)' : 
                                   'var(--primary-action)'}`,
                borderRadius: '8px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{
                    fontSize: '20px',
                    marginTop: '2px'
                  }}>
                    {action.type === 'follow-up' ? '⚠️' : 
                     action.type === 'interview' ? '🎤' : '💰'}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: '0 0 4px 0'
                    }}>
                      {action.type === 'follow-up' ? 'URGENT: Follow-up Needed' :
                       action.type === 'interview' ? 'Interview Prep Due' :
                       'Salary Negotiation'}
                    </h4>
                    <p style={{
                      fontSize: '13px',
                      color: 'var(--text-secondary)',
                      margin: '0 0 8px 0'
                    }}>
                      {action.company} - {action.type === 'follow-up' ? `Applied ${action.days} days ago` :
                                         action.type === 'interview' ? action.time :
                                         action.amount}
                    </p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button className={
                        action.type === 'follow-up' ? 'btn-secondary' :
                        action.type === 'interview' ? 'btn-reward' :
                        'btn-primary'
                      } style={{ fontSize: '12px', padding: '6px 12px' }}>
                        {action.action}
                      </button>
                      <button style={{
                        backgroundColor: 'transparent',
                        border: '1px solid var(--subtle-border)',
                        borderRadius: '4px',
                        padding: '6px 12px',
                        fontSize: '12px',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer'
                      }}>
                        Later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Productivity Center */}
        <div style={{
          backgroundColor: 'var(--content-background)',
          border: '1px solid var(--primary-action)',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h4 style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--primary-action)',
            margin: '0 0 12px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            🚀 AI Productivity Center
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <button className="btn-primary" style={{ fontSize: '12px', padding: '8px' }}>
              📧 Draft Emails
            </button>
            <button className="btn-primary" style={{ fontSize: '12px', padding: '8px' }}>
              📄 Tailor Resume
            </button>
            <button className="btn-primary" style={{ fontSize: '12px', padding: '8px' }}>
              🎯 Interview Prep
            </button>
            <button className="btn-primary" style={{ fontSize: '12px', padding: '8px' }}>
              💰 Salary Research
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Pipeline Status */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{
          backgroundColor: 'var(--content-background)',
          border: '1px solid var(--subtle-border)',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0 0 12px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            📋 Pipeline Status
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Interviews This Week */}
            <div style={{
              backgroundColor: 'rgba(255, 195, 0, 0.1)',
              border: '1px solid var(--reward)',
              borderRadius: '6px',
              padding: '12px'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: '0 0 6px 0'
              }}>
                🎤 2 Interviews This Week
              </h4>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                • BigTech: Tomorrow 2PM<br />
                • ScaleUp: Friday 10AM
              </div>
              <div className="status-success" style={{ marginTop: '6px' }}>
                ✅ Prepared
              </div>
            </div>

            {/* Offer to Consider */}
            <div style={{
              backgroundColor: 'rgba(126, 217, 87, 0.1)',
              border: '1px solid var(--achievement)',
              borderRadius: '6px',
              padding: '12px'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: '0 0 6px 0'
              }}>
                💰 1 Offer to Consider
              </h4>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                CloudFirst - Senior DevOps<br />
                💰 $145K + equity
              </div>
              <div style={{ fontSize: '12px', color: 'var(--urgent)', marginTop: '6px' }}>
                Deadline: This Friday
              </div>
            </div>

            {/* Pipeline Health */}
            <div style={{
              backgroundColor: 'var(--main-background)',
              border: '1px solid var(--subtle-border)',
              borderRadius: '6px',
              padding: '12px'
            }}>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: '0 0 8px 0'
              }}>
                📊 Pipeline Health
              </h4>
              <div className="progress-bar" style={{ marginBottom: '8px' }}>
                <div className="progress-fill achievement" style={{ width: '82%' }} />
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                • 12 Active applications<br />
                • 4 in interview stage<br />
                • 1 offer pending
              </div>
            </div>
          </div>
        </div>

        {/* Daily Progress */}
        <div style={{
          backgroundColor: 'var(--content-background)',
          border: '1px solid var(--subtle-border)',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h4 style={{
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            margin: '0 0 12px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            🎮 Daily Progress
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span>✅ 3 jobs reviewed</span>
              <span style={{ color: 'var(--achievement)' }}>+15 XP</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
              <span>✅ 1 application sent</span>
              <span style={{ color: 'var(--achievement)' }}>+20 XP</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              🎯 2 more for daily goal
            </div>
            <div style={{ fontSize: '12px', color: 'var(--reward)' }}>
              Next: ⚡ AI Tools unlock
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};