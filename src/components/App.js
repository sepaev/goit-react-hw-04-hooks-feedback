import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';

function App() {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  console.log(good);
  const countPositiveFeedback = (total, good) => {
    const result = (parseInt(good) * 100) / total;
    return total ? parseInt(result.toFixed(0)) : 0;
  };
  const countTotalFeedback = () => {
    const state = { good, bad, neutral };
    if (state) return Object.values(state).reduce((counter, value) => (counter += value), 0);
    return 0;
  };

  const onLeaveFeedback = e => {
    switch (e.target.name) {
      case 'good':
        setGood(good ? good + 1 : 1);
        break;
      case 'neutral':
        setNeutral(neutral ? neutral + 1 : 1);
        break;
      case 'bad':
        setBad(bad ? bad + 1 : 1);
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
