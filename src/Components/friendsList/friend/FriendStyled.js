import styled from 'styled-components';

export const FriendStyled = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  .status {
    margin-right: 10px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }
  .avatar {
    background-color: purple;
    border-radius: 5px;
  }
  .name {
    margin-left: 10px;
    font-weight: 700px;
    font-size: 20px;
  }
  .green {
    background-color: green;
  }
  .red {
    background-color: red;
  }
`;
