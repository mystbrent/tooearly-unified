import React from 'react';
import { 
  Target, 
  Flame, 
  Trophy, 
  Gift, 
  TrendingUp, 
  Zap, 
  Brain, 
  FileText, 
  Mail, 
  Search,
  Calendar,
  DollarSign,
  Users,
  Award,
  Star
} from 'lucide-react';
import { UserProgress } from '../types';

interface ProgressiveSidebarProps {
  userProgress: UserProgress;
}

export const ProgressiveSidebar: React.FC<ProgressiveSidebarProps> = ({ userProgress }) => {
  const dailyProgressPercentage = (userProgress.dailyGoals.applications / userProgress.dailyGoals.maxApplications) * 100;
  const viewProgressPercentage = (userProgress.dailyGoals.viewedJobs / userProgress.dailyGoals.maxViewedJobs) * 100;

  const todaysActions = [
    { action: 'Profile updated', xp: 5, completed: true },
    { action: '2 jobs bookmarked', xp: 10, completed: true },
    { action: 'Skills assessment completed', xp: 15, completed: true },
    { action: 'Applied to 2 jobs', xp: 20, completed: false },
    { action: 'Reviewed 4 more jobs', xp: 8, completed: false }
  ];

  const smartActions = [
    { icon: Brain, label: 'AI Match Analysis', tag: 'New!', color: 'var(--primary-action)' },
    { icon: FileText, label: 'Tailor Resume for Selected Jobs', color: 'var(--secondary-action)' },
    { icon: Mail, label: 'Generate Outreach Messages', color: 'var(--achievement)' },
    { icon: Search, label: 'Research Company Culture', color: 'var(--reward)' }
  ];

  const marketInsights = [
    'Backend roles ↗️ 15% this week',
    'Your profile matches: 47 new jobs today',
    'Salary insight: You\'re targeting top 20%',
    'Application tip: 3PM-5PM best response rates'
  ];

  return (
    <div style={{
      backgroundColor: 'var(--content-background)',
      border: '1px solid var(--subtle-border)',
      borderRadius: '12px',
      padding: '20px',
      height: 'fit-content',
      maxHeight: 'calc(100vh - 140px)',
      overflowY: 'auto',
      position: 'sticky',
      top: '20px'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '24px' }}>
        <h3 style={{ 
          fontSize: '18px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          margin: '0 0 8px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          🎯 TODAY'S FOCUS
        </h3>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '14px',
          color: 'var(--text-secondary)'
        }}>
          <span>🔥 {userProgress.streak}-day streak</span>
          <span>⚡ {userProgress.xp} XP daily</span>
        </div>
      </div>

      {/* Daily Goal Progress */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          marginBottom: '8px'
        }}>
          <span style={{ 
            fontSize: '14px', 
            fontWeight: '600', 
            color: 'var(--text-primary)'
          }}>
            Daily Goal Progress
          </span>
          <span style={{ 
            fontSize: '14px', 
            color: 'var(--text-secondary)',
            fontWeight: '600'
          }}>
            {userProgress.dailyGoals.viewedJobs}/10
          </span>
        </div>
        <div className="progress-bar" style={{ marginBottom: '8px' }}>
          <div 
            className="progress-fill"
            style={{ width: `${Math.min(viewProgressPercentage, 100)}%` }}
          />
        </div>
        <p style={{ 
          fontSize: '12px', 
          color: 'var(--text-muted)', 
          margin: 0
        }}>
          Target: Review 10 quality matches
        </p>
      </div>

      {/* Quick Wins Today */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: 'var(--achievement)', 
          margin: '0 0 12px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          ✅ QUICK WINS TODAY
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {todaysActions.map((action, index) => (
            <div 
              key={index}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                fontSize: '13px',
                color: action.completed ? 'var(--achievement)' : 'var(--text-secondary)',
                opacity: action.completed ? 1 : 0.7
              }}
            >
              <span>
                {action.completed ? '✅' : '⏳'} {action.action}
              </span>
              <span style={{ 
                fontSize: '11px', 
                fontWeight: '600',
                color: action.completed ? 'var(--achievement)' : 'var(--text-muted)'
              }}>
                +{action.xp} XP
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Progress */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: 'var(--reward)', 
          margin: '0 0 12px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          🏆 ACHIEVEMENT PROGRESS
        </h4>
        <div style={{
          backgroundColor: 'rgba(255, 195, 0, 0.1)',
          border: '1px solid var(--reward)',
          borderRadius: '8px',
          padding: '12px'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between', 
            marginBottom: '8px'
          }}>
            <span style={{ 
              fontSize: '13px', 
              fontWeight: '600', 
              color: 'var(--text-primary)'
            }}>
              🎖️ "Application Ace"
            </span>
            <span style={{ 
              fontSize: '12px', 
              color: 'var(--text-secondary)'
            }}>
              7/10
            </span>
          </div>
          <div className="progress-bar" style={{ marginBottom: '8px' }}>
            <div 
              className="progress-fill reward"
              style={{ width: '70%' }}
            />
          </div>
          <div style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
            <div style={{ marginBottom: '4px' }}>Progress: Almost there!</div>
            <div style={{ color: 'var(--reward)', fontWeight: '600' }}>
              Reward: Unlock AI cover letter generator
            </div>
          </div>
        </div>
      </div>

      {/* Smart Actions */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: 'var(--primary-action)', 
          margin: '0 0 12px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          🚀 SMART ACTIONS
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {smartActions.map((action, index) => (
            <button
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 12px',
                backgroundColor: 'var(--main-background)',
                border: `1px solid ${action.color}`,
                borderRadius: '8px',
                color: action.color,
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = action.color;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--main-background)';
                e.currentTarget.style.color = action.color;
              }}
            >
              <action.icon size={14} />
              <span style={{ flex: 1, textAlign: 'left' }}>{action.label}</span>
              {action.tag && (
                <span style={{
                  backgroundColor: 'var(--urgent)',
                  color: 'white',
                  padding: '2px 6px',
                  borderRadius: '8px',
                  fontSize: '10px',
                  fontWeight: '700'
                }}>
                  {action.tag}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Discovery Insights */}
      <div style={{ marginBottom: '24px' }}>
        <h4 style={{ 
          fontSize: '14px', 
          fontWeight: '600', 
          color: 'var(--text-primary)', 
          margin: '0 0 12px 0',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        }}>
          📈 DISCOVERY INSIGHTS
        </h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {marketInsights.map((insight, index) => (
            <div 
              key={index}
              style={{ 
                fontSize: '12px', 
                color: 'var(--text-secondary)',
                padding: '6px 0',
                borderBottom: index < marketInsights.length - 1 ? '1px solid var(--subtle-border)' : 'none'
              }}
            >
              • {insight}
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Reward */}
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
          🎁 UPCOMING REWARD
        </h4>
        <p style={{ 
          fontSize: '12px', 
          color: 'var(--text-secondary)', 
          margin: '0 0 12px 0'
        }}>
          Apply to 3 more jobs → Unlock "Interview Scheduler AI" (Worth $19/mo)
        </p>
        <div className="progress-bar">
          <div 
            className="progress-fill reward"
            style={{ width: `${dailyProgressPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};