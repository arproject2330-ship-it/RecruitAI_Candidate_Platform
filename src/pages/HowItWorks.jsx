import { UserPlus, Upload, Search, MessageSquare, Target, Trophy } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-12 w-12" />,
      step: 'Step 1',
      title: 'Create Your Profile',
      description:
        'Sign up and build your professional profile. Add your skills, experience, education, and career preferences. The more complete your profile, the better our AI can help you.',
    },
    {
      icon: <Upload className="h-12 w-12" />,
      step: 'Step 2',
      title: 'Upload Your Resume',
      description:
        'Upload your resume and get an instant ATS score. Our AI analyzes your resume and provides detailed feedback on how to optimize it for Applicant Tracking Systems.',
    },
    {
      icon: <Search className="h-12 w-12" />,
      step: 'Step 3',
      title: 'Discover Perfect Jobs',
      description:
        'Browse personalized job recommendations based on your profile. Our intelligent matching system finds opportunities that align with your skills and career goals.',
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      step: 'Step 4',
      title: 'Practice with AI',
      description:
        'Take mock interviews and skill tests. Our AI interviewer asks role-specific questions and provides real-time feedback to help you improve.',
    },
    {
      icon: <Target className="h-12 w-12" />,
      step: 'Step 5',
      title: 'Track Your Progress',
      description:
        'Monitor your improvement with detailed analytics. See your scores, identify areas for growth, and track your journey to landing your dream job.',
    },
    {
      icon: <Trophy className="h-12 w-12" />,
      step: 'Step 6',
      title: 'Land Your Dream Job',
      description:
        'Apply to jobs with confidence. Use your optimized resume, interview skills, and test results to stand out from other candidates and secure your ideal position.',
    },
  ];

  const benefits = [
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Of users land interviews within 30 days',
    },
    {
      number: '10x',
      label: 'Faster',
      description: 'Job search compared to traditional methods',
    },
    {
      number: '50+',
      label: 'Skills',
      description: 'Comprehensive skill assessments available',
    },
    {
      number: '24/7',
      label: 'Available',
      description: 'Practice anytime, anywhere',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">How RecruiterAI Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Six simple steps to transform your job search and accelerate your career
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="flex-1">
                <div
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div className="text-blue-600 mb-4 flex items-center gap-3">
                    {step.icon}
                    <span className="text-sm font-semibold uppercase tracking-wide">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <div className="text-blue-600 transform scale-150">{step.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose RecruiterAI?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{benefit.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{benefit.label}</div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of job seekers who are already using RecruiterAI
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
            Start Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
}
