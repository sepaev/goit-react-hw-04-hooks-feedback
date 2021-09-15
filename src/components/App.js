import { Component, useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState('Good');
  const [bad, setBad] = useState('Bad');
  const [neutral, setNeutral] = useState('Neutral');
  const [state] = useState();

  const countPositiveFeedback = (total, good) => {
    const result = (parseInt(good) * 100) / total;
    return total ? parseInt(result.toFixed(0)) : 0;
  };
  const countTotalFeedback = () => {
    if (state) return Object.values(state).reduce((counter, value) => (counter += value), 0);
  };
  const onLeaveFeedback = e => {
    const option = e.target.name;
    switch (option) {
      case 'good':
        setGood(prev => ++prev);
        break;
      case 'neutral':
        setNeutral(prev => ++prev);
        break;
      case 'bad':
        setBad(prev => ++prev);
        break;
      default:
        return;
    }
  };
  // const { good, bad, neutral } = state;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedback(total, good);
  const options = ['good', 'bad', 'neutral'];
  return (
    <>
      <Section title='Please leave feedback'>
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <hr />
      <Section title='Statistics'>
        <Statistics good={good} bad={bad} neutral={neutral} total={total} positivePercentage={positivePercentage} />
      </Section>
    </>
  );
}

export default App;
