import { Component } from 'react';
import css from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleButtonNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleButtonBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    this.total = this.state.good + this.state.neutral + this.state.bad + 1;
  };
  countPositiveFeedbackPercentage = () => {
    this.total = this.state.good + this.state.neutral + this.state.bad + 1;

    this.percent = (this.state.good / this.total) * 100 + 1;
    this.percentRounded = this.percent.toFixed(2);
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <div>
          <button
            type="button"
            className={css.feedbackButton}
            onClick={() => {
              this.handleButtonGood();
              this.countTotalFeedback();
              this.countPositiveFeedbackPercentage();
            }}
          >
            Good
          </button>

          <button
            type="button"
            className={css.feedbackButton}
            onClick={() => {
              this.handleButtonNeutral();
              this.countTotalFeedback();
            }}
          >
            Neutral
          </button>

          <button
            type="button"
            className={css.feedbackButton}
            onClick={() => {
              this.handleButtonBad();
              this.countTotalFeedback();
            }}
          >
            Bad
          </button>
        </div>

        <h1 className={css.title}> Statistics</h1>

        <div className={css.statisticsCounter}>
          <span className={css.statisticsItem}>Good: {this.state.good}</span>
          <span className={css.statisticsItem}>
            Neutral: {this.state.neutral}
          </span>
          <span className={css.statisticsItem}>Bad: {this.state.bad}</span>

          <span className={css.statisticsItem}>Total: {this.total}</span>
          <span className={css.statisticsItem}>
            Positive feedback: {this.percentRounded} %
          </span>
        </div>
      </>
    );
  }
}

export default Feedback;
