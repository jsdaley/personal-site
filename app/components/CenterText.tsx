import { styled } from 'styled-system/jsx';
import { Column } from './Box';
import Blurb from './Blurb';

const ContentContainer = styled(Column, {
  base: {
    width: '100%',
    maxWidth: '600px',
    alignItems: 'flex-start',
    '@media (max-width: 700px)': {
      alignItems: 'center',
    },
  },
});

const Name = styled('div', {
  base: {
    fontSize: '60px',
    fontFamily: "'Arvo', serif",
  },
});

const Occupation = styled('div', {
  base: {
    fontSize: '30px',
    lineHeight: '30px',
    marginTop: '5px',
    marginBottom: '4px',
    fontFamily: "'Muli', sans-serif",
    color: '#90DAE6',
  },
});

const Role = styled('div', {
  base: {
    fontSize: '20px',
    fontFamily: "'Muli', sans-serif",
  },
});

const FirstRole = styled(Role, {
  base: {
    color: '#A89FEC',
  },
});

const SecondRole = styled(Role, {
  base: {
    color: '#ED6C89',
  },
});

const CenterText = () => (
  <ContentContainer>
    <Name>Jared Daley</Name>
    <Occupation>Information Security Officer</Occupation>
    <FirstRole>Software Engineer</FirstRole>
    <SecondRole>Senior Engineering Manager and DevOps Team Lead</SecondRole>
    <Blurb />
  </ContentContainer>
);

export default CenterText;
