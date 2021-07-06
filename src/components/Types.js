import styled from 'styled-components';

const StyledTypes = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 6px;
  padding: 0;
  list-style: none;
`
const Types = ({ children}) => {

  return (
    <StyledTypes>
      { children }
    </StyledTypes>
  );
}

export default Types;
