
import styled from 'styled-components';

const StyledAvatar = styled.figure`

`

const Avatar = (props) => {
  const { src } = props
  return (
    <StyledAvatar>
      <img src={ src } alt="" />
    </StyledAvatar>

  );
}

export default Avatar;
