import { styled } from 'styled-system/jsx';
import { Column } from './Box';

const ContentContainer = styled(Column, {
  base: {
    width: '100%',
    borderTop: '2px solid white',
    fontSize: '16px',
    fontFamily: "'Share Tech Mono', monospace",
    textAlign: 'right',
    marginTop: '40px',
    '@media (max-width: 700px)': {
      textAlign: 'center',
      border: '0',
      marginTop: '100px',
    },
  },
});

const TextContainer = styled('div', {
  base: {
    width: '100%',
    paddingRight: '20px',
    paddingBottom: '20px',
    marginTop: '25px',
    borderRight: '5px solid white',
    '@media (max-width: 700px)': {
      border: '0',
      padding: '0',
    },
  },
});

const Text = styled('div', {
  base: {
    '@media (max-width: 700px)': {
      marginBottom: '20px',
    },
  },
});

const Blurb = () => (
  <ContentContainer>
    <TextContainer>
      <Text>Located in Vancouver, BC, Canada</Text>
      <Text>DevOps, Back-end Development, Security, System Architecture</Text>
      <Text>Loves Typescript, AWS, Terraform, and Go</Text>
    </TextContainer>
  </ContentContainer>
);

export default Blurb;
