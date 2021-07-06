import styled from 'styled-components';

const StyledCheckbox = styled.label`
  display: block;
  margin-bottom: 6px;
  cursor: pointer;
`

const StyledCheckboxText = styled.span`
  margin-left: 6px;
`
const Checkbox = (props) => {

  const { input, onChange } = props;

  return (
    <StyledCheckbox>
      <input className="js-input" type="checkbox" value={input} onChange={onChange} />
      <StyledCheckboxText>{input}</StyledCheckboxText>
    </StyledCheckbox>
  );
}

export default Checkbox;
