import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from './Avatar';
import Types from './Types';
import Type from './Type';
import Weaknesses from './Weaknesses';
import Weakness from './Weakness';

const CardLink = styled(Link)`
  display: block;
  height: 100%;
  text-decoration: none;
  padding: 12px;
  border-radius: 12px;
  background: var(--link);
  color: #fff;
  transform: scale(1);
  transition: transform 230ms ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const CardContent = styled.div`
  position: relative;
  text-align: center;
`

const CardId = styled.span`
  position: absolute;
  top: 0px;
  right: 12px;
`

const CardTitle = styled.h2`
  margin-bottom: 0;
`

const Card = (props) => {
  const { data } = props
  return (
    <li>
      <CardLink to={data.num}>
        <CardContent>
          <CardId>{ data.num }</CardId>
          <Avatar src={ data.img} />
          <CardTitle>{ data.name }</CardTitle>
          { data.type.length > 0 &&
            <Types>
              { data.type.map(type => <Type type={type} key={type}/>)}
            </Types>
          }

          { data.weaknesses.length > 0 && <h3>Weaknesses</h3> }
          { data.weaknesses.length > 0 &&
            <Weaknesses>
              { data.weaknesses.map(weakness => <Weakness weakness={weakness} key={weakness}/>) }
            </Weaknesses>
          }
        </CardContent>
      </CardLink>
    </li>
  );
}

export default Card;
