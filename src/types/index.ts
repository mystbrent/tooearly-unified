export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  workMode: 'remote' | 'onsite' | 'hybrid';
  salary: {
    min: number;
    max: number;
    currency: string;
  };
  matchScore: number;
  description: string;
  requirements: string[];
  benefits: string[];
  postedDate: Date;
  applicationDeadline?: Date;
  isLiked: boolean;
  companyLogo?: string;
  tags: string[];
  // Enhanced pipeline tracking
  outcomes?: {
    applicationDate?: Date;
    firstResponse?: Date;
    interviewDates: Date[];
    offerReceived?: boolean;
    offerAmount?: number;
    finalOutcome: 'hired' | 'rejected' | 'withdrawn' | 'pending';
  };
  aiInsights?: {
    successProbability: number;
    recommendedActions: string[];
    marketPosition: 'below' | 'at' | 'above';
    timingOptimality: number;
  };
  // Multi-board context
  boardContext?: {
    boardId: string;
    boardCategory: 'location' | 'urgency' | 'industry' | 'strategy' | 'custom';
    addedDate: Date;
    boardSpecificNotes?: string;
  };
}

export interface PipelineStage {
  id: string;
  name: string;
  color: string;
  jobs: Job[];
  actions: string[];
  // Enhanced stage analytics
  conversionRate?: number;
  averageTimeInStage?: number;
  successPredictors?: string[];
  // Multi-board stage configuration
  boardSpecificConfig?: {
    customActions?: string[];
    stageGoals?: string[];
    automationRules?: AutomationRule[];
  };
}

export interface UserProgress {
  xp: number;
  level: number;
  streak: number;
  dailyGoals: {
    applications: number;
    maxApplications: number;
    viewedJobs: number;
    maxViewedJobs: number;
  };
  achievements: Achievement[];
  // Enhanced performance metrics
  performanceMetrics?: {
    overallSuccessRate: number;
    stageConversionRates: Record<string, number>;
    averageTimeInStage: Record<string, number>;
    negotiationSuccessRate: number;
    interviewPreparationCorrelation: number;
    // Multi-board performance
    boardPerformanceRates?: Record<string, number>;
    crossBoardEfficiency?: number;
    boardSpecializationScore?: number;
  };
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  xpReward: number;
  unlockedAt?: Date;
  category: 'discovery' | 'application' | 'interview' | 'streak' | 'negotiation' | 'outcome' | 'multi-board' | 'cross-board';
  // Enhanced achievement types
  type?: 'performance' | 'milestone' | 'improvement' | 'consistency' | 'strategy' | 'optimization';
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
  // Multi-board specific
  boardContext?: {
    applicableBoards?: string[];
    crossBoardRequirement?: boolean;
    boardSpecializationLevel?: number;
  };
}

export interface FilterState {
  location: string;
  jobType: string[];
  workMode: string[];
  experienceLevel: string[];
  salaryRange: [number, number];
  company: string;
  skills: string[];
  // Multi-board filters
  boardFilters?: {
    boardCategory?: string[];
    boardPerformance?: 'high' | 'medium' | 'low' | 'all';
    crossBoardOpportunities?: boolean;
  };
}

export type ViewMode = 'discovery' | 'pipeline' | 'unified';

export interface RightPanelContext {
  type: 'job-details' | 'gamification' | 'pipeline-actions' | 'smart-context' | 'multi-board-analytics';
  data?: any;
}

// Enhanced AI and Analytics Types
export interface AIInsight {
  type: 'success_prediction' | 'timing_optimization' | 'strategy_recommendation' | 'market_intelligence' | 'board_optimization' | 'cross_board_opportunity';
  confidence: number;
  message: string;
  actionable: boolean;
  data?: any;
  // Multi-board context
  boardContext?: {
    applicableBoards: string[];
    crossBoardImplication?: boolean;
    boardSpecificRecommendation?: string;
  };
}

export interface PipelineAnalytics {
  healthScore: number;
  overdueActions: number;
  hotOpportunities: number;
  successRate: number;
  improvementAreas: string[];
  benchmarkData: {
    userPercentile: number;
    averageSuccessRate: number;
    topPerformerInsights: string[];
  };
  // Multi-board analytics
  multiBoardMetrics?: {
    totalBoards: number;
    activeBoardsCount: number;
    boardUtilizationRate: number;
    crossBoardSynergies: CrossBoardSynergy[];
    boardPerformanceRanking: BoardPerformanceRank[];
  };
}

export interface MarketIntelligence {
  salaryTrends: Record<string, number>;
  demandIndicators: Record<string, 'high' | 'medium' | 'low'>;
  timingRecommendations: Record<string, string>;
  competitionLevel: Record<string, number>;
  // Multi-board market intelligence
  boardSpecificIntelligence?: {
    locationBasedTrends: Record<string, MarketTrend>;
    industrySpecificInsights: Record<string, IndustryInsight>;
    urgencyBasedOpportunities: UrgencyOpportunity[];
  };
}

export interface LearningInsight {
  pattern: string;
  correlation: number;
  recommendation: string;
  evidenceCount: number;
  applicableToUser: boolean;
  // Multi-board learning
  boardContext?: {
    discoveredInBoard: string;
    applicableToBoards: string[];
    crossBoardPattern: boolean;
  };
}

// Multi-Board Specific Types
export interface JobBoard {
  id: string;
  name: string;
  category: 'location' | 'urgency' | 'industry' | 'strategy' | 'custom';
  description?: string;
  jobCount: number;
  successRate: number;
  icon: string;
  color: string;
  healthScore: number;
  averageTimeToOffer: number;
  overdueActions: number;
  hotOpportunities: number;
  aiOptimizationScore: number;
  template?: BoardTemplate;
  createdDate?: Date;
  lastModified?: Date;
  
  // Board configuration
  config?: {
    colorScheme: ColorScheme;
    stageCustomization: StageCustomization[];
    automationRules: AutomationRule[];
    filterPresets: FilterPreset[];
  };
  
  // Board performance
  metrics?: {
    totalJobs: number;
    activeJobs: number;
    successRate: number;
    averageTimeToOffer: number;
    conversionRates: Record<string, number>;
    boardHealthScore: number;
  };
  
  // AI insights for board
  aiInsights?: {
    performanceAnalysis: BoardPerformanceAnalysis;
    optimizationSuggestions: BoardOptimizationSuggestion[];
    crossBoardOpportunities: CrossBoardOpportunity[];
    strategicRecommendations: StrategicRecommendation[];
  };
}

export interface BoardTemplate {
  id: string;
  name: string;
  category: 'location' | 'urgency' | 'industry' | 'strategy' | 'custom';
  stages: StageTemplate[];
  defaultFilters: FilterState;
  recommendedWorkflow: WorkflowStep[];
  successMetrics: SuccessMetric[];
}

export interface StageTemplate {
  id: string;
  name: string;
  description: string;
  color: string;
  defaultActions: string[];
  automationTriggers?: AutomationTrigger[];
  successCriteria?: SuccessCriteria[];
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: AutomationTrigger;
  action: AutomationAction;
  conditions: AutomationCondition[];
  isActive: boolean;
}

export interface AutomationTrigger {
  type: 'time_based' | 'stage_change' | 'job_added' | 'external_event';
  parameters: Record<string, any>;
}

export interface AutomationAction {
  type: 'move_job' | 'send_notification' | 'create_task' | 'update_status';
  parameters: Record<string, any>;
}

export interface AutomationCondition {
  field: string;
  operator: 'equals' | 'greater_than' | 'less_than' | 'contains';
  value: any;
}

// Cross-Board Analytics Types
export interface CrossBoardSynergy {
  boardIds: string[];
  synergyType: 'complementary' | 'overlapping' | 'competitive';
  strength: number;
  recommendations: string[];
}

export interface BoardPerformanceRank {
  boardId: string;
  rank: number;
  score: number;
  strengths: string[];
  improvementAreas: string[];
}

export interface CrossBoardOpportunity {
  type: 'job_transfer' | 'strategy_replication' | 'resource_reallocation';
  fromBoard: string;
  toBoard: string;
  opportunity: string;
  potentialImpact: number;
  actionRequired: string;
}

export interface BoardPerformanceAnalysis {
  overallScore: number;
  strengthAreas: string[];
  improvementAreas: string[];
  benchmarkComparison: BenchmarkComparison;
  trendAnalysis: TrendAnalysis;
}

export interface BoardOptimizationSuggestion {
  type: 'workflow' | 'automation' | 'resource_allocation' | 'strategy';
  priority: 'high' | 'medium' | 'low';
  suggestion: string;
  expectedImpact: number;
  implementationEffort: 'low' | 'medium' | 'high';
}

export interface StrategicRecommendation {
  category: 'focus' | 'expansion' | 'optimization' | 'consolidation';
  recommendation: string;
  reasoning: string;
  expectedOutcome: string;
  timeframe: string;
}

// UI and Navigation Types
export interface NavigationBreadcrumb {
  label: string;
  path: string;
  isActive: boolean;
}

export interface BoardSwitchRecord {
  fromBoard: string;
  toBoard: string;
  timestamp: Date;
  context: string;
}

export interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface StageCustomization {
  stageId: string;
  customName?: string;
  customColor?: string;
  customActions?: string[];
  isVisible: boolean;
  sortOrder: number;
}

export interface FilterPreset {
  id: string;
  name: string;
  filters: FilterState;
  isDefault: boolean;
}

export interface WorkflowStep {
  id: string;
  name: string;
  description: string;
  estimatedTime: number;
  dependencies: string[];
  automatable: boolean;
}

export interface SuccessMetric {
  id: string;
  name: string;
  description: string;
  target: number;
  current: number;
  unit: string;
}

export interface SuccessCriteria {
  id: string;
  description: string;
  measurable: boolean;
  target?: number;
}

// Market Intelligence Types
export interface MarketTrend {
  trend: 'increasing' | 'decreasing' | 'stable';
  percentage: number;
  timeframe: string;
  factors: string[];
}

export interface IndustryInsight {
  growth: number;
  competitiveness: 'high' | 'medium' | 'low';
  keySkills: string[];
  salaryTrends: SalaryTrend[];
}

export interface UrgencyOpportunity {
  type: 'immediate' | 'short_term' | 'seasonal';
  description: string;
  timeframe: string;
  actionRequired: string;
}

export interface SalaryTrend {
  role: string;
  trend: 'increasing' | 'decreasing' | 'stable';
  percentage: number;
  timeframe: string;
}

export interface BenchmarkComparison {
  userPercentile: number;
  industryAverage: number;
  topPerformerBenchmark: number;
  improvementPotential: number;
}

export interface TrendAnalysis {
  direction: 'improving' | 'declining' | 'stable';
  velocity: number;
  projectedOutcome: string;
  confidenceLevel: number;
}