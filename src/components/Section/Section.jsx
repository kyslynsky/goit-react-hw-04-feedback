import { PropTypes } from 'prop-types';
import { SectionBlock, Title } from './Section.styled';

export const Section = ({ title, children }) => (
  <SectionBlock>
    <Title>{title}</Title>
    {children}
  </SectionBlock>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
