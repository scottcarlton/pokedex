import styled from 'styled-components';

const StyledContainer = styled.main`
  display: grid;
  grid-template-columns: 300px 1fr;
  align-items: flex-start;
`;


const Container = ({ children }) => {
  return (
    <StyledContainer>
      { children }
    </StyledContainer>
  );
}

export default Container;
