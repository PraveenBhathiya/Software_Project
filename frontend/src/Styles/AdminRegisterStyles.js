// AdminSignInStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StudentSignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(226, 242, 250);
  min-height: 100vh; 
`;
export const Title = styled.div`
  Font-size: 40px;
  color: #2648c3;
  margin-top: 30px;
  

`;
export const Logo = styled.div`
  width: 70px;
  height: 60px;
  align-item: center;

  
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  max-width: 500px; 
  height: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: rgb(210, 232, 270);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const Topic = styled.div`
  Font-size: 30px;
  font-weight:800;
  color: #2648c3;
  margin-top: 50px;
  

`;


export const InputField = styled.input`
  width: 80%;
  padding: 10px;
  gap:50px;
  margin-bottom:2px;
  margin-top:30px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled(Link)`
  width: 30%;
  padding: 8px;
  margin-top: 30px;
  border: none;
  border-radius: 8px;
  background-color:#3c36ea;
  color: white;
  font-size: 18px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6294df;
  }
  
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
