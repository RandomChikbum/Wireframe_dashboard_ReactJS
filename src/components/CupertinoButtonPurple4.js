import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonPurple4(props) {
  return (
    <Container {...props}>
      <Tracker>Tracker</Tracker>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Tracker = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonPurple4;
