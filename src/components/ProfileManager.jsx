import { useState } from 'react';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Plus, X, Save } from 'lucide-react';

export default function ProfileManager() {
  const [profile, setProfile] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Passionate software engineer with 5+ years of experience building scalable web applications.',
    skills: ['JavaScript', 'React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    experience: [
      {
        title: 'Senior Software Engineer',
        company: 'Tech Corp',
        location: 'San Francisco, CA',
        startDate: '2020-01',
        endDate: 'Present',
        description: 'Leading development of cloud-based solutions',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of California',
        location: 'Berkeley, CA',
        graduationDate: '2018',
      },
    ],
  });

  const [editing, setEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile({
        ...profile,
        skills: [...profile.skills, newSkill.trim()],
      });
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfile({
      ...profile,
      skills: profile.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  const addExperience = () => {
    setProfile({
      ...profile,
      experience: [
        ...profile.experience,
        {
          title: '',
          company: '',
          location: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
    });
  };

  const updateExperience = (index, field, value) => {
    const updatedExperience = [...profile.experience];
    updatedExperience[index][field] = value;
    setProfile({ ...profile, experience: updatedExperience });
  };

  const removeExperience = (index) => {
    setProfile({
      ...profile,
      experience: profile.experience.filter((_, i) => i !== index),
    });
  };

  const addEducation = () => {
    setProfile({
      ...profile,
      education: [
        ...profile.education,
        {
          degree: '',
          school: '',
          location: '',
          graduationDate: '',
        },
      ],
    });
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = [...profile.education];
    updatedEducation[index][field] = value;
    setProfile({ ...profile, education: updatedEducation });
  };

  const removeEducation = (index) => {
    setProfile({
      ...profile,
      education: profile.education.filter((_, i) => i !== index),
    });
  };

  const saveProfile = () => {
    setEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">My Profile</h2>
        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={saveProfile}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Save className="h-5 w-5" />
            Save Changes
          </button>
        )}
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-blue-600" />
          </div>
          <div className="flex-1">
            {editing ? (
              <input
                type="text"
                value={profile.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="text-2xl font-bold text-gray-900 mb-2 w-full border-b-2 border-blue-600 outline-none"
              />
            ) : (
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{profile.fullName}</h3>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-gray-400" />
            {editing ? (
              <input
                type="email"
                value={profile.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
              />
            ) : (
              <span className="text-gray-700">{profile.email}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <Phone className="h-5 w-5 text-gray-400" />
            {editing ? (
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
              />
            ) : (
              <span className="text-gray-700">{profile.phone}</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            {editing ? (
              <input
                type="text"
                value={profile.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
              />
            ) : (
              <span className="text-gray-700">{profile.location}</span>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
          {editing ? (
            <textarea
              value={profile.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            />
          ) : (
            <p className="text-gray-700">{profile.bio}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Skills</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {profile.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium flex items-center gap-2"
              >
                {skill}
                {editing && (
                  <button
                    onClick={() => removeSkill(skill)}
                    className="hover:text-blue-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </span>
            ))}
          </div>
          {editing && (
            <div className="flex gap-2">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addSkill()}
                placeholder="Add a skill"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={addSkill}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            Work Experience
          </h3>
          {editing && (
            <button
              onClick={addExperience}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-semibold"
            >
              <Plus className="h-4 w-4" />
              Add Experience
            </button>
          )}
        </div>

        <div className="space-y-6">
          {profile.experience.map((exp, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              {editing ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={exp.title}
                      onChange={(e) => updateExperience(index, 'title', e.target.value)}
                      placeholder="Job Title"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button
                      onClick={() => removeExperience(index)}
                      className="ml-2 text-red-600 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    placeholder="Company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    value={exp.location}
                    onChange={(e) => updateExperience(index, 'location', e.target.value)}
                    placeholder="Location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                      placeholder="Start Date (YYYY-MM)"
                      className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input
                      type="text"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                      placeholder="End Date or 'Present'"
                      className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <textarea
                    value={exp.description}
                    onChange={(e) => updateExperience(index, 'description', e.target.value)}
                    placeholder="Description"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  />
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                  <p className="text-gray-600 text-sm mb-2">
                    {exp.location} • {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            Education
          </h3>
          {editing && (
            <button
              onClick={addEducation}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-1 text-sm font-semibold"
            >
              <Plus className="h-4 w-4" />
              Add Education
            </button>
          )}
        </div>

        <div className="space-y-6">
          {profile.education.map((edu, index) => (
            <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
              {editing ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                      placeholder="Degree"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button
                      onClick={() => removeEducation(index)}
                      className="ml-2 text-red-600 hover:text-red-700"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={edu.school}
                    onChange={(e) => updateEducation(index, 'school', e.target.value)}
                    placeholder="School"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    value={edu.location}
                    onChange={(e) => updateEducation(index, 'location', e.target.value)}
                    placeholder="Location"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <input
                    type="text"
                    value={edu.graduationDate}
                    onChange={(e) => updateEducation(index, 'graduationDate', e.target.value)}
                    placeholder="Graduation Date (YYYY)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              ) : (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                  <p className="text-blue-600 font-medium">{edu.school}</p>
                  <p className="text-gray-600 text-sm">
                    {edu.location} • Graduated {edu.graduationDate}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
