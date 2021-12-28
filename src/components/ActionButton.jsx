import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const OrangeButton = styled(Button)`
  width: 100%;
  color: #000;
  background-color: #fdbf5a;
  border-radius: 70px;
  margin-bottom: 20px;

  :hover {
    background-color: #ffa842;
  }
`;

const ActionButton = (props) => <OrangeButton {...props}>{props.children}</OrangeButton>

export default ActionButton;
