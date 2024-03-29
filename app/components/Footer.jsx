import React from 'react';
import styled from '@emotion/styled';
import {Row} from './Box';

const FooterContainer = styled(Row)`
  color: #B3DA82;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-family: 'Share Tech Mono', monospace;

  @media(max-width: 700px) {
    flex-direction: column;
    justify-content: flex-end;
  }
`;

const Link = styled.a`
  &:first-child {
    margin-left: 0;
  }
  color: #B3DA82;
  margin-left: 30px;
  text-decoration: none;
`;

const LeftContainer = styled(Row)`
  @media(max-width: 700px) {
    margin-bottom: 10px;
  }
`;

const Footer = (props) => {
  return (
    <FooterContainer justify="space-between">
      <LeftContainer>
        <Link href="https://orderful.com">Where I Work</Link>
        <Link href="https://www.linkedin.com/in/jared-daley/">LinkedIn</Link>
        <Link href="mailto:work@jareddaley.com">Contact Me</Link>
      </LeftContainer>

      <Row>
        <Link href="https://www.linkedin.com/in/jared-daley/"><i className="fa fa-linkedin" aria-hidden="true"></i></Link>
        <Link href="https://github.com/jsdaley"><i className="fa fa-github" aria-hidden="true"></i></Link>
        <Link href="https://www.instagram.com/jsdaley/"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
      </Row>
    </FooterContainer>
  );
};

export default Footer;
