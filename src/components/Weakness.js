import styled from 'styled-components';

const StyledWeakness = styled.li`
  margin: 0 3px;
`
const Weakness = (props) => {
  const { weakness } = props
  return (
    <StyledWeakness>
      { weakness }
    </StyledWeakness>
  );
}

export default Weakness;
