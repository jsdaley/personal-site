import { createRoot } from 'react-dom/client';
import styled from '@emotion/styled';
import { Column } from './components/Box';
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

const App = () => (
  <SiteContainer>
    <SiteContent />
    <Footer />
  </SiteContainer>
);

createRoot(document.getElementById('react-root')).render(<App />);
