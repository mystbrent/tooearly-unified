import React from 'react';
import { Search, BarChart3, User, Zap, Flame, Star, Target } from 'lucide-react';
import { ViewMode, UserProgress } from '../types';

interface MaximizedNavigationProps {
  currentMode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  userProgress: UserProgress;
}

export const MaximizedNavigation: React.FC<MaximizedNavigationProps> = ({
  currentMode,
  onModeChange,
  userProgress
}) => {
  const modes = [
    { id: 'discovery' as ViewMode, label: 'Discovery', icon: Search },
    { id: 'pipeline' as ViewMode, label: 'My Pipeline', icon: BarChart3 },
    { id: 'unified' as ViewMode, label: 'Smart View', icon: Star }
  ];

  return (
    <nav style={{ 
      backgroundColor: 'var(--content-background)', 
      borderBottom: '1px solid var(--subtle-border)',
      padding: '0'
    }}>
      <div style={{ 
        maxWidth: '100%', 
        margin: '0 auto', 
        padding: '0 20px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '64px'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ 
              fontSize: '24px', 
              fontWeight: 'bold', 
              color: 'var(--text-primary)',
              margin: 0
            }}>
              TooEarly
            </h1>
          </div>

          {/* Navigation Tabs */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '4px'
          }}>
            {modes.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onModeChange(id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  backgroundColor: currentMode === id ? 'var(--primary-action)' : 'transparent',
                  color: currentMode === id ? 'white' : 'var(--text-secondary)'
                }}
                onMouseEnter={(e) => {
                  if (currentMode !== id) {
                    e.currentTarget.style.backgroundColor = 'var(--main-background)';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentMode !== id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* User Progress & Actions */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '16px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px',
              fontSize: '14px'
            }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                color: 'var(--secondary-action)'
              }}>
                <Flame size={16} />
                <span style={{ fontWeight: '600' }}>{userProgress.streak}</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                color: 'var(--primary-action)'
              }}>
                <Zap size={16} />
                <span style={{ fontWeight: '600' }}>{userProgress.xp}</span>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                color: 'var(--achievement)'
              }}>
                <Target size={16} />
                <span style={{ fontWeight: '600' }}>
                  {userProgress.dailyGoals.applications}/{userProgress.dailyGoals.maxApplications}
                </span>
              </div>
            </div>
            
            <button className="btn-primary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Zap size={16} />
              <span>Turbo</span>
            </button>
            
            <button style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--main-background)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}>
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};