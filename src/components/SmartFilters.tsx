import React, { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, DollarSign, TrendingUp, Zap, Target, ChevronDown } from 'lucide-react';
import { FilterState } from '../types';

interface SmartFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export const SmartFilters: React.FC<SmartFiltersProps> = ({ filters, onFiltersChange }) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const quickFilters = [
    { label: 'Startups', type: 'company', value: 'startup' },
    { label: 'FAANG', type: 'company', value: 'faang' },
    { label: 'Fintech', type: 'industry', value: 'fintech' },
    { label: 'AI/ML', type: 'skills', value: 'ai' },
    { label: 'Recently Posted', type: 'date', value: 'recent' },
    { label: 'High Match', type: 'match', value: 'high' }
  ];

  const handleQuickFilter = (filter: any) => {
    // Implementation for quick filters
    console.log('Quick filter applied:', filter);
  };

  return (
    <div style={{
      backgroundColor: 'var(--main-background)',
      padding: '16px 20px',
      borderBottom: '1px solid var(--subtle-border)'
    }}>
      {/* Main Search Bar */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px', 
        marginBottom: '12px'
      }}>
        <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
          <Search size={20} style={{ 
            position: 'absolute', 
            left: '12px', 
            top: '50%', 
            transform: 'translateY(-50%)',
            color: 'var(--text-secondary)' 
          }} />
          <input
            type="text"
            placeholder="Backend Engineer, Senior Level, SF Bay Area..."
            style={{
              width: '100%',
              padding: '10px 12px 10px 40px',
              border: '1px solid var(--subtle-border)',
              borderRadius: '8px',
              fontSize: '14px',
              backgroundColor: 'var(--content-background)',
              color: 'var(--text-primary)'
            }}
            value={filters.company}
            onChange={(e) => onFiltersChange({ ...filters, company: e.target.value })}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <select style={{
            padding: '10px 12px',
            border: '1px solid var(--subtle-border)',
            borderRadius: '8px',
            backgroundColor: 'var(--content-background)',
            color: 'var(--text-primary)',
            fontSize: '14px'
          }}>
            <option>Senior Level</option>
            <option>Mid Level</option>
            <option>Entry Level</option>
            <option>Staff/Principal</option>
          </select>

          <select style={{
            padding: '10px 12px',
            border: '1px solid var(--subtle-border)',
            borderRadius: '8px',
            backgroundColor: 'var(--content-background)',
            color: 'var(--text-primary)',
            fontSize: '14px'
          }}>
            <option>Remote OK</option>
            <option>Remote Only</option>
            <option>Hybrid</option>
            <option>On-site</option>
          </select>

          <select style={{
            padding: '10px 12px',
            border: '1px solid var(--subtle-border)',
            borderRadius: '8px',
            backgroundColor: 'var(--content-background)',
            color: 'var(--text-primary)',
            fontSize: '14px'
          }}>
            <option>"{'>'}"$120K</option>
            <option>"{'>'}"$150K</option>
            <option>"{'>'}"$180K</option>
            <option>"{'>'}"$200K</option>
          </select>

          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 12px',
              border: '1px solid var(--subtle-border)',
              borderRadius: '8px',
              backgroundColor: 'var(--content-background)',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              cursor: 'pointer'
            }}
          >
            <Filter size={16} />
            Advanced
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

      {/* Quick Filters */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          fontSize: '14px', 
          color: 'var(--text-secondary)', 
          fontWeight: '500',
          marginRight: '4px'
        }}>
          Quick:
        </span>
        {quickFilters.map((filter, index) => (
          <button
            key={index}
            onClick={() => handleQuickFilter(filter)}
            style={{
              padding: '6px 12px',
              borderRadius: '16px',
              border: '1px solid var(--subtle-border)',
              backgroundColor: 'var(--content-background)',
              color: 'var(--text-secondary)',
              fontSize: '13px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-action)';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = 'var(--primary-action)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--content-background)';
              e.currentTarget.style.color = 'var(--text-secondary)';
              e.currentTarget.style.borderColor = 'var(--subtle-border)';
            }}
          >
            {filter.label}
          </button>
        ))}
        
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '6px 12px',
            borderRadius: '16px',
            border: '1px solid var(--primary-action)',
            backgroundColor: 'rgba(0, 168, 232, 0.1)',
            color: 'var(--primary-action)',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          <TrendingUp size={12} />
          Match Insights
        </button>
      </div>

      {/* Market Data Bar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '12px',
        padding: '8px 0',
        fontSize: '13px',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            🔥 <strong>87</strong> new jobs today
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            📈 <strong>+12%</strong> salaries this month
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            🏆 Your profile ranks <strong>top 25%</strong> for skills
          </span>
        </div>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '4px',
          color: 'var(--achievement)',
          fontWeight: '600'
        }}>
          <Target size={14} />
          47 new matches for you
        </div>
      </div>
    </div>
  );
};