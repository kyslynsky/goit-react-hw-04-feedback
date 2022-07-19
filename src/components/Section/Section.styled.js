import styled from 'styled-components';

export const SectionBlock = styled.section`
  width: 40%;
  margin: 0 auto;
  padding: 30px;
  text-align: center;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 1px -2px,
    rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px;

  &:first-child {
    margin-bottom: 20px;
  }

  &:last-child {
    height: 30vh;
  }
`;

export const Title = styled.h2`
  margin-bottom: 15px;
`;
