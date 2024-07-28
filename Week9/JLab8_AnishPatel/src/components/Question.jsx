import React, { useState, useEffect } from 'react';

const Question = () => {
  const [category, setCategory] = useState(null);
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=1&type=boolean');
      const data = await response.json();
      const trivia = data.results[0];
      setCategory(trivia.category);
      setQuestion(trivia.question);
      setAnswer(trivia.correct_answer);
    };
    fetchQuestion();
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Welcome to Trivia</h2>
      <p>Here's your random question.</p>
      <h3>True or false:</h3>
      <div style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '1rem', margin: '1rem 0' }}>
        <div style={{ fontStyle: 'italic', color: '#7b5cea' }}>{category}</div>
        <h3>{question}</h3>
        {revealed ? <div style={{ color: 'green' }}>{answer}</div> : <div></div>}
        <button
          type="button"
          style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#7b5cea', color: '#fff', border: 'none', borderRadius: '5px' }}
          onClick={() => setRevealed(true)}
        >
          Reveal answer
        </button>
      </div>
    </div>
  );
};

export default Question;
