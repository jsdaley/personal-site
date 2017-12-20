import React from 'react';
import {render} from 'react-dom';
import styled from 'emotion/react';
import {Column} from './components/Box';
import SiteContent from './components/SiteContent';
import Footer from './components/Footer';

const SiteContainer = styled(Column)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

class App extends React.Component {
  render () {
    return (
      <SiteContainer>
        <SiteContent />
        <Footer />
      </SiteContainer>
    );
  }
}

render(<App/>, document.getElementById('react-root'));
