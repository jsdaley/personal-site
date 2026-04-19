import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { styled } from 'styled-system/jsx';
import { Column } from './components/Box';
import SiteContent from './components/SiteContent';
import Footer from './components/Footer';
import './global.css';

const SiteContainer = styled(Column, {
  base: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
});

const App = () => (
  <SiteContainer>
    <SiteContent />
    <Footer />
    <Analytics />
    <SpeedInsights />
  </SiteContainer>
);

createRoot(document.getElementById('react-root')!).render(<App />);
