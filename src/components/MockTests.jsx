import { useState } from 'react';
import { Code, Brain, Users, Play, Clock, Award } from 'lucide-react';

export default function MockTests() {
  const [selectedTest, setSelectedTest] = useState(null);
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800);

  const availableTests = [
    {
      id: 1,
      type: 'technical',
      title: 'JavaScript Fundamentals',
      icon: <Code className="h-8 w-8" />,
      duration: '30 minutes',
      questions: 15,
      difficulty: 'Medium',
      description: 'Test your knowledge of JavaScript basics, ES6+, and common patterns.',
    },
    {
      id: 2,
      type: 'aptitude',
      title: 'Logical Reasoning',
      icon: <Brain className="h-8 w-8" />,
      duration: '45 minutes',
      questions: 20,
      difficulty: 'Hard',
      description: 'Evaluate your problem-solving and analytical thinking abilities.',
    },
    {
      id: 3,
      type: 'personality',
      title: 'Workplace Personality',
      icon: <Users className="h-8 w-8" />,
      duration: '20 minutes',
      questions: 25,
      difficulty: 'Easy',
      description: 'Understand your work style and team collaboration preferences.',
    },
  ];

  const sampleQuestions = [
    {
      id: 1,
      question: 'What is the output of: console.log(typeof null)?',
      options: ['null', 'undefined', 'object', 'number'],
      correctAnswer: 'object',
    },
    {
      id: 2,
      question: 'Which method is used to add elements to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      correctAnswer: 'push()',
    },
    {
      id: 3,
      question: 'What does the "=== " operator check for?',
      options: [
        'Value only',
        'Type only',
        'Both value and type',
        'Neither value nor type',
      ],
      correctAnswer: 'Both value and type',
    },
    {
      id: 4,
      question: 'Which keyword is used to declare a block-scoped variable?',
      options: ['var', 'let', 'const', 'Both let and const'],
      correctAnswer: 'Both let and const',
    },
    {
      id: 5,
      question: 'What is a closure in JavaScript?',
      options: [
        'A function within another function',
        'A function that has access to variables in its outer scope',
        'A way to close the browser',
        'A method to terminate execution',
      ],
      correctAnswer: 'A function that has access to variables in its outer scope',
    },
  ];

  const startTest = (test) => {
    setSelectedTest(test);
    setTestStarted(true);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCompleted(false);
  };

  const handleAnswerSelect = (answer) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: answer,
    });
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < sampleQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      completeTest();
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const completeTest = () => {
    setCompleted(true);
  };

  const resetTest = () => {
    setSelectedTest(null);
    setTestStarted(false);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setCompleted(false);
  };

  if (completed) {
    const correctAnswers = sampleQuestions.filter(
      (q, index) => answers[index] === q.correctAnswer
    ).length;
    const score = Math.round((correctAnswers / sampleQuestions.length) * 100);

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-4">
              <Award className="h-12 w-12 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Test Complete!</h2>
            <p className="text-gray-600">
              You've completed the {selectedTest.title} assessment
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="text-6xl font-bold text-blue-600 mb-2">{score}%</div>
              <div className="text-gray-600">Your Score</div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {correctAnswers}/{sampleQuestions.length}
                </div>
                <div className="text-sm text-gray-600">Correct Answers</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {Math.floor(timeLeft / 60)}m
                </div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {score >= 80 ? 'A' : score >= 60 ? 'B' : score >= 40 ? 'C' : 'D'}
                </div>
                <div className="text-sm text-gray-600">Grade</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-blue-900 mb-3">Performance Analysis</h3>
            <div className="space-y-2 text-blue-800">
              {score >= 80 ? (
                <p>Excellent work! You have a strong understanding of the subject.</p>
              ) : score >= 60 ? (
                <p>Good job! You have a solid foundation but there's room for improvement.</p>
              ) : (
                <p>Keep practicing! Focus on the areas where you struggled.</p>
              )}
              <p className="text-sm mt-2">
                Review your answers and explanations to strengthen your knowledge in weak areas.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={resetTest}
              className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Back to Tests
            </button>
            <button
              onClick={() => {
                setCompleted(false);
                setTestStarted(true);
                setCurrentQuestionIndex(0);
              }}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Retake Test
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (testStarted && selectedTest) {
    const currentQuestion = sampleQuestions[currentQuestionIndex];

    return (
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-gray-900">{selectedTest.title}</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">
                {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQuestionIndex + 1} of {sampleQuestions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Object.keys(answers).length} answered
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{
                width: `${((currentQuestionIndex + 1) / sampleQuestions.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h3>

          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className={`w-full text-left px-6 py-4 rounded-lg border-2 transition-all ${
                  answers[currentQuestionIndex] === option
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      answers[currentQuestionIndex] === option
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-gray-300'
                    }`}
                  >
                    {answers[currentQuestionIndex] === option && (
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          {currentQuestionIndex > 0 && (
            <button
              onClick={previousQuestion}
              className="flex-1 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              Previous
            </button>
          )}
          <button
            onClick={nextQuestion}
            disabled={!answers[currentQuestionIndex]}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {currentQuestionIndex === sampleQuestions.length - 1 ? 'Submit Test' : 'Next Question'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Mock Tests</h2>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex items-start gap-3">
          <Brain className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-blue-900 mb-2">How Mock Tests Work</h3>
            <p className="text-blue-800 text-sm">
              Select a test category below and challenge yourself with timed assessments. You'll
              receive instant feedback and detailed analytics on your performance.
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableTests.map((test) => (
          <div
            key={test.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6"
          >
            <div className="text-blue-600 mb-4">{test.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{test.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{test.description}</p>

            <div className="space-y-2 mb-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Duration:</span>
                <span className="font-semibold text-gray-900">{test.duration}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Questions:</span>
                <span className="font-semibold text-gray-900">{test.questions}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Difficulty:</span>
                <span
                  className={`font-semibold ${
                    test.difficulty === 'Easy'
                      ? 'text-green-600'
                      : test.difficulty === 'Medium'
                      ? 'text-yellow-600'
                      : 'text-red-600'
                  }`}
                >
                  {test.difficulty}
                </span>
              </div>
            </div>

            <button
              onClick={() => startTest(test)}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Play className="h-5 w-5" />
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
