import { PropTypes } from 'prop-types';
import { RateButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const keys = Object.keys(options);

  return (
    <>
      {keys.map(key => (
        <RateButton
          key={key}
          type="button"
          onClick={() => onLeaveFeedback(key)}
        >
          {key}
        </RateButton>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
