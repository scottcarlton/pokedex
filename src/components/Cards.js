import styled from 'styled-components';

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  list-style: none;
  margin: 0;
  padding: 24px;
`


const Cards = ({ children }) => {
  return (
    <StyledList>
      { children }
    </StyledList>
  );
}

export default Cards;
