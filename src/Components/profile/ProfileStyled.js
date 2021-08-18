import styled from 'styled-components';

export const ProfileStyled = styled.div`
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding-top: 20px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  overflow: hidden;
  .description {
    text-align: center;
    color: #8e9ba8;
  }
  .avatar {
    width: 50%;
    border-radius: 50%;
    background-color: purple;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 10px;
  }
  .name {
    color: #1d2c3f;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .tag {
    margin-bottom: 6px;
  }
  .location {
    margin-bottom: 20px;
  }
`;
