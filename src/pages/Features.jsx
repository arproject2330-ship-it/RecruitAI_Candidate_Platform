import {
  FileCheck,
  Search,
  Video,
  ClipboardList,
  UserCircle,
  Brain,
  TrendingUp,
  Shield,
  Zap,
} from 'lucide-react';

export default function Features() {
  const mainFeatures = [
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: 'ATS Resume Scoring',
      description:
        'Our advanced AI analyzes your resume against Applicant Tracking Systems used by top companies. Get detailed insights on formatting, keywords, and content optimization.',
      benefits: [
        'Instant score from 0-100',
        'Keyword optimization suggestions',
        'Format compliance check',
        'Industry-specific recommendations',
      ],
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: 'Intelligent Job Matching',
      description:
        'Our AI engine analyzes your profile, skills, and preferences to find the perfect job opportunities that match your career goals.',
      benefits: [
        'Personalized job recommendations',
        'Skill-based matching',
        'Location preferences',
        'Salary range filters',
      ],
    },
    {
      icon: <Video className="h-12 w-12" />,
      title: 'AI Mock Interviews',
      description:
        'Practice interviews with our AI interviewer that adapts to your responses and provides real-time feedback on your performance.',
      benefits: [
        'Role-specific questions',
        'Real-time feedback',
        'Voice and text responses',
        'Performance analytics',
      ],
    },
    {
      icon: <ClipboardList className="h-12 w-12" />,
      title: 'Skill Assessment Tests',
      description:
        'Take comprehensive tests across technical, aptitude, and soft skills to identify your strengths and areas for improvement.',
      benefits: [
        'Multiple test categories',
        'Timed assessments',
        'Detailed result analysis',
        'Progress tracking',
      ],
    },
    {
      icon: <UserCircle className="h-12 w-12" />,
      title: 'Professional Profile Builder',
      description:
        'Create a comprehensive professional profile that showcases your skills, experience, and achievements to potential employers.',
      benefits: [
        'Easy-to-use interface',
        'Rich profile sections',
        'Portfolio integration',
        'Export capabilities',
      ],
    },
    {
      icon: <Brain className="h-12 w-12" />,
      title: 'AI Career Insights',
      description:
        'Get personalized career advice and insights based on market trends, your skills, and industry demands.',
      benefits: [
        'Career path recommendations',
        'Skill gap analysis',
        'Market trend insights',
        'Salary benchmarking',
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Progress Tracking',
      description: 'Monitor your improvement over time with detailed analytics',
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Data Security',
      description: 'Your data is encrypted and securely stored',
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Results',
      description: 'Get immediate feedback on all assessments',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20 border-b border-blue-600/20">
        <img
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Features"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Powerful Features for Your Success
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Everything you need to ace your job search and land your dream role
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl card-hover border border-gray-700/50 animate-slide-up group"
            >
              <div className="text-blue-400 mb-4 group-hover:text-blue-300 group-hover:scale-125 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <FileCheck className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0 group-hover/item:text-blue-300 transition-colors" />
                    <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 mb-16 border border-gray-700/50 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Additional Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center card-hover p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all"
              >
                <div className="inline-flex items-center justify-center text-blue-400 mb-4 group-hover:text-blue-300 hover:scale-125 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="Success"
            className="w-full h-64 object-cover image-hover-zoom opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-gray-900 flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-4">Experience All Features Today</h2>
              <p className="text-xl text-gray-300 mb-8">
                Start using RecruiterAI and transform your job search experience
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow shadow-lg hover:shadow-blue-500/50">
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
