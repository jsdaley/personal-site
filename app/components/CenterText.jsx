import React from 'react';
import {Column} from './Box';
import styled from '@emotion/styled';
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
  margin-bottom: 4px;
  font-family: 'Muli', sans-serif;
  color: #90DAE6;
`;
const Role = styled.div`
  font-size: 20px;
  font-family: 'Muli', sans-serif;
`;

const FirstRole = styled(Role)`
  color: #A89FEC;
`;

const SecondRole = styled(Role)`
  color: #ED6C89;
`;


const StyledBlurb = styled(Blurb)`
  margin-top: 40px;

  @media(max-width: 700px) {
    margin-top: 100px;
  }
`;

const CenterText = () => {
  return (
    <ContentContainer>
      <Name>Jared Daley</Name>
      <Occupation>Senior Software Engineer</Occupation>
      <FirstRole>Engineering Manager and DevOps Team Lead</FirstRole>
      <SecondRole>SOC 2 Compliance Officer</SecondRole>
      <StyledBlurb />
    </ContentContainer>
  );
};

export default CenterText;
