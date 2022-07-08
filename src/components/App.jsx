import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Notification } from './Notification';
import { Container } from './Container';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleRateClick = stat => {
    this.setState(prevState => {
      return {
        [stat]: prevState[stat] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (prevValue, value) => prevValue + value,
      0
    );

  countPositiveFeedbackPercentage = () =>
    !this.state.good
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const stats = Object.keys(this.state);

    return (
      <>
        <Container>
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={stats}
              onLeaveFeedback={this.handleRateClick}
            />
          </Section>
          <Section title="Statistics">
            {!this.countTotalFeedback() ? (
              <Notification message="There is no feedback" />
            ) : (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            )}
          </Section>
        </Container>
      </>
    );
  }
}
