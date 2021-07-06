import styled from 'styled-components';

const StyledWeaknesses = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  list-style: none;
`
const Weaknesses = ({ children }) => {

  return (
    <StyledWeaknesses>
      { children }
    </StyledWeaknesses>
  );
}

export default Weaknesses;
