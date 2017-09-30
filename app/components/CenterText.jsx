import React, {Component} from 'react';
import {Column} from './Box';
import styled from 'emotion/react';
import Blurb from './Blurb';

const ContentContainer = styled(Column)`
  width: 100%;
  max-width: 600px;
  align-items: flex-start;

  @media(max-width: 700px) {
    align-items: center;
  }
`;

const Name = styled.div`
  font-size: 60px;
  font-family: 'Arvo', serif;
`;

const Occupation = styled.div`
  font-size: 30px;
  line-height: 30px;
  margin-top: 5px;
  font-family: 'Muli', sans-serif;
  color: #66D9EF;
`;
const Role = styled.div`
  font-size: 30px;
  font-family: 'Muli', sans-serif;
  color: #F92672;
`;

const StyledBlurb = styled(Blurb)`
  margin-top: 60px;

  @media(max-width: 700px) {
    margin-top: 100px;
  }
`;

const CenterText = () => {
  return (
    <ContentContainer>
      <Name>Jared Daley</Name>
      <Occupation>Senior Software Engineer</Occupation>
      <Role>& Project Manager</Role>
      <StyledBlurb />
    </ContentContainer>
  );
};

export default CenterText;
