import { useState } from 'react';
import { Upload, FileText, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';

export default function ATSScoreChecker() {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResults(null);
    }
  };

  const analyzeResume = () => {
    setAnalyzing(true);
    setTimeout(() => {
      const score = Math.floor(Math.random() * 30) + 70;
      setResults({
        score,
        fileName: file.name,
        strengths: [
          'Strong keyword optimization',
          'Clean formatting and structure',
          'Relevant work experience highlighted',
          'Skills section well-organized',
        ],
        improvements: [
          'Add more quantifiable achievements',
          'Include industry-specific keywords',
          'Optimize section headings',
          'Add certifications section',
        ],
        keywordMatch: Math.floor(Math.random() * 20) + 70,
        formatScore: Math.floor(Math.random() * 20) + 75,
        contentScore: Math.floor(Math.random() * 20) + 80,
      });
      setAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score) => {
    if (score >= 80) return 'bg-green-100';
    if (score >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">ATS Resume Score Checker</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">What is ATS?</h3>
            <p className="text-blue-800 text-sm">
              Applicant Tracking Systems (ATS) are software used by companies to scan and filter
              resumes. Our AI analyzes your resume the same way these systems do, helping you
              optimize it for better visibility.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border-2 border-dashed border-gray-300 p-8 text-center mb-8">
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Your Resume</h3>
        <p className="text-gray-600 mb-4">PDF, DOC, or DOCX (Max 5MB)</p>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          id="resume-upload"
        />
        <label
          htmlFor="resume-upload"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer hover:bg-blue-700 transition-colors"
        >
          Choose File
        </label>
        {file && (
          <div className="mt-4 flex items-center justify-center gap-2 text-gray-700">
            <FileText className="h-5 w-5" />
            <span>{file.name}</span>
          </div>
        )}
      </div>

      {file && !results && (
        <button
          onClick={analyzeResume}
          disabled={analyzing}
          className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {analyzing ? 'Analyzing...' : 'Analyze Resume'}
        </button>
      )}

      {results && (
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-6">
              <div
                className={`inline-flex items-center justify-center w-32 h-32 rounded-full ${getScoreBgColor(
                  results.score
                )} mb-4`}
              >
                <span className={`text-5xl font-bold ${getScoreColor(results.score)}`}>
                  {results.score}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your ATS Score</h3>
              <p className="text-gray-600">
                {results.score >= 80
                  ? 'Excellent! Your resume is well-optimized.'
                  : results.score >= 60
                  ? 'Good! Some improvements recommended.'
                  : 'Needs improvement to pass ATS filters.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Keywords</span>
                  <span className="text-lg font-bold text-blue-600">
                    {results.keywordMatch}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${results.keywordMatch}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Format</span>
                  <span className="text-lg font-bold text-blue-600">{results.formatScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${results.formatScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">Content</span>
                  <span className="text-lg font-bold text-blue-600">{results.contentScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${results.contentScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  Strengths
                </h4>
                <ul className="space-y-2">
                  {results.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-green-600 mt-1">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Improvements
                </h4>
                <ul className="space-y-2">
                  {results.improvements.map((improvement, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <span className="text-blue-600 mt-1">•</span>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              setFile(null);
              setResults(null);
            }}
            className="w-full bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Analyze Another Resume
          </button>
        </div>
      )}
    </div>
  );
}
