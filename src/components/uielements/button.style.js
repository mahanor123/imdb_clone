import Button from "@material-ui/core/Button";
import styled from "styled-components";

const IButton = styled(Button)`
  color: ${(props) => {
    console.log("Color", props);
    return props.textcolor ? props.textcolor : "blue";
  }} !important;
  &.MuiButton-root:hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

export default IButton;
