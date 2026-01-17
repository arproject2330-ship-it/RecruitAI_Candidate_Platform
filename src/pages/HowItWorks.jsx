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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20 border-b border-blue-600/20">
        <img
          src="https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="How it works"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">How RecruiterAI Works</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Six simple steps to transform your job search and accelerate your career
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8 animate-fade-in`}
            >
              <div className="flex-1">
                <div
                  className={`bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-xl card-hover border border-gray-700/50 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } group`}
                >
                  <div className="text-blue-400 mb-4 flex items-center gap-3 group-hover:text-blue-300 transition-colors">
                    {step.icon}
                    <span className="text-sm font-semibold uppercase tracking-wide text-gray-400 group-hover:text-gray-300 transition-colors">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-blue-600/20 to-blue-400/10 rounded-full flex items-center justify-center border border-blue-600/30 hover-scale group">
                  <div className="text-blue-400 transform scale-150 group-hover:text-blue-300 group-hover:scale-[1.65] transition-all">
                    {step.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-12 shadow-xl mb-16 border border-gray-700/50 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Why Choose RecruiterAI?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center card-hover p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">
                  {benefit.number}
                </div>
                <div className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {benefit.label}
                </div>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Success"
            className="w-full h-64 object-cover image-hover-zoom opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-gray-900 flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of job seekers who are already using RecruiterAI
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow shadow-lg hover:shadow-blue-500/50">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
