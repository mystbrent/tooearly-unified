import React, { useState } from 'react';
import { Heart, Eye, Zap, MapPin, DollarSign, Building, ChevronDown, ChevronUp } from 'lucide-react';
import { Job } from '../types';

interface MaximizedJobCardProps {
  job: Job;
  onLike: (jobId: string) => void;
  onView: (job: Job) => void;
  onQuickApply: (job: Job) => void;
  compact?: boolean;
}

export const MaximizedJobCard: React.FC<MaximizedJobCardProps> = ({
  job,
  onLike,
  onView,
  onQuickApply,
  compact = false
}) => {
  const [expanded, setExpanded] = useState(false);

  const formatSalary = (salary: Job['salary']) => {
    const format = (num: number) => {
      if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
      if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
      return num.toString();
    };
    return `$${format(salary.min)}-${format(salary.max)}`;
  };

  const getMatchScoreClass = (score: number) => {
    if (score >= 90) return 'match-score high';
    if (score >= 70) return 'match-score medium';
    return 'match-score low';
  };

  return (
    <div className="maximized-card" style={{
      height: compact ? 'auto' : expanded ? 'auto' : '280px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Header */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'flex-start', 
        justifyContent: 'space-between', 
        marginBottom: '12px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'var(--main-background)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Building size={20} style={{ color: 'var(--text-secondary)' }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ 
              fontWeight: '600', 
              color: 'var(--text-primary)', 
              fontSize: '16px',
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap'
            }}>
              {job.title}
            </h3>
            <p style={{ 
              fontSize: '14px', 
              color: 'var(--text-secondary)',
              margin: '2px 0 0 0'
            }}>
              {job.company}
            </p>
          </div>
        </div>
        <div className={getMatchScoreClass(job.matchScore)}>
          {job.matchScore}% MATCH
        </div>
      </div>

      {/* Core Details */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px',
        marginBottom: '12px',
        fontSize: '14px',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <MapPin size={14} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {job.location}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <DollarSign size={14} />
          <span>{formatSalary(job.salary)}</span>
        </div>
        <div style={{ textTransform: 'capitalize' }}>
          {job.workMode}
        </div>
        <div style={{ textTransform: 'capitalize' }}>
          {job.type}
        </div>
      </div>

      {/* Tags */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '6px', 
        marginBottom: expanded ? '12px' : 'auto',
        flex: expanded ? 'none' : '1'
      }}>
        {job.tags.slice(0, expanded ? job.tags.length : 3).map((tag, index) => (
          <span
            key={index}
            style={{
              padding: '4px 8px',
              backgroundColor: 'var(--main-background)',
              color: 'var(--text-secondary)',
              fontSize: '12px',
              borderRadius: '12px',
              fontWeight: '500'
            }}
          >
            {tag}
          </span>
        ))}
        {!expanded && job.tags.length > 3 && (
          <span style={{
            padding: '4px 8px',
            backgroundColor: 'var(--primary-action)',
            color: 'white',
            fontSize: '12px',
            borderRadius: '12px',
            fontWeight: '500'
          }}>
            +{job.tags.length - 3}
          </span>
        )}
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div style={{ marginBottom: '12px' }}>
          <p style={{ 
            fontSize: '14px', 
            color: 'var(--text-secondary)', 
            lineHeight: '1.4',
            margin: '0 0 12px 0'
          }}>
            {job.description}
          </p>
          
          <div style={{ marginBottom: '8px' }}>
            <h4 style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: 'var(--text-primary)',
              margin: '0 0 6px 0',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Requirements
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {job.requirements.slice(0, 4).map((req, index) => (
                <span
                  key={index}
                  style={{
                    padding: '2px 6px',
                    backgroundColor: 'rgba(0, 168, 232, 0.1)',
                    color: 'var(--primary-action)',
                    fontSize: '11px',
                    borderRadius: '8px',
                    fontWeight: '500'
                  }}
                >
                  {req}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        marginTop: 'auto'
      }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => onLike(job.id)}
            style={{
              padding: '8px',
              borderRadius: '6px',
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
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'var(--main-background)',
              color: 'var(--text-secondary)'
            }}
          >
            <Eye size={16} />
          </button>
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              padding: '8px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              backgroundColor: 'var(--main-background)',
              color: 'var(--text-secondary)'
            }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
        <button
          onClick={() => onQuickApply(job)}
          className="btn-primary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '14px'
          }}
        >
          <Zap size={14} />
          <span>Apply</span>
        </button>
      </div>
    </div>
  );
};