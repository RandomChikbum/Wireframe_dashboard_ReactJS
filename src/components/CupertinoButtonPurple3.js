import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonPurple3(props) {
  return (
    <Container {...props}>
      <Assets>Assets</Assets>
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

const Assets = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonPurple3;
