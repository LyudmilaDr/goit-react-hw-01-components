import styled from 'styled-components';
export const FriendData = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 640px;
  margin-bottom: 30px;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 300px;
  padding: 10px;
  gap: 20px;
  border-radius: 5px;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16), 1px 4px 4px rgba(0, 0, 0, 0.06),
    1px 1px 1px rgba(0, 0, 0, 0.12);
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
`;
