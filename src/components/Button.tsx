import styled from "@emotion/styled";

export const ButtonWhite = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48%;
  padding: 5px 20px 5px 18px;
  border-radius: 5px;
  border: 1px solid #4174e8;
  background: #fff;
  color: #4174e8;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`;

export const ButtonBlack = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 2px 20px 2px 18px;
  border-radius: 5px;
  border: 1px solid #595959;
  background: #fff;
  color: #595959;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  cursor: pointer;
  transform: translateY(-40px);
`;

export const ButtonBlue = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  padding: 7px 36px 8px 35px;
  border-radius: 5px;
  background: #4174e8;
  color: #fff;
  text-align: center;
  font-family: "Pretendard", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 25px;
  cursor: pointer;
`;

export const ButtonYellow = styled(ButtonBlue)`
  background: #f9e000;
  color: #595959;
`;
