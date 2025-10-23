import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { GiRecycle } from "react-icons/gi";

const FoodWasteQuiz = () => {
  const questions = [
    {
      question: "Which of the following is the best way to reduce food waste?",
      options: [
        { text: "Plan meals ahead", isCorrect: true },
        { text: "Buy impulsively", isCorrect: false },
        { text: "Throw leftovers immediately", isCorrect: false },
        { text: "Ignore expiration dates", isCorrect: false },
      ],
    },
    {
      question: "Which food should NOT be composted?",
      options: [
        { text: "Fruit peels", isCorrect: false },
        { text: "Vegetable scraps", isCorrect: false },
        { text: "Meat & dairy", isCorrect: true },
        { text: "Coffee grounds", isCorrect: false },
      ],
    },
    {
      question: "What’s a creative way to reuse leftover bread?",
      options: [
        { text: "Make croutons", isCorrect: true },
        { text: "Throw in the trash", isCorrect: false },
        { text: "Ignore it", isCorrect: false },
        { text: "Feed it to pests", isCorrect: false },
      ],
    },
    {
      question: "Which of these helps store vegetables longer?",
      options: [
        { text: "Keep in airtight containers", isCorrect: true },
        { text: "Leave on counter exposed", isCorrect: false },
        { text: "Store in hot areas", isCorrect: false },
        { text: "Wash then store wet", isCorrect: false },
      ],
    },
    {
      question: "Why is food waste harmful to the environment?",
      options: [
        { text: "Produces methane in landfills", isCorrect: true },
        { text: "It tastes bad", isCorrect: false },
        { text: "It is expensive", isCorrect: false },
        { text: "Attracts animals", isCorrect: false },
      ],
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <section className="bg-orange-50 min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="max-w-xl w-full bg-white shadow-2xl rounded-3xl p-8 text-center">
        {!showScore ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <GiRecycle className="mx-auto text-orange-500 text-6xl mb-4 animate-bounce" />
              <h2 className="text-2xl font-bold text-orange-700 mb-4">
                Question {current + 1} of {questions.length}
              </h2>
              <p className="text-gray-700 mb-6">{questions[current].question}</p>
            </motion.div>
            <div className="space-y-3">
              {questions[current].options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAnswer(option.isCorrect)}
                  className="w-full py-3 rounded-xl bg-orange-100 hover:bg-orange-200 transition-all font-medium text-gray-800"
                >
                  {option.text}
                </motion.button>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              {score >= 4 ? (
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4 animate-bounce" />
              ) : (
                <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4 animate-bounce" />
              )}
              <h2 className="text-3xl font-bold text-orange-700">
                You scored {score} / {questions.length}
              </h2>
              <p className="text-gray-700 mt-2">
                {score >= 4
                  ? "Excellent! You're a food waste hero! 🌱"
                  : "Good try! Learn more to reduce food waste."}
              </p>
            </div>
            <button
              onClick={restartQuiz}
              className="mt-4 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold transition-all"
            >
              Restart Quiz
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FoodWasteQuiz;
