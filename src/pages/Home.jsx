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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-slide-in-left">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your AI-Powered
              <span className="block bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Career Partner
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your job search with intelligent resume analysis, personalized job matching,
              and AI-driven interview preparation
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow shadow-lg hover:shadow-blue-500/50"
              >
                Get Started Free
              </button>
              <button
                onClick={() => setCurrentPage('how-it-works')}
                className="bg-gray-800 text-blue-400 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600/50 hover:border-blue-400 hover:bg-gray-700 transition-all duration-300 hover-lift"
              >
                See How It Works
              </button>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Career Success"
                className="relative w-full rounded-2xl shadow-2xl image-hover-zoom"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-4 animate-fade-in">
            Powerful Features
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-xl hover-lift card-hover border border-gray-700/50 animate-slide-up group"
              >
                <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Success"
            className="w-full h-96 object-cover image-hover-zoom opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Accelerate Your Career?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have landed their dream jobs with RecruiterAI
              </p>
              <button
                onClick={() => setCurrentPage('dashboard')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 btn-glow shadow-lg hover:shadow-blue-500/50"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
