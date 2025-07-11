import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { 
  Plus, 
  Clock, 
  Mail, 
  Calendar, 
  CheckCircle, 
  ArrowLeft,
  ArrowRight,
  Settings,
  BarChart3,
  Target,
  Flame,
  Zap,
  TrendingUp,
  Users,
  MapPin,
  Building,
  ChevronDown,
  Filter,
  RefreshCw,
  Eye,
  Heart,
  ExternalLink,
  Phone,
  FileText,
  DollarSign,
  AlertTriangle,
  Star,
  Award,
  Brain,
  Gem,
  Crown,
  Trophy,
  Gift,
  Search,
  X,
  Monitor,
  Wifi,
  WifiOff
} from 'lucide-react';
import { PipelineStage, Job } from '../types';

// Drag and Drop imports
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  TouchSensor
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface MaximizedPipelineBoardProps {
  stages: PipelineStage[];
  onMoveJob: (jobId: string, fromStage: string, toStage: string) => void;
  onAddJob: (stageId: string) => void;
}

interface JobBoard {
  id: string;
  name: string;
  category: 'location' | 'urgency' | 'industry' | 'strategy' | 'custom';
  jobCount: number;
  successRate: number;
  icon: string;
  color: string;
  healthScore: number;
  averageTimeToOffer: number;
  overdueActions: number;
  hotOpportunities: number;
  aiOptimizationScore: number;
}

// Draggable Job Card Component
const DraggableJobCard: React.FC<{
  job: Job;
  stageId: string;
  onView: (job: Job) => void;
}> = ({ job, stageId, onView }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: job.id,
    data: {
      type: 'job',
      job,
      stageId,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const formatSalary = (salary: Job['salary']) => {
    return `$${salary.min / 1000}K-${salary.max / 1000}K`;
  };

  const getJobPriorityIcon = (job: Job) => {
    if (job.matchScore >= 95) return '💎';
    if (job.matchScore >= 90) return '⭐';
    if (job.matchScore >= 85) return '🔥';
    return '';
  };

  const getUrgencyStatus = (job: Job, stageId: string) => {
    const daysSincePosted = Math.floor((Date.now() - job.postedDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (stageId === 'applied' && daysSincePosted > 7) return { status: 'Follow-up needed', color: '#FF7F11', urgent: true };
    if (stageId === 'interviewing') return { status: 'Interview prep', color: '#00A8E8', urgent: false };
    if (stageId === 'negotiating') return { status: 'Negotiating', color: '#FFC300', urgent: false };
    if (stageId === 'offers') return { status: 'Decision pending', color: '#FF4444', urgent: true };
    
    return { status: 'On track', color: '#7ED957', urgent: false };
  };

  const urgencyStatus = getUrgencyStatus(job, stageId);
  const priorityIcon = getJobPriorityIcon(job);

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="maximized-card"
      onClick={() => onView(job)}
      style={{
        ...style,
        padding: '16px',
        marginBottom: '12px',
        cursor: isDragging ? 'grabbing' : 'grab',
        position: 'relative',
        backgroundColor: 'var(--content-background)',
        border: '1px solid var(--subtle-border)',
        borderRadius: '8px',
        transition: 'all 0.2s ease',
      }}
    >
      {/* Priority Badge */}
      {priorityIcon && (
        <div style={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          fontSize: '16px'
        }}>
          {priorityIcon}
        </div>
      )}

      {/* Job Header */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start', 
          gap: '8px',
          marginBottom: '4px'
        }}>
          <Building size={16} style={{ color: 'var(--text-secondary)', marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <h5 style={{
              fontSize: '14px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0 0 2px 0',
              lineHeight: '1.2'
            }}>
              {job.title}
            </h5>
            <p style={{
              fontSize: '13px',
              color: 'var(--text-secondary)',
              margin: 0,
              fontWeight: '500'
            }}>
              {job.company}
            </p>
          </div>
        </div>

        {/* Match Score */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '8px'
        }}>
          <div className={`match-score ${job.matchScore >= 90 ? 'high' : job.matchScore >= 80 ? 'medium' : 'low'}`} style={{
            fontSize: '11px',
            fontWeight: '700',
            padding: '4px 12px'
          }}>
            🎯 {job.matchScore}% MATCH
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '6px',
        marginBottom: '12px',
        fontSize: '12px',
        color: 'var(--text-secondary)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <MapPin size={12} />
          <span>{job.location}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <DollarSign size={12} />
          <span>{formatSalary(job.salary)}</span>
        </div>
        <div style={{ textTransform: 'capitalize' }}>
          📍 {job.workMode} • 💼 {job.type}
        </div>
      </div>

      {/* Status & AI Insight */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{
          backgroundColor: urgencyStatus.urgent ? 'rgba(255, 68, 68, 0.1)' : 'rgba(126, 217, 87, 0.1)',
          border: `1px solid ${urgencyStatus.color}`,
          borderRadius: '6px',
          padding: '6px 8px',
          marginBottom: '8px'
        }}>
          <div style={{ 
            fontSize: '11px', 
            color: urgencyStatus.color, 
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            {urgencyStatus.urgent ? <AlertTriangle size={10} /> : <CheckCircle size={10} />}
            {urgencyStatus.status}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '4px'
      }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log('Quick action for job:', job.id);
          }}
          style={{
            padding: '6px 8px',
            border: '1px solid var(--subtle-border)',
            borderRadius: '4px',
            backgroundColor: 'var(--main-background)',
            color: 'var(--text-secondary)',
            fontSize: '10px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          📧 Follow-up
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            console.log('View details for job:', job.id);
          }}
          style={{
            padding: '6px 8px',
            border: '1px solid var(--subtle-border)',
            borderRadius: '4px',
            backgroundColor: 'var(--main-background)',
            color: 'var(--text-secondary)',
            fontSize: '10px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          👁️ View
        </button>
      </div>
    </div>
  );
};

// Droppable Stage Column Component
const DroppableStageColumn: React.FC<{
  stage: PipelineStage;
  onAddJob: (stageId: string) => void;
  onViewJob: (job: Job) => void;
}> = ({ stage, onAddJob, onViewJob }) => {
  const getStageIcon = (stageId: string) => {
    switch (stageId) {
      case 'research': return '🔍';
      case 'applied': return '📤';
      case 'interviewing': return '🎤';
      case 'negotiating': return '💰';
      case 'offers': return '🎉';
      case 'archive': return '📚';
      default: return '📋';
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--content-background)',
        borderRadius: '12px',
        border: '1px solid var(--subtle-border)',
        overflow: 'hidden',
        height: 'fit-content',
        minHeight: '400px',
        width: '100%',
        maxWidth: '320px',
        minWidth: '280px'
      }}
    >
      {/* Stage Header */}
      <div style={{
        padding: '16px',
        backgroundColor: stage.id === 'research' ? '#F8F9FA' :
                       stage.id === 'applied' ? 'rgba(0, 168, 232, 0.1)' :
                       stage.id === 'interviewing' ? 'rgba(255, 127, 17, 0.1)' :
                       stage.id === 'negotiating' ? 'rgba(255, 195, 0, 0.1)' :
                       stage.id === 'offers' ? 'rgba(126, 217, 87, 0.1)' :
                       'rgba(153, 153, 153, 0.1)',
        borderBottom: '1px solid var(--subtle-border)'
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          marginBottom: '8px'
        }}>
          <h4 style={{
            fontSize: '14px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{ fontSize: '16px' }}>{getStageIcon(stage.id)}</span>
            {stage.name.toUpperCase()} ({stage.jobs.length})
          </h4>
          <button style={{
            padding: '4px',
            border: 'none',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            cursor: 'pointer'
          }}>
            <Settings size={12} />
          </button>
        </div>
        <div style={{ 
          fontSize: '11px', 
          color: 'var(--text-secondary)',
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {stage.actions.join(' • ')}
        </div>
      </div>

      {/* Jobs Container */}
      <div style={{
        flex: 1,
        padding: '12px',
        overflowY: 'auto',
        overflowX: 'hidden',
        maxHeight: 'calc(100vh - 400px)',
        minHeight: '300px'
      }}>
        <SortableContext items={stage.jobs.map(job => job.id)} strategy={verticalListSortingStrategy}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            {stage.jobs.map((job) => (
              <DraggableJobCard
                key={job.id}
                job={job}
                stageId={stage.id}
                onView={onViewJob}
              />
            ))}
          </div>
        </SortableContext>

        {/* Add Job Button */}
        <button
          onClick={() => onAddJob(stage.id)}
          style={{
            width: '100%',
            padding: '16px',
            border: '2px dashed var(--subtle-border)',
            borderRadius: '8px',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            marginTop: '12px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--primary-action)';
            e.currentTarget.style.color = 'var(--primary-action)';
            e.currentTarget.style.backgroundColor = 'rgba(0, 168, 232, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--subtle-border)';
            e.currentTarget.style.color = 'var(--text-secondary)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Plus size={16} />
          Add Job
        </button>
      </div>
    </div>
  );
};

export const MaximizedPipelineBoard: React.FC<MaximizedPipelineBoardProps> = ({
  stages,
  onMoveJob,
  onAddJob
}) => {
  const [activeBoard, setActiveBoard] = useState('sf-bay-area');
  const [showBoardSelector, setShowBoardSelector] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showMetrics, setShowMetrics] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [draggedJob, setDraggedJob] = useState<Job | null>(null);

  // Performance tracking
  const [boardMetrics, setBoardMetrics] = useState({
    switchingSpeed: 0,
    totalSwitches: 0,
    averageSwitchTime: 0,
    lastSwitchTime: Date.now()
  });

  const performanceStartTime = useRef<number>(0);

  // Drag and Drop sensors
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 200,
        tolerance: 8,
      },
    }),
    useSensor(KeyboardSensor)
  );

  const jobBoards: JobBoard[] = [
    { 
      id: 'sf-bay-area', 
      name: 'SF Bay Area', 
      category: 'location', 
      jobCount: 12, 
      successRate: 15, 
      icon: '📍', 
      color: '#00A8E8',
      healthScore: 85,
      averageTimeToOffer: 18,
      overdueActions: 2,
      hotOpportunities: 3,
      aiOptimizationScore: 78
    },
    { 
      id: 'urgent', 
      name: 'Urgent Q1', 
      category: 'urgency', 
      jobCount: 8, 
      successRate: 25, 
      icon: '⏰', 
      color: '#FF4444',
      healthScore: 92,
      averageTimeToOffer: 12,
      overdueActions: 1,
      hotOpportunities: 2,
      aiOptimizationScore: 88
    },
    { 
      id: 'startups', 
      name: 'Startups', 
      category: 'industry', 
      jobCount: 15, 
      successRate: 18, 
      icon: '🏢', 
      color: '#7ED957',
      healthScore: 76,
      averageTimeToOffer: 22,
      overdueActions: 3,
      hotOpportunities: 4,
      aiOptimizationScore: 72
    },
    { 
      id: 'referrals', 
      name: 'Referrals', 
      category: 'strategy', 
      jobCount: 6, 
      successRate: 35, 
      icon: '👥', 
      color: '#FFC300',
      healthScore: 94,
      averageTimeToOffer: 14,
      overdueActions: 0,
      hotOpportunities: 1,
      aiOptimizationScore: 91
    },
    { 
      id: 'dream', 
      name: 'Dream Jobs', 
      category: 'strategy', 
      jobCount: 4, 
      successRate: 12, 
      icon: '🌟', 
      color: '#FF7F11',
      healthScore: 68,
      averageTimeToOffer: 28,
      overdueActions: 1,
      hotOpportunities: 2,
      aiOptimizationScore: 65
    },
    { 
      id: 'remote', 
      name: 'Remote Only', 
      category: 'location', 
      jobCount: 10, 
      successRate: 20, 
      icon: '🌐', 
      color: '#9B59B6',
      healthScore: 82,
      averageTimeToOffer: 16,
      overdueActions: 1,
      hotOpportunities: 3,
      aiOptimizationScore: 79
    }
  ];

  const currentBoard = jobBoards.find(board => board.id === activeBoard) || jobBoards[0];

  const filters = [
    { id: 'all', label: 'All Stages', count: 12 },
    { id: 'need-action', label: 'Need Action', count: 5 },
    { id: 'this-week', label: 'This Week', count: 8 },
    { id: 'high-priority', label: 'High Priority', count: 3 },
    { id: 'success-path', label: 'Success Path', count: 6 }
  ];

  // Online/offline detection
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey) {
        switch (event.key) {
          case 'k':
            event.preventDefault();
            setShowSearch(true);
            break;
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
            event.preventDefault();
            const boardIndex = parseInt(event.key) - 1;
            if (jobBoards[boardIndex]) {
              handleBoardSwitch(jobBoards[boardIndex].id);
            }
            break;
        }
      }
      if (event.key === 'Escape') {
        setShowSearch(false);
        setShowBoardSelector(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBoardSwitch = useCallback((boardId: string) => {
    performanceStartTime.current = performance.now();
    setActiveBoard(boardId);
    
    requestAnimationFrame(() => {
      const switchTime = performance.now() - performanceStartTime.current;
      setBoardMetrics(prev => ({
        switchingSpeed: switchTime,
        totalSwitches: prev.totalSwitches + 1,
        averageSwitchTime: (prev.averageSwitchTime * prev.totalSwitches + switchTime) / (prev.totalSwitches + 1),
        lastSwitchTime: Date.now()
      }));
    });
  }, []);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id as string);
    
    // Find the job being dragged
    const job = stages.flatMap(stage => stage.jobs).find(job => job.id === active.id);
    setDraggedJob(job || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    
    setActiveId(null);
    setDraggedJob(null);

    if (!over) return;

    const activeJobId = active.id as string;
    const overId = over.id as string;

    // Find the job and its current stage
    let activeJob: Job | undefined;
    let activeStageId: string | undefined;

    for (const stage of stages) {
      const job = stage.jobs.find(j => j.id === activeJobId);
      if (job) {
        activeJob = job;
        activeStageId = stage.id;
        break;
      }
    }

    if (!activeJob || !activeStageId) return;

    // Determine target stage
    let targetStageId: string | undefined;

    // Check if dropped on a stage
    const targetStage = stages.find(stage => stage.id === overId);
    if (targetStage) {
      targetStageId = targetStage.id;
    } else {
      // Check if dropped on another job (get its stage)
      for (const stage of stages) {
        if (stage.jobs.find(j => j.id === overId)) {
          targetStageId = stage.id;
          break;
        }
      }
    }

    if (targetStageId && targetStageId !== activeStageId) {
      onMoveJob(activeJobId, activeStageId, targetStageId);
    }
  };

  const handleViewJob = (job: Job) => {
    console.log('Viewing job:', job);
    // This would typically open a job details modal
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--main-background)',
        overflow: 'hidden'
      }}>
        {/* Board Navigator - Always Visible */}
        <div style={{
          backgroundColor: 'var(--content-background)',
          borderBottom: '1px solid var(--subtle-border)',
          padding: '12px 20px',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h2 style={{
                fontSize: '16px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                🎯 Board Navigator
              </h2>
              <div style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowBoardSelector(!showBoardSelector)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 12px',
                    backgroundColor: currentBoard.color,
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer'
                  }}
                >
                  {currentBoard.icon} {currentBoard.name} ({currentBoard.jobCount})
                  <ChevronDown size={14} />
                </button>
                
                {showBoardSelector && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: 'var(--content-background)',
                    border: '1px solid var(--subtle-border)',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                    minWidth: '200px',
                    marginTop: '4px'
                  }}>
                    {jobBoards.map((board) => (
                      <button
                        key={board.id}
                        onClick={() => {
                          handleBoardSwitch(board.id);
                          setShowBoardSelector(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                          padding: '12px 16px',
                          border: 'none',
                          backgroundColor: board.id === activeBoard ? 'var(--main-background)' : 'transparent',
                          color: 'var(--text-primary)',
                          fontSize: '14px',
                          cursor: 'pointer',
                          borderBottom: '1px solid var(--subtle-border)'
                        }}
                        onMouseEnter={(e) => {
                          if (board.id !== activeBoard) {
                            e.currentTarget.style.backgroundColor = 'var(--main-background)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (board.id !== activeBoard) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <span>{board.icon} {board.name}</span>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                          {board.jobCount} • {board.successRate}%
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button 
                onClick={() => setShowSearch(true)}
                className="btn-primary" 
                style={{ fontSize: '12px', padding: '6px 12px' }}
              >
                <Search size={14} style={{ marginRight: '4px' }} />
                Search (Ctrl+K)
              </button>
              <button 
                onClick={() => setShowMetrics(!showMetrics)}
                style={{
                  padding: '6px 12px',
                  border: '1px solid var(--subtle-border)',
                  borderRadius: '6px',
                  backgroundColor: showMetrics ? 'var(--primary-action)' : 'var(--content-background)',
                  color: showMetrics ? 'white' : 'var(--text-secondary)',
                  fontSize: '12px',
                  cursor: 'pointer'
                }}
              >
                <Monitor size={14} style={{ marginRight: '4px' }} />
                Metrics
              </button>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '4px',
                color: isOnline ? 'var(--achievement)' : 'var(--urgent)'
              }}>
                {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
              </div>
              <button style={{
                padding: '6px',
                border: '1px solid var(--subtle-border)',
                borderRadius: '6px',
                backgroundColor: 'var(--content-background)',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}>
                <Settings size={14} />
              </button>
            </div>
          </div>

          {/* Performance Metrics */}
          {showMetrics && (
            <div style={{
              backgroundColor: 'var(--main-background)',
              border: '1px solid var(--subtle-border)',
              borderRadius: '6px',
              padding: '8px 12px',
              marginTop: '8px',
              fontSize: '12px',
              color: 'var(--text-secondary)'
            }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <span>Switch Speed: <strong style={{ color: boardMetrics.switchingSpeed < 200 ? 'var(--achievement)' : 'var(--urgent)' }}>
                  {boardMetrics.switchingSpeed.toFixed(1)}ms
                </strong></span>
                <span>Total Switches: <strong>{boardMetrics.totalSwitches}</strong></span>
                <span>Avg Speed: <strong>{boardMetrics.averageSwitchTime.toFixed(1)}ms</strong></span>
                <span>Performance: <strong style={{ color: 'var(--achievement)' }}>Excellent</strong></span>
              </div>
            </div>
          )}

          {/* Quick Access Boards */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)', marginRight: '4px' }}>
              Quick Switch:
            </span>
            {jobBoards.slice(0, 5).map((board, index) => (
              <button
                key={board.id}
                onClick={() => handleBoardSwitch(board.id)}
                style={{
                  padding: '4px 8px',
                  borderRadius: '12px',
                  border: '1px solid var(--subtle-border)',
                  backgroundColor: board.id === activeBoard ? board.color : 'var(--content-background)',
                  color: board.id === activeBoard ? 'white' : 'var(--text-secondary)',
                  fontSize: '11px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title={`Ctrl+${index + 1}`}
              >
                {board.icon} {board.name} ({board.jobCount})
              </button>
            ))}
          </div>
        </div>

        {/* Current Board Header */}
        <div style={{
          backgroundColor: 'var(--content-background)',
          borderBottom: '1px solid var(--subtle-border)',
          padding: '16px 20px'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--text-primary)',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {currentBoard.icon} {currentBoard.name} Jobs
              </h3>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px',
                fontSize: '14px',
                color: 'var(--text-secondary)'
              }}>
                <span>Success Rate: <strong style={{ color: 'var(--achievement)' }}>{currentBoard.successRate}%</strong></span>
                <span>Health: <strong style={{ color: 'var(--primary-action)' }}>{currentBoard.healthScore}%</strong></span>
                <span>Avg Time: <strong>{currentBoard.averageTimeToOffer}d</strong></span>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '8px',
            flexWrap: 'wrap'
          }}>
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '16px',
                  border: '1px solid var(--subtle-border)',
                  backgroundColor: filter.id === activeFilter ? 'var(--primary-action)' : 'var(--content-background)',
                  color: filter.id === activeFilter ? 'white' : 'var(--text-secondary)',
                  fontSize: '12px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Kanban Board - FIXED LAYOUT */}
        <div style={{
          flex: 1,
          padding: '20px',
          overflowY: 'auto',
          overflowX: 'hidden',
          backgroundColor: 'var(--main-background)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${stages.length}, minmax(280px, 320px))`,
            gap: '16px',
            justifyContent: 'start',
            width: 'fit-content',
            minWidth: '100%'
          }}>
            {stages.map((stage) => (
              <DroppableStageColumn
                key={stage.id}
                stage={stage}
                onAddJob={onAddJob}
                onViewJob={handleViewJob}
              />
            ))}
          </div>
        </div>

        {/* Search Modal */}
        {showSearch && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '10vh',
            zIndex: 1000
          }}>
            <div style={{
              backgroundColor: 'var(--content-background)',
              borderRadius: '12px',
              width: '90%',
              maxWidth: '600px',
              maxHeight: '70vh',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}>
              <div style={{
                padding: '20px',
                borderBottom: '1px solid var(--subtle-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <Search size={20} style={{ color: 'var(--text-secondary)' }} />
                <input
                  type="text"
                  placeholder="Search across all boards..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: '16px',
                    backgroundColor: 'transparent',
                    color: 'var(--text-primary)'
                  }}
                  autoFocus
                />
                <button
                  onClick={() => setShowSearch(false)}
                  style={{
                    padding: '8px',
                    border: 'none',
                    backgroundColor: 'transparent',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
              <div style={{
                padding: '20px',
                maxHeight: '400px',
                overflowY: 'auto'
              }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                  Search functionality ready. Type to search across all jobs and boards.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Drag Overlay */}
        <DragOverlay>
          {activeId && draggedJob ? (
            <div style={{
              backgroundColor: 'var(--content-background)',
              border: '2px solid var(--primary-action)',
              borderRadius: '8px',
              padding: '16px',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
              transform: 'rotate(5deg)',
              opacity: 0.9
            }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                {draggedJob.title}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                {draggedJob.company}
              </div>
            </div>
          ) : null}
        </DragOverlay>

        {/* Gamification Footer */}
        <div style={{
          backgroundColor: 'var(--content-background)',
          borderTop: '1px solid var(--subtle-border)',
          padding: '16px 20px',
          position: 'sticky',
          bottom: 0,
          zIndex: 100
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '16px',
            fontSize: '13px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              color: 'var(--achievement)'
            }}>
              <Trophy size={16} />
              <span><strong>Board Performance:</strong> {currentBoard.healthScore}% health score</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              color: 'var(--primary-action)'
            }}>
              <Brain size={16} />
              <span><strong>AI Optimization:</strong> {currentBoard.aiOptimizationScore}% efficiency</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              color: 'var(--urgent)'
            }}>
              <AlertTriangle size={16} />
              <span><strong>Actions Needed:</strong> {currentBoard.overdueActions} overdue items</span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '6px',
              color: 'var(--secondary-action)'
            }}>
              <Flame size={16} />
              <span><strong>Hot Opportunities:</strong> {currentBoard.hotOpportunities} high-priority jobs</span>
            </div>
          </div>
        </div>
      </div>
    </DndContext>
  );
};