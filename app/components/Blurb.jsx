import React from 'react';
import {Column} from './Box';
import styled from '@emotion/styled';

const ContentContainer = styled(Column)`
  width: 100%;
  border-top: 2px solid white;
  font-size: 16px;
  font-family: 'Share Tech Mono', monospace;
  text-align: right;

  @media(max-width: 700px) {
    text-align: center;
    border: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  padding-right: 20px;
  padding-bottom: 20px;
  margin-top: 25px;
  border-right: 5px solid white;

  @media(max-width: 700px) {
    border: 0;
    padding: 0;
  }
`;

const Text = styled.div`
  @media(max-width: 700px) {
    margin-bottom: 20px;
  }
`;

const Blurb = (props) => {
  return (
    <ContentContainer {...props}>
      <TextContainer>
        <Text>Located in Vancouver, BC, Canada</Text>
        <Text>Specializes in DevOps, Full-Stack Web Development and Security</Text>
        <Text>Loves Typescript, AWS, Terraform, Go and React </Text>
      </TextContainer>
    </ContentContainer>
  );
};

export default Blurb;
