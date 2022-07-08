import { PropTypes } from 'prop-types';
import { RateButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {options.map(option => (
      <RateButton
        key={option}
        type="button"
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </RateButton>
    ))}
  </>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
