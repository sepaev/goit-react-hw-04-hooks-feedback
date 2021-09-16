import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    const result = (good / total) * 100;
    return total ? parseInt(result) : 0;
  };
  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(prev => (prev ? prev + 1 : 1));
        break;
      case 'neutral':
        setNeutral(prev => (prev ? prev + 1 : 1));
        break;
      case 'bad':
        setBad(prev => (prev ? prev + 1 : 1));
        break;
      default:
        return;
    }
  };
  // const { good, bad, neutral } = state;
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedback();
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
