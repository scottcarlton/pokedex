
import styled from 'styled-components';
import Search from './Search';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 72px;
  border: red solid thin;
  padding: 24px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Search></Search>
    </StyledHeader>
  );
}

export default Header;
