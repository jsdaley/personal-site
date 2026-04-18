import { styled } from 'styled-system/jsx';
import { Column } from './Box';
import CenterText from './CenterText';

const ContentContainer = styled(Column, {
  base: {
    fontSize: '72px',
    width: '100%',
    padding: '20px',
    '@media (max-width: 700px)': {
      justifyContent: 'flex-start',
    },
  },
});

const SiteContent = () => (
  <ContentContainer flexGrow={1}>
    <CenterText />
  </ContentContainer>
);

export default SiteContent;
