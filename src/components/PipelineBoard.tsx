import React from 'react';
import { Plus, Clock, Mail, Calendar, CheckCircle } from 'lucide-react';
import { PipelineStage, Job } from '../types';

interface PipelineBoardProps {
  stages: PipelineStage[];
  onMoveJob: (jobId: string, fromStage: string, toStage: string) => void;
  onAddJob: (stageId: string) => void;
}

export const PipelineBoard: React.FC<PipelineBoardProps> = ({
  stages,
  onMoveJob,
  onAddJob
}) => {
  const getStageIcon = (stageId: string) => {
    switch (stageId) {
      case 'wishlist': return '🎯';
      case 'applied': return '⏰';
      case 'interview': return '🎤';
      case 'offer': return '🎉';
      case 'rejected': return '❌';
      default: return '📋';
    }
  };

  const getActionIcon = (action: string) => {
    switch (action) {
      case 'Follow-up': return Mail;
      case 'Schedule': return Calendar;
      case 'Accept': return CheckCircle;
      default: return Clock;
    }
  };

  const formatSalary = (salary: Job['salary']) => {
    return `$${salary.min / 1000}K-${salary.max / 1000}K`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Job Pipeline</h2>
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <span>Success Rate: 12%</span>
          <span>Goal: Land offer by March</span>
          <span className="text-orange-600">🔥 7-day streak</span>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex space-x-6 min-w-full">
          {stages.map((stage) => (
            <div key={stage.id} className="flex-shrink-0 w-80">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 flex items-center">
                    <span className="mr-2 text-lg">{getStageIcon(stage.id)}</span>
                    {stage.name} ({stage.jobs.length})
                  </h3>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  {stage.actions.join(', ')}
                </div>
              </div>

              <div className={`${stage.color} border-2 border-dashed rounded-lg p-4 min-h-96`}>
                <div className="space-y-3">
                  {stage.jobs.map((job) => (
                    <div
                      key={job.id}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{job.title}</h4>
                          <p className="text-sm text-gray-600">{job.company}</p>
                        </div>
                        <div className="text-xs text-gray-500">
                          {job.matchScore}% match
                        </div>
                      </div>

                      <div className="text-xs text-gray-500 mb-3">
                        <div>{job.location}</div>
                        <div>{formatSalary(job.salary)}</div>
                      </div>

                      {/* Stage-specific content */}
                      {stage.id === 'applied' && (
                        <div className="text-xs text-gray-500 mb-3">
                          <div>Applied 2 days ago</div>
                          <div className="text-yellow-600">Follow up needed</div>
                        </div>
                      )}

                      {stage.id === 'interview' && (
                        <div className="text-xs text-gray-500 mb-3">
                          <div>Interview tomorrow 2PM</div>
                          <div className="text-green-600">Prep completed</div>
                        </div>
                      )}

                      {stage.id === 'offer' && (
                        <div className="text-xs text-gray-500 mb-3">
                          <div>Offer received</div>
                          <div className="text-blue-600">Negotiating</div>
                        </div>
                      )}

                      {stage.id === 'rejected' && (
                        <div className="text-xs text-gray-500 mb-3">
                          <div>Feedback: Too junior</div>
                          <div className="text-purple-600">Learning opportunity</div>
                        </div>
                      )}

                      {/* Action buttons */}
                      <div className="flex space-x-2">
                        {stage.actions.map((action) => {
                          const Icon = getActionIcon(action);
                          return (
                            <button
                              key={action}
                              className="flex items-center space-x-1 px-2 py-1 bg-gray-50 hover:bg-gray-100 rounded text-xs text-gray-600 transition-colors duration-200"
                            >
                              <Icon size={12} />
                              <span>{action}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}

                  {/* Add Job Button */}
                  <button
                    onClick={() => onAddJob(stage.id)}
                    className="w-full border-2 border-dashed border-gray-300 rounded-lg p-4 text-gray-500 hover:border-gray-400 hover:text-gray-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Plus size={16} />
                    <span>Add Job</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};