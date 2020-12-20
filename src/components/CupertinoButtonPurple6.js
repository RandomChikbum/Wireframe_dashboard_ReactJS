import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonPurple6(props) {
  return (
    <Container {...props}>
      <Caption></Caption>
      <PlanningAdvisory>Planning &amp; Advisory</PlanningAdvisory>
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
  position: relative;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

const PlanningAdvisory = styled.span`
  font-family: Roboto;
  top: 14px;
  left: 80px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,0,0,1);
  font-size: 17px;
`;

export default CupertinoButtonPurple6;
