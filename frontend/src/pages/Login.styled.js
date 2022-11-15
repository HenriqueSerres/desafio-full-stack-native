import styled from 'styled-components';

export const LoginSection = styled.section`
  position: absolute;
  top: 66%;
  left: 10%;
  transform: translateY(-50%);
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const TextInput = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 0.5px solid #c4c4c4;
  margin-bottom: 16px;
`;
export const LoginButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 12px;
  background: rgb(128,117,109);
  background: linear-gradient(90deg, rgba(128,117,109,1) 0%, rgba(215,207,201,1) 100%);
  font-weight: 700;
  &:hover &:enabled{
    background: #e7dddd;
  }
`