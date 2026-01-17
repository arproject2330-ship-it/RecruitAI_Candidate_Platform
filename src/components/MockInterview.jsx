import { useState } from 'react';
import { Video, Play, Pause, SkipForward, CheckCircle } from 'lucide-react';

export default function MockInterview() {
  const [interviewStarted, setInterviewStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [difficulty, setDifficulty] = useState('medium');

  const questions = [
    {
      id: 1,
      question: 'Tell me about yourself and your background.',
      category: 'Introduction',
    },
    {
      id: 2,
      question: 'What are your greatest strengths?',
      category: 'Behavioral',
    },
    {
      id: 3,
      question: 'Describe a challenging project you worked on and how you overcame obstacles.',
      category: 'Technical',
    },
    {
      id: 4,
      question: 'Where do you see yourself in 5 years?',
      category: 'Career Goals',
    },
    {
      id: 5,
      question: 'Why do you want to work for our company?',
      category: 'Motivation',
    },
  ];

  const startInterview = () => {
    if (jobTitle) {
      setInterviewStarted(true);
      setCurrentQuestion(0);
      setAnswers({});
      setCompleted(false);
    }
  };

  const handleAnswerChange = (e) => {
    setAnswers({
      ...answers,
      [currentQuestion]: e.target.value,
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCompleted(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetInterview = () => {
    setInterviewStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setCompleted(false);
    setJobTitle('');
  };

  if (completed) {
    const score = Math.floor(Math.random() * 20) + 80;
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Complete!</h2>
          <p className="text-gray-600 mb-8">
            Great job! Here's your performance summary for the {jobTitle} interview.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="mb-6">
              <div className="text-5xl font-bold text-blue-600 mb-2">{score}/100</div>
              <div className="text-gray-600">Overall Score</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {Math.floor(Math.random() * 20) + 75}%
                </div>
                <div className="text-sm text-gray-600">Communication</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {Math.floor(Math.random() * 20) + 80}%
                </div>
                <div className="text-sm text-gray-600">Content Quality</div>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {Math.floor(Math.random() * 20) + 70}%
                </div>
                <div className="text-sm text-gray-600">Confidence</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left">
            <h3 className="font-semibold text-blue-900 mb-3">AI Feedback</h3>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Your answers showed strong technical knowledge and experience</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Consider providing more specific examples with quantifiable results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Good use of the STAR method in behavioral questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Try to be more concise in your responses</span>
              </li>
            </ul>
          </div>

          <button
            onClick={resetInterview}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start New Interview
          </button>
        </div>
      </div>
    );
  }

  if (!interviewStarted) {
    return (
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Mock Interview Setup</h2>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Video className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">How it Works</h3>
              <p className="text-blue-800 text-sm">
                Our AI will ask you a series of interview questions based on your selected role and
                difficulty. Take your time to answer each question thoughtfully. You'll receive
                detailed feedback on your performance.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <label htmlFor="jobTitle" className="block text-sm font-semibold text-gray-700 mb-2">
              Job Title / Role
            </label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g., Software Engineer, Product Manager"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Difficulty Level
            </label>
            <div className="grid grid-cols-3 gap-4">
              {['easy', 'medium', 'hard'].map((level) => (
                <button
                  key={level}
                  onClick={() => setDifficulty(level)}
                  className={`py-3 rounded-lg font-semibold transition-colors ${
                    difficulty === level
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={startInterview}
            disabled={!jobTitle}
            className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Play className="h-5 w-5" />
            Start Interview
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Mock Interview: {jobTitle}
          </h2>
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            {questions[currentQuestion].category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {questions[currentQuestion].question}
        </h3>

        <textarea
          value={answers[currentQuestion] || ''}
          onChange={handleAnswerChange}
          placeholder="Type your answer here..."
          rows="8"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
        ></textarea>
      </div>

      <div className="flex gap-4">
        {currentQuestion > 0 && (
          <button
            onClick={previousQuestion}
            className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
          >
            Previous
          </button>
        )}
        <button
          onClick={nextQuestion}
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          {currentQuestion === questions.length - 1 ? 'Complete Interview' : 'Next Question'}
          <SkipForward className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
