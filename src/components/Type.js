import styled from 'styled-components';

const StyledType = styled.li`
  margin: 0 3px;
`

const Pill = styled.span`
  padding: 2px 8px;
  background: rgba(0,0,0, .2);
  border-radius: 24px;
`

const Type = (props) => {
  const { type } = props
  return (
    <StyledType>
      <Pill>{ type }</Pill>
    </StyledType>
  );
}

export default Type;
