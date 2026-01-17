import { useState } from 'react';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: 'support@recruiterai.com',
      link: 'mailto:support@recruiterai.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      details: 'San Francisco, CA 94102',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="relative bg-gradient-to-r from-gray-900 to-black text-white py-20 border-b border-blue-600/20">
        <img
          src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-slide-up">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md text-center card-hover border border-gray-700/50 group animate-fade-in">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-full text-blue-400 mb-4 group-hover:bg-blue-600/40 group-hover:text-blue-300 transition-all">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-gray-400">{info.details}</p>
              )}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-lg border border-gray-700/50">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all placeholder-gray-500"
                  placeholder="How can we help?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-600 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none placeholder-gray-500"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              {submitted && (
                <div className="mb-6 p-4 bg-green-900/30 border border-green-600 rounded-lg">
                  <p className="text-green-300 font-semibold">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md card-hover border border-gray-700/50 group">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center group-hover:text-blue-300 transition-colors">
                  <MessageSquare className="h-5 w-5 text-blue-400 mr-2 group-hover:text-blue-300 transition-colors" />
                  How does the ATS score work?
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Our AI analyzes your resume against Applicant Tracking Systems used by major
                  companies and provides a score from 0-100 based on formatting, keywords, and
                  content optimization.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md card-hover border border-gray-700/50 group">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center group-hover:text-blue-300 transition-colors">
                  <MessageSquare className="h-5 w-5 text-blue-400 mr-2 group-hover:text-blue-300 transition-colors" />
                  Is RecruiterAI really free?
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Yes! Our core features including ATS scoring, job search, and profile creation are
                  completely free. Premium features like unlimited mock interviews are available
                  with a subscription.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md card-hover border border-gray-700/50 group">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center group-hover:text-blue-300 transition-colors">
                  <MessageSquare className="h-5 w-5 text-blue-400 mr-2 group-hover:text-blue-300 transition-colors" />
                  How accurate are the mock interviews?
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Our mock interviews use advanced AI trained on thousands of real interview
                  questions. They adapt to your responses and provide feedback comparable to human
                  interviewers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl shadow-md card-hover border border-gray-700/50 group">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center group-hover:text-blue-300 transition-colors">
                  <MessageSquare className="h-5 w-5 text-blue-400 mr-2 group-hover:text-blue-300 transition-colors" />
                  Can I cancel my premium subscription anytime?
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  Absolutely! You can cancel your premium subscription at any time from your account
                  settings. No questions asked, and you'll still have access until the end of your
                  billing period.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl mt-16">
          <img
            src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Help Center"
            className="w-full h-64 object-cover image-hover-zoom opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-gray-900 flex items-center justify-center">
            <div className="text-center animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Check out our Help Center for instant answers to common questions
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-500 hover:to-blue-600 transition-all duration-300 btn-glow shadow-lg hover:shadow-blue-500/50">
                Visit Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
