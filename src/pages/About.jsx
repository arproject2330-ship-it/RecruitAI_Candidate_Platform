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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20 border-b border-blue-600/20">
        <img
          src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
          alt="About"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">About RecruiterAI</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Empowering job seekers with AI-driven career tools
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-12 shadow-xl mb-16 border border-gray-700/50 animate-fade-in">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-400">
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
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md text-center card-hover border border-gray-700/50 animate-slide-up group">
                <div className="inline-flex items-center justify-center text-blue-400 mb-4 group-hover:text-blue-300 group-hover:scale-125 transition-all">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">{value.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-12 mb-16 border border-gray-700/50 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center card-hover p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                <div className="text-gray-300 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Powered by Advanced Technology
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-md text-center card-hover border border-gray-700/50 group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full text-blue-400 mb-4 group-hover:bg-blue-600/40 group-hover:text-blue-300 transition-all">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{member.name}</h3>
                <p className="text-blue-400 font-semibold mb-2 group-hover:text-blue-300 transition-colors">{member.role}</p>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Join Community"
            className="w-full h-64 object-cover image-hover-zoom opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-gray-900 flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <Globe className="h-16 w-16 mx-auto mb-4 text-blue-400" />
              <h2 className="text-3xl font-bold text-white mb-4">Join Our Growing Community</h2>
              <p className="text-xl text-gray-300 mb-8">
                Be part of the future of job searching with RecruiterAI
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow shadow-lg hover:shadow-blue-500/50">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
