import { styled } from 'styled-system/jsx';
import { Row } from './Box';

const FooterContainer = styled(Row, {
  base: {
    color: '#B3DA82',
    width: '100%',
    padding: '20px',
    fontSize: '16px',
    fontFamily: "'Share Tech Mono', monospace",
    '@media (max-width: 700px)': {
      flexDirection: 'column',
      justifyContent: 'flex-end',
    },
  },
});

const Link = styled('a', {
  base: {
    color: '#B3DA82',
    marginLeft: '30px',
    textDecoration: 'none',
    '&:first-child': {
      marginLeft: '0',
    },
  },
});

const LeftContainer = styled(Row, {
  base: {
    '@media (max-width: 700px)': {
      marginBottom: '10px',
    },
  },
});

const Footer = () => (
  <FooterContainer justifyContent="space-between">
    <LeftContainer>
      <Link href="https://orderful.com">Where I Work</Link>
      <Link href="https://www.linkedin.com/in/jared-daley/">LinkedIn</Link>
      <Link href="mailto:work@jareddaley.com">Contact Me</Link>
    </LeftContainer>
    <Row>
      <Link href="https://www.linkedin.com/in/jared-daley/" aria-label="LinkedIn"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
      <Link href="https://github.com/jsdaley" aria-label="GitHub"><i className="fa fa-github" aria-hidden="true"></i></Link>
      <Link href="https://www.instagram.com/jsdaley/" aria-label="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
    </Row>
  </FooterContainer>
);

export default Footer;
