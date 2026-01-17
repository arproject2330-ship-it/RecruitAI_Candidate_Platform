import { useState } from 'react';
import { FileCheck, Search, Video, ClipboardList, User } from 'lucide-react';
import ATSScoreChecker from '../components/ATSScoreChecker';
import JobSearch from '../components/JobSearch';
import MockInterview from '../components/MockInterview';
import MockTests from '../components/MockTests';
import ProfileManager from '../components/ProfileManager';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('ats');

  const tabs = [
    { id: 'ats', name: 'ATS Score', icon: <FileCheck className="h-5 w-5" /> },
    { id: 'jobs', name: 'Job Search', icon: <Search className="h-5 w-5" /> },
    { id: 'interview', name: 'Mock Interview', icon: <Video className="h-5 w-5" /> },
    { id: 'tests', name: 'Mock Tests', icon: <ClipboardList className="h-5 w-5" /> },
    { id: 'profile', name: 'Profile', icon: <User className="h-5 w-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'ats':
        return <ATSScoreChecker />;
      case 'jobs':
        return <JobSearch />;
      case 'interview':
        return <MockInterview />;
      case 'tests':
        return <MockTests />;
      case 'profile':
        return <ProfileManager />;
      default:
        return <ATSScoreChecker />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Manage your career development in one place</p>
        </div>

        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}
