import { Target, Users, Heart, Zap, Award, Globe } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Target className="h-10 w-10" />,
      title: 'Mission-Driven',
      description:
        'We are committed to democratizing access to career opportunities through AI technology.',
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'User-Focused',
      description:
        'Every feature we build is designed with job seekers needs and success in mind.',
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: 'Passionate Team',
      description:
        'Our team is passionate about helping people achieve their career dreams.',
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Innovation First',
      description:
        'We leverage cutting-edge AI to provide the most advanced career tools available.',
    },
  ];

  const stats = [
    { number: '100K+', label: 'Active Users' },
    { number: '500K+', label: 'Resumes Analyzed' },
    { number: '1M+', label: 'Mock Interviews' },
    { number: '95%', label: 'Success Rate' },
  ];

  const team = [
    {
      name: 'AI Technology',
      role: 'Powered by GPT-4',
      description: 'Advanced language models for interview simulation',
    },
    {
      name: 'Machine Learning',
      role: 'Smart Matching',
      description: 'Intelligent algorithms for job recommendations',
    },
    {
      name: 'Data Science',
      role: 'Analytics',
      description: 'Deep insights from millions of data points',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About RecruiterAI</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Empowering job seekers with AI-driven career tools
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-4">
              RecruiterAI was founded with a simple yet powerful vision: to make job searching
              smarter, faster, and more effective for everyone. We recognized that traditional job
              search methods were time-consuming and often ineffective, with candidates spending
              countless hours tailoring resumes and preparing for interviews without proper
              guidance.
            </p>
            <p className="mb-4">
              By leveraging cutting-edge artificial intelligence and machine learning, we created a
              platform that provides personalized, data-driven insights to job seekers. Our AI
              analyzes millions of successful job applications, interview responses, and hiring
              patterns to give you the competitive edge you need.
            </p>
            <p>
              Today, RecruiterAI serves over 100,000 active users worldwide, helping them land their
              dream jobs faster and with more confidence. We continue to innovate and expand our
              services, always keeping our users success at the heart of everything we do.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Powered by Advanced Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full text-blue-600 mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-12 text-center">
          <Globe className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-xl mb-8 text-blue-100">
            Be part of the future of job searching with RecruiterAI
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
}
