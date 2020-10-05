import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  padding: 0 5px;
  border: 1px solid lightgray;
  height: 45px;
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
  font-size: 13px;
`;
