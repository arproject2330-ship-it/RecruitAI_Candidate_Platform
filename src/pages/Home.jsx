import { CheckCircle, Briefcase, MessageSquare, FileText, User, Target } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  const features = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: 'ATS Score Check',
      description: 'Get instant feedback on your resume with our AI-powered ATS scoring system',
    },
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: 'Job Search',
      description: 'Find jobs that match your profile and skills automatically',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Mock Interviews',
      description: 'Practice with AI-powered mock interviews tailored to your role',
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Mock Tests',
      description: 'Test your skills with customized assessments and get detailed feedback',
    },
    {
      icon: <User className="h-8 w-8" />,
      title: 'Profile Creation',
      description: 'Build a comprehensive professional profile that stands out',
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Career Guidance',
      description: 'Get personalized career recommendations based on your profile',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Your AI-Powered
            <span className="text-blue-600"> Career Partner</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transform your job search with intelligent resume analysis, personalized job matching,
            and AI-driven interview preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('dashboard')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </button>
            <button
              onClick={() => setCurrentPage('how-it-works')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200"
            >
              See How It Works
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-200 border border-gray-100"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Career?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of professionals who have landed their dream jobs with RecruiterAI
          </p>
          <button
            onClick={() => setCurrentPage('dashboard')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
}
