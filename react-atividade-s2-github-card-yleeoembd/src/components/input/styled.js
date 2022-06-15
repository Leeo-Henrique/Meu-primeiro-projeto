import { styled as StyledMui } from "@mui/system";
import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.main`
  width: 90%;
  max-width: 380px;
  height: 90vh;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  @media (min-width: 400){
    main{
      padding: 20px;
    }
  }
  form {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 50px;
  }
  form button {
    cursor: pointer;
    width: 100px;
    background-color: blue;
    color: aliceblue;
    border: 0;
    padding: 0;
    border-radius: 10px;
  }
  form div {
    width: 250px;
  }
  ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    max-height: 80%;
  }
  .containerList {
    margin-top: 20px;
  }
`;

export const StyledTextField = StyledMui(
  TextField,
  ""
)({
  background: "white",
  color: "black",
});
