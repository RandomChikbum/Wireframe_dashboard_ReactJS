import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonPurple(props) {
  return (
    <Container {...props}>
      <LearnNow>Learn Now</LearnNow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #5856D6;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const LearnNow = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  align-self: center;
`;

export default CupertinoButtonPurple;
