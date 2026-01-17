import {
  FileCheck,
  Search,
  Video,
  ClipboardList,
  UserCircle,
  BookOpen,
  TrendingUp,
  Award,
  Check,
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <FileCheck className="h-12 w-12" />,
      title: 'Resume ATS Analysis',
      description:
        'Comprehensive resume analysis against Applicant Tracking Systems used by Fortune 500 companies.',
      features: [
        'Instant ATS score (0-100)',
        'Keyword density analysis',
        'Format optimization suggestions',
        'Industry-specific recommendations',
        'Before/after comparison',
      ],
      price: 'Free',
      highlight: false,
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: 'Job Matching Service',
      description:
        'AI-powered job search that matches you with opportunities based on your unique profile and preferences.',
      features: [
        'Personalized job recommendations',
        'Daily job alerts',
        'Advanced filters',
        'Company insights',
        'Application tracking',
      ],
      price: 'Free',
      highlight: false,
    },
    {
      icon: <Video className="h-12 w-12" />,
      title: 'Mock Interview Sessions',
      description:
        'Practice interviews with our advanced AI that adapts to your responses and provides detailed feedback.',
      features: [
        'Role-specific questions',
        'Real-time feedback',
        'Voice and text modes',
        'Performance scoring',
        'Unlimited practice sessions',
      ],
      price: 'Premium',
      highlight: true,
    },
    {
      icon: <ClipboardList className="h-12 w-12" />,
      title: 'Skill Assessment Tests',
      description:
        'Comprehensive testing across technical skills, aptitude, and soft skills with detailed analytics.',
      features: [
        'Technical assessments',
        'Aptitude tests',
        'Personality assessments',
        'Timed challenges',
        'Detailed score reports',
      ],
      price: 'Free',
      highlight: false,
    },
    {
      icon: <UserCircle className="h-12 w-12" />,
      title: 'Professional Profile',
      description:
        'Build and maintain a comprehensive professional profile that showcases your best qualities.',
      features: [
        'Profile builder',
        'Portfolio integration',
        'Skills tracking',
        'Achievement showcase',
        'Export to PDF',
      ],
      price: 'Free',
      highlight: false,
    },
    {
      icon: <BookOpen className="h-12 w-12" />,
      title: 'Career Coaching',
      description:
        'Personalized career guidance and insights based on market trends and your professional goals.',
      features: [
        'Career path recommendations',
        'Skill gap analysis',
        'Market trend insights',
        'Salary benchmarking',
        'Growth roadmap',
      ],
      price: 'Premium',
      highlight: false,
    },
  ];

  const premiumFeatures = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Advanced Analytics',
      description: 'Deep insights into your performance and progress',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Certification',
      description: 'Get certified for completed assessments',
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: 'Priority Support',
      description: '24/7 dedicated support for premium members',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive career services designed to help you succeed
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden ${
                service.highlight ? 'ring-2 ring-blue-600' : ''
              }`}
            >
              {service.highlight && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  PREMIUM SERVICE
                </div>
              )}
              <div className="p-6">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      service.price === 'Premium'
                        ? 'bg-blue-100 text-blue-600'
                        : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {service.price}
                  </span>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Premium Membership Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {premiumFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200">
              Upgrade to Premium
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Using Our Services Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get instant access to all free services and upgrade anytime
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}
