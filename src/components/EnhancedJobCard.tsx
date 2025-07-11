import React, { useState } from 'react';
import { Heart, Eye, Zap, MapPin, DollarSign, Building, Clock, TrendingUp, Flame, Gem, Calendar } from 'lucide-react';
import { Job } from '../types';

interface EnhancedJobCardProps {
  job: Job;
  onLike: (jobId: string) => void;
  onView: (job: Job) => void;
  onQuickApply: (job: Job) => void;
  priority?: 'trending' | 'hot' | 'rare' | 'urgent' | 'normal';
}

export const EnhancedJobCard: React.FC<EnhancedJobCardProps> = ({
  job,
  onLike,
  onView,
  onQuickApply,
  priority = 'normal'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatSalary = (salary: Job['salary']) => {
    const format = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `$${format(salary.min)}-${format(salary.max)}`;
  };

  const getPriorityBadge = () => {
    switch (priority) {
      case 'trending':
        return { icon: TrendingUp, label: 'TRENDING', color: 'var(--primary-action)' };
      case 'hot':
        return { icon: Flame, label: 'HOT', color: 'var(--secondary-action)' };
      case 'rare':
        return { icon: Gem, label: 'RARE', color: 'var(--reward)' };
      case 'urgent':
        return { icon: Clock, label: 'URGENT', color: 'var(--urgent)' };
      default:
        return null;
    }
  };

  const getMatchScoreClass = (score: number) => {
    if (score >= 90) return 'match-score high';
    if (score >= 80) return 'match-score medium';
    return 'match-score low';
  };

  const priorityBadge = getPriorityBadge();

  return (
    <div 
      className="maximized-card"
      style={{
        height: '320px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 8px 25px rgba(0, 0, 0, 0.15)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Priority Badge */}
      {priorityBadge && (
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          padding: '4px 8px',
          borderRadius: '12px',
          backgroundColor: priorityBadge.color,
          color: 'white',
          fontSize: '11px',
          fontWeight: '700',
          zIndex: 1
        }}>
          <priorityBadge.icon size={12} />
          {priorityBadge.label}
        </div>
      )}

      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        gap: '12px', 
        marginBottom: '12px'
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          backgroundColor: 'var(--main-background)',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid var(--subtle-border)'
        }}>
          <Building size={24} style={{ color: 'var(--text-secondary)' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h3 style={{ 
            fontWeight: '700', 
            color: 'var(--text-primary)', 
            fontSize: '16px',
            margin: '0 0 4px 0',
            lineHeight: '1.2'
          }}>
            {job.title}
          </h3>
          <p style={{ 
            fontSize: '14px', 
            color: 'var(--text-secondary)',
            margin: '0',
            fontWeight: '600'
          }}>
            {job.company}
          </p>
        </div>
      </div>

      {/* Match Score */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginBottom: '16px'
      }}>
        <div className={getMatchScoreClass(job.matchScore)} style={{
          fontSize: '14px',
          fontWeight: '700',
          padding: '6px 16px'
        }}>
          🎯 {job.matchScore}% MATCH
        </div>
      </div>

      {/* Key Details */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          fontWeight: '500'
        }}>
          <MapPin size={14} />
          <span>{job.location}</span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '6px',
          fontSize: '13px',
          color: 'var(--text-secondary)',
          fontWeight: '500'
        }}>
          <DollarSign size={14} />
          <span>{formatSalary(job.salary)}</span>
        </div>
        <div style={{ 
          fontSize: '13px',
          color: 'var(--text-secondary)',
          textTransform: 'capitalize',
          fontWeight: '500'
        }}>
          📍 {job.workMode}
        </div>
        <div style={{ 
          fontSize: '13px',
          color: 'var(--text-secondary)',
          textTransform: 'capitalize',
          fontWeight: '500'
        }}>
          💼 {job.type}
        </div>
      </div>

      {/* Urgency Indicator */}
      {priority === 'urgent' && (
        <div style={{
          backgroundColor: 'rgba(255, 68, 68, 0.1)',
          border: '1px solid var(--urgent)',
          borderRadius: '6px',
          padding: '8px',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          <div style={{ 
            fontSize: '12px', 
            color: 'var(--urgent)', 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px'
          }}>
            <Calendar size={12} />
            Apply by Friday
          </div>
        </div>
      )}

      {/* Skills Tags */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '6px', 
        marginBottom: 'auto'
      }}>
        {job.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            style={{
              padding: '4px 8px',
              backgroundColor: 'var(--main-background)',
              color: 'var(--text-secondary)',
              fontSize: '11px',
              borderRadius: '12px',
              fontWeight: '600',
              border: '1px solid var(--subtle-border)'
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginTop: '16px',
        paddingTop: '12px',
        borderTop: '1px solid var(--subtle-border)'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => onLike(job.id)}
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: job.isLiked ? 'rgba(255, 68, 68, 0.1)' : 'var(--main-background)',
              color: job.isLiked ? 'var(--urgent)' : 'var(--text-secondary)'
            }}
          >
            <Heart size={16} fill={job.isLiked ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={() => onView(job)}
            style={{
              padding: '8px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'var(--main-background)',
              color: 'var(--text-secondary)'
            }}
          >
            <Eye size={16} />
          </button>
        </div>
        <button
          onClick={() => onQuickApply(job)}
          className="btn-primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px',
            fontWeight: '600',
            padding: '10px 16px',
            borderRadius: '8px'
          }}
        >
          <Zap size={14} />
          <span>APPLY</span>
        </button>
      </div>
    </div>
  );
};