import styled from "styled-components";

export const StyledList = styled.div`
  width: 100%;
  height: 100px;
  color: black;
  display: flex;

  figure {
    margin: 0;
    width: 30%;
    height: 100%;
  }
  figure img {
    height: 100%;
  }
  .subtitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .subtitle h1,
  p {
    margin: 0;
    padding: 0;
    font-size: calc(10px + 1vmin);
    text-align: start;
  }
  h1 {
    font-weight: bold;
  }
  p {
    color: grey;
  }
`;
