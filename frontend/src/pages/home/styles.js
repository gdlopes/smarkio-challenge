import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const InputComment = styled.div`
  display: flex;
  width: 100%;
  max-width: 50%;

  form {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 80%;

    input {
      margin-top: 10px;
      height: 100px;
      border-radius: 7px;
      border: 0;
    }

    button {
      margin-top: 10px;
    }
  }
`;

export const ReadComment = styled.div`
  padding: 10px;
  width: 100%;
  border-left: 2px solid;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    div {
      margin: 10px;
      width: 80%;
    }

    button {
      margin-top: 5px;
      width: 100px;
    }
  }
`;
