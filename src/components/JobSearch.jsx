import { useState, useEffect } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Clock, Building } from 'lucide-react';

export default function JobSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('all');
  const [experienceLevel, setExperienceLevel] = useState('all');
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const sampleJobs = [
      {
        id: 1,
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        type: 'full-time',
        experienceLevel: 'senior',
        salary: '$120k - $180k',
        postedDate: '2 days ago',
        skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL'],
        description: 'We are looking for an experienced software engineer to join our team.',
      },
      {
        id: 2,
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        location: 'Remote',
        type: 'full-time',
        experienceLevel: 'mid-level',
        salary: '$80k - $120k',
        postedDate: '1 week ago',
        skills: ['React', 'TypeScript', 'CSS', 'HTML'],
        description: 'Join our growing team as a frontend developer.',
      },
      {
        id: 3,
        title: 'Data Scientist',
        company: 'AI Solutions',
        location: 'New York, NY',
        type: 'full-time',
        experienceLevel: 'senior',
        salary: '$130k - $200k',
        postedDate: '3 days ago',
        skills: ['Python', 'TensorFlow', 'SQL', 'Statistics'],
        description: 'Analyze data and build ML models.',
      },
      {
        id: 4,
        title: 'Product Manager',
        company: 'Innovation Labs',
        location: 'Austin, TX',
        type: 'full-time',
        experienceLevel: 'mid-level',
        salary: '$100k - $150k',
        postedDate: '5 days ago',
        skills: ['Product Management', 'Agile', 'User Research', 'Analytics'],
        description: 'Lead product development and strategy.',
      },
      {
        id: 5,
        title: 'Full Stack Developer',
        company: 'WebCo',
        location: 'Remote',
        type: 'contract',
        experienceLevel: 'junior',
        salary: '$60k - $80k',
        postedDate: '1 day ago',
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        description: 'Build web applications end-to-end.',
      },
    ];
    setJobs(sampleJobs);
    setFilteredJobs(sampleJobs);
  }, []);

  useEffect(() => {
    let filtered = jobs;

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (location) {
      filtered = filtered.filter((job) =>
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (jobType !== 'all') {
      filtered = filtered.filter((job) => job.type === jobType);
    }

    if (experienceLevel !== 'all') {
      filtered = filtered.filter((job) => job.experienceLevel === experienceLevel);
    }

    setFilteredJobs(filtered);
  }, [searchTerm, location, jobType, experienceLevel, jobs]);

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Next Job</h2>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Job title, skills, or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            />
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
          >
            <option value="all">All Job Types</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="contract">Contract</option>
          </select>

          <select
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
          >
            <option value="all">All Experience Levels</option>
            <option value="junior">Junior</option>
            <option value="mid-level">Mid-Level</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">
          <span className="font-semibold">{filteredJobs.length}</span> jobs found
        </p>
      </div>

      <div className="space-y-4">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <div className="flex items-center gap-4 text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{job.postedDate}</span>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Apply
              </button>
            </div>

            <p className="text-gray-700 mb-4">{job.description}</p>

            <div className="flex items-center gap-4 mb-4 text-sm">
              <div className="flex items-center gap-1">
                <Briefcase className="h-4 w-4 text-gray-500" />
                <span className="capitalize text-gray-600">{job.type.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4 text-gray-500" />
                <span className="text-gray-600">{job.salary}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
