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
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Powerful Features for Your Success</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Everything you need to ace your job search and land your dream role
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-200"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start">
                    <FileCheck className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience All Features Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Start using RecruiterAI and transform your job search experience
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}
