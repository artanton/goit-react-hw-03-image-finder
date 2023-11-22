import 'modern-normalize';
import React, { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistic/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  //   updateGood = () => {
  //     this.setState(prevState => {
  //       return { good: prevState.good + 1 };
  //     });
  //   };
  //   updateNeutral = () => {
  //     this.setState (prevState =>{
  //     return{ neutral: prevState.neutral +1};
  //   });

  // }

  //   updateBad =() => {
  //     this.setState (prevState => {
  //       return {bad : prevState.bad +1}
  //     })
  //   };

  render() {
    const { good, neutral, bad } = this.state;

    const feedbackOptions = [
      { name: 'good', value: good },
      { name: 'neutral', value: neutral },
      { name: 'bad', value: bad },
    ];

    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage =
      countTotalFeedback > 0
        ? Math.round((good / countTotalFeedback) * 100)
        : 0;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title=" Please leave feadback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.updateFeedback}
          />

        </Section>

        <Section title=" Statistics">
          <Statistics
            value={this.state}
            total={countTotalFeedback}
            positiveFeadback={countPositiveFeedbackPercentage}
          />
          <GlobalStyle />
        </Section>
      </div>
    );
  }
}
