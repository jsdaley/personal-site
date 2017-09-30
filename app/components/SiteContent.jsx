import React, {Component} from 'react';
import {Column} from './Box';
import styled from 'emotion/react';
import CenterText from './CenterText';

const ContentContainer = styled(Column)`
  font-size: 72px;
  width: 100%;
  padding: 20px;

  @media(max-width: 700px) {
    justify-content: flex-start
  }
`;

class SiteContent extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <ContentContainer grow>
        <CenterText />
      </ContentContainer>
    );
  }
}

export default SiteContent;
