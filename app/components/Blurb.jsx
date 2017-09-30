import React, {Component} from 'react';
import {Column} from './Box';
import styled from 'emotion/react';

const ContentContainer = styled(Column)`
  width: 100%;
  border-top: 2px solid white;
  font-size: 18px;
  font-family: 'Share Tech Mono', monospace;
  text-align: right;

  @media(max-width: 700px) {
    text-align: center;
    border: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  border-right: 5px solid white;

  @media(max-width: 700px) {
    border: 0;
    padding: 0;
  }
`

const Text = styled.div`
  @media(max-width: 700px) {
    margin-bottom: 20px;
  }
`


class Blurb extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <ContentContainer {...this.props}>
        <TextContainer>
          <Text>Located in Vancouver, BC</Text>
          <Text>Specializes in Full-Stack Web Development</Text>
          <Text>Loves Angular, React and Node.js</Text>
        </TextContainer>
      </ContentContainer>
    );
  }
}

export default Blurb;
