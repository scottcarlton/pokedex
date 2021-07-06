import styled from 'styled-components';

import Avatar from './Avatar';
import Types from './Types';
import Type from './Type';
import Weaknesses from './Weaknesses';
import Weakness from './Weakness';

const StyledDetails = styled.div`
  text-align: center;
`

const Details = (props) => {
  const { data } = props
  return (
    <StyledDetails>
      <Avatar src={data.img} />
      <span>{ data.num }</span>
      <h1>{ data.name }</h1>
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

      <ul>
        <li>
          <h3>height:</h3>
          { data.height }
        </li>
        <li>
          <h3>weight:</h3>
          { data.weight }
        </li>
        { data.prev_evolution && ( <li>
          <h3>Previous Evolution</h3>
          <ul>
            { data.prev_evolution.map(prev => (<li key={prev.num} >{prev.num} : {prev.name}</li>)) }
          </ul>

        </li> )}
        { data.next_evolution && ( <li>
          <h3>Next Evolution</h3>
          <ul>
            { data.next_evolution.map(next => (<li key={next.num }>{next.num} : {next.name}</li>)) }
          </ul>

        </li> )}
      </ul>
    </StyledDetails>
  );
}

export default Details;
