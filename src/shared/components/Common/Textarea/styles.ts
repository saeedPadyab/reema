import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const Input = styled.textarea`
  width: 100%;
  border-radius: 8px;
  padding: 5px;
  min-height: 200px;
  border: 1px solid lightgray;
  &:focus {
    outline: none;
    border: 1px solid gray;
  }
  &:focus + span {
    opacity: 0;
  }
`;
export const Label = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: gray;
  transition: all 0.2s;
`;
