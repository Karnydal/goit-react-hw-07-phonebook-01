import styled from '@emotion/styled';

export const ContactCards = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const Name = styled.span`
  font-weight: 600;
  margin-right: 10px;
`;
export const Phone = styled.span`
  font-weight: 700;
`;
export const DeleteBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  border-radius: 4px;
  height: 30px;
  padding: 10px;
  border: none;
  background-color: #4b4b4b;
  color: white;
  cursor: pointer;
`;