import { useState, useEffect } from 'react';
import { Job, PipelineStage, UserProgress, AIInsight, PipelineAnalytics } from '../types';

export const useJobData = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [pipelineStages, setPipelineStages] = useState<PipelineStage[]>([]);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    xp: 125,
    level: 4,
    streak: 18,
    dailyGoals: {
      applications: 2,
      maxApplications: 3,
      viewedJobs: 6,
      maxViewedJobs: 10,
    },
    achievements: [
      {
        id: '1',
        title: 'Profile Master',
        description: 'Complete your profile to 90%',
        icon: '👤',
        xpReward: 15,
        unlockedAt: new Date(),
        category: 'discovery',
        type: 'milestone',
        rarity: 'common'
      },
      {
        id: '2',
        title: 'Application Streak',
        description: 'Apply to jobs for 7 consecutive days',
        icon: '🔥',
        xpReward: 35,
        unlockedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        category: 'streak',
        type: 'consistency',
        rarity: 'rare'
      },
      {
        id: '3',
        title: 'Negotiation Ninja',
        description: 'Successfully negotiated 2 offers',
        icon: '🥷',
        xpReward: 100,
        unlockedAt: new Date(Date.now() - 1 * 60 * 60 * 1000),
        category: 'negotiation',
        type: 'performance',
        rarity: 'epic'
      },
      {
        id: '4',
        title: 'Discovery Expert',
        description: 'Review 50 job matches',
        icon: '🔍',
        xpReward: 25,
        unlockedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        category: 'discovery',
        type: 'milestone',
        rarity: 'common'
      }
    ],
    performanceMetrics: {
      overallSuccessRate: 12.5,
      stageConversionRates: {
        'research': 85,
        'applied': 45,
        'interviewing': 67,
        'negotiating': 80,
        'offers': 90
      },
      averageTimeInStage: {
        'research': 3,
        'applied': 14,
        'interviewing': 7,
        'negotiating': 5,
        'offers': 3
      },
      negotiationSuccessRate: 75,
      interviewPreparationCorrelation: 67
    }
  });

  const [pipelineAnalytics, setPipelineAnalytics] = useState<PipelineAnalytics>({
    healthScore: 85,
    overdueActions: 3,
    hotOpportunities: 2,
    successRate: 12.5,
    improvementAreas: ['Follow-up timing', 'Interview preparation', 'Salary negotiation'],
    benchmarkData: {
      userPercentile: 75,
      averageSuccessRate: 8.3,
      topPerformerInsights: [
        'Follow up within 3 days increases response rate by 40%',
        'System design preparation correlates with 85% interview success',
        'Market research before negotiation improves outcomes by 60%'
      ]
    }
  });

  useEffect(() => {
    // Enhanced mock job data with AI insights and outcomes
    const mockJobs: Job[] = [
      {
        id: '1',
        title: 'Senior Backend Engineer',
        company: 'Stripe',
        location: 'San Francisco, CA (Hybrid)',
        type: 'full-time',
        workMode: 'hybrid',
        salary: { min: 160000, max: 180000, currency: 'USD' },
        matchScore: 96,
        description: 'Build and scale payment infrastructure that powers millions of businesses worldwide. Work with cutting-edge technology and solve complex distributed systems challenges.',
        requirements: ['Python', 'Go', 'PostgreSQL', 'Kubernetes', 'AWS'],
        benefits: ['Equity', 'Health Insurance', 'Unlimited PTO', 'Learning Budget'],
        postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        isLiked: false,
        tags: ['Backend', 'Python', 'Fintech', 'Scale'],
        aiInsights: {
          successProbability: 78,
          recommendedActions: ['Research company culture', 'Prepare system design examples', 'Apply by Friday deadline'],
          marketPosition: 'above',
          timingOptimality: 85
        }
      },
      {
        id: '2',
        title: 'Staff Software Engineer',
        company: 'Airbnb',
        location: 'Remote',
        type: 'full-time',
        workMode: 'remote',
        salary: { min: 180000, max: 200000, currency: 'USD' },
        matchScore: 94,
        description: 'Lead technical initiatives across multiple teams. Drive architecture decisions for our global platform serving millions of users.',
        requirements: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'Microservices'],
        benefits: ['Stock Options', 'Remote Work', 'Travel Credits', 'Professional Development'],
        postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        isLiked: true,
        tags: ['Full-Stack', 'Leadership', 'Remote', 'Travel'],
        outcomes: {
          applicationDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
          firstResponse: undefined,
          interviewDates: [],
          offerReceived: false,
          finalOutcome: 'pending'
        },
        aiInsights: {
          successProbability: 73,
          recommendedActions: ['Send follow-up email', 'Connect with hiring manager on LinkedIn', 'Prepare for technical screen'],
          marketPosition: 'at',
          timingOptimality: 92
        }
      },
      {
        id: '3',
        title: 'Principal Engineer',
        company: 'Uber',
        location: 'San Francisco, CA',
        type: 'full-time',
        workMode: 'onsite',
        salary: { min: 200000, max: 250000, currency: 'USD' },
        matchScore: 92,
        description: 'Shape the future of mobility technology. Lead cross-functional teams and drive technical strategy for our core platform.',
        requirements: ['Java', 'Kafka', 'Distributed Systems', 'Machine Learning', 'Leadership'],
        benefits: ['High Compensation', 'Equity', 'Uber Credits', 'Health Benefits'],
        postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        isLiked: false,
        tags: ['Java', 'ML', 'Leadership', 'Mobility'],
        outcomes: {
          applicationDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
          firstResponse: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
          interviewDates: [
            new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
            new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
          ],
          offerReceived: false,
          finalOutcome: 'pending'
        },
        aiInsights: {
          successProbability: 85,
          recommendedActions: ['Prepare system design questions', 'Review leadership examples', 'Research Uber\'s technical challenges'],
          marketPosition: 'above',
          timingOptimality: 95
        }
      },
      {
        id: '4',
        title: 'Senior Software Engineer L5',
        company: 'Google',
        location: 'Mountain View, CA',
        type: 'full-time',
        workMode: 'hybrid',
        salary: { min: 170000, max: 190000, currency: 'USD' },
        matchScore: 91,
        description: 'Work on products that impact billions of users. Collaborate with world-class engineers on cutting-edge technology.',
        requirements: ['C++', 'Python', 'Distributed Systems', 'Algorithm Design'],
        benefits: ['Google Perks', 'Stock Options', 'Learning Opportunities', 'Health Benefits'],
        postedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        isLiked: false,
        tags: ['C++', 'Scale', 'Algorithms', 'Impact'],
        outcomes: {
          applicationDate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
          firstResponse: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
          interviewDates: [
            new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
          ],
          offerReceived: false,
          finalOutcome: 'pending'
        },
        aiInsights: {
          successProbability: 73,
          recommendedActions: ['Practice coding problems', 'Review Google\'s engineering principles', 'Prepare behavioral examples'],
          marketPosition: 'at',
          timingOptimality: 88
        }
      },
      {
        id: '5',
        title: 'E6 Staff Engineer',
        company: 'Meta',
        location: 'Menlo Park, CA',
        type: 'full-time',
        workMode: 'hybrid',
        salary: { min: 220000, max: 250000, currency: 'USD' },
        matchScore: 96,
        description: 'Build the infrastructure that connects billions of people. Work on challenging problems at unprecedented scale.',
        requirements: ['PHP', 'Hack', 'MySQL', 'React', 'GraphQL'],
        benefits: ['Meta Stock', 'Wellness Benefits', 'Food & Transportation', 'Career Growth'],
        postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        isLiked: false,
        tags: ['PHP', 'Social', 'Scale', 'Innovation'],
        outcomes: {
          applicationDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
          firstResponse: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
          interviewDates: [
            new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
            new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
            new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
          ],
          offerReceived: true,
          offerAmount: 230000,
          finalOutcome: 'pending'
        },
        aiInsights: {
          successProbability: 95,
          recommendedActions: ['Review offer details', 'Research market rates', 'Consider total compensation package'],
          marketPosition: 'above',
          timingOptimality: 98
        }
      }
    ];

    const mockPipelineStages: PipelineStage[] = [
      {
        id: 'research',
        name: 'Research',
        color: '#D0D0D0',
        jobs: [mockJobs[0]],
        actions: ['Research', 'Plan', 'Apply'],
        conversionRate: 85,
        averageTimeInStage: 3,
        successPredictors: ['Company culture fit', 'Role requirements match', 'Application timing']
      },
      {
        id: 'applied',
        name: 'Applied',
        color: '#00A8E8',
        jobs: [mockJobs[1]],
        actions: ['Follow-up', 'Track', 'Optimize'],
        conversionRate: 45,
        averageTimeInStage: 14,
        successPredictors: ['Follow-up timing', 'Application quality', 'Referral presence']
      },
      {
        id: 'interviewing',
        name: 'Interviewing',
        color: '#FF7F11',
        jobs: [mockJobs[2], mockJobs[3]],
        actions: ['Prepare', 'Practice', 'Research'],
        conversionRate: 67,
        averageTimeInStage: 7,
        successPredictors: ['Technical preparation', 'Behavioral examples', 'Company knowledge']
      },
      {
        id: 'negotiating',
        name: 'Negotiating',
        color: '#FFC300',
        jobs: [],
        actions: ['Counter', 'Compare', 'Analyze'],
        conversionRate: 80,
        averageTimeInStage: 5,
        successPredictors: ['Market research', 'Negotiation timing', 'Multiple offers']
      },
      {
        id: 'offers',
        name: 'Offers',
        color: '#7ED957',
        jobs: [mockJobs[4]],
        actions: ['Accept', 'Decline', 'Negotiate'],
        conversionRate: 90,
        averageTimeInStage: 3,
        successPredictors: ['Total compensation', 'Career growth', 'Company culture']
      },
      {
        id: 'archive',
        name: 'Archive',
        color: '#999999',
        jobs: [],
        actions: ['Learn', 'Analyze', 'Improve'],
        conversionRate: 0,
        averageTimeInStage: 0,
        successPredictors: ['Learning extraction', 'Pattern recognition', 'Strategy improvement']
      }
    ];

    setJobs(mockJobs);
    setPipelineStages(mockPipelineStages);
  }, []);

  const addJobToPipeline = (job: Job, stageId: string) => {
    setPipelineStages(prev => prev.map(stage => 
      stage.id === stageId 
        ? { ...stage, jobs: [...stage.jobs, job] }
        : stage
    ));
  };

  const moveJobBetweenStages = (jobId: string, fromStageId: string, toStageId: string) => {
    setPipelineStages(prev => {
      const job = prev.find(s => s.id === fromStageId)?.jobs.find(j => j.id === jobId);
      if (!job) return prev;

      return prev.map(stage => {
        if (stage.id === fromStageId) {
          return { ...stage, jobs: stage.jobs.filter(j => j.id !== jobId) };
        }
        if (stage.id === toStageId) {
          return { ...stage, jobs: [...stage.jobs, job] };
        }
        return stage;
      });
    });
  };

  const updateUserProgress = (updates: Partial<UserProgress>) => {
    setUserProgress(prev => ({ ...prev, ...updates }));
  };

  const toggleJobLike = (jobId: string) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId ? { ...job, isLiked: !job.isLiked } : job
    ));
  };

  const generateAIInsights = (job: Job, stageId: string): AIInsight[] => {
    const insights: AIInsight[] = [];
    
    // Success prediction insight
    if (job.aiInsights?.successProbability) {
      insights.push({
        type: 'success_prediction',
        confidence: job.aiInsights.successProbability,
        message: `${job.aiInsights.successProbability}% chance of success based on similar profiles`,
        actionable: true,
        data: { probability: job.aiInsights.successProbability }
      });
    }

    // Timing optimization
    if (job.aiInsights?.timingOptimality) {
      insights.push({
        type: 'timing_optimization',
        confidence: job.aiInsights.timingOptimality,
        message: job.aiInsights.timingOptimality > 80 
          ? 'Optimal timing for application' 
          : 'Consider waiting for better timing',
        actionable: job.aiInsights.timingOptimality <= 80,
        data: { optimality: job.aiInsights.timingOptimality }
      });
    }

    return insights;
  };

  const calculatePipelineHealth = (): number => {
    const totalJobs = pipelineStages.reduce((sum, stage) => sum + stage.jobs.length, 0);
    if (totalJobs === 0) return 0;

    const stageWeights = {
      research: 0.1,
      applied: 0.3,
      interviewing: 0.4,
      negotiating: 0.15,
      offers: 0.05
    };

    let weightedScore = 0;
    pipelineStages.forEach(stage => {
      const weight = stageWeights[stage.id as keyof typeof stageWeights] || 0;
      const stageScore = (stage.jobs.length / totalJobs) * 100;
      weightedScore += stageScore * weight;
    });

    return Math.min(Math.round(weightedScore), 100);
  };

  return {
    jobs,
    pipelineStages,
    userProgress,
    pipelineAnalytics,
    addJobToPipeline,
    moveJobBetweenStages,
    updateUserProgress,
    toggleJobLike,
    generateAIInsights,
    calculatePipelineHealth
  };
};