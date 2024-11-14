import styled from "@emotion/styled";
import Copy from "@/assets/icons/copy.svg?react";

interface IAccountProps {
  name: string;
  relation: string;
  bank: string;
  account: string;
}
const AccountWrap = ({ name, relation, bank, account }: IAccountProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(account).then(
      () => {
        alert("계좌번호가 복사되었습니다.😉😉");
      },
      () => {
        alert("계좌번호 복사에 실패했습니다.🥲🥲");
      }
    );
  };

  return (
    <Wrapper>
      <Info>
        <Relation>{relation}</Relation>
        <Name>{name}</Name>
      </Info>
      <Details>
        <AccountInfo>
          {bank} {account}
        </AccountInfo>
        <CopyButton onClick={handleCopy}>
          <Copy fill="#dfdfdf" />
        </CopyButton>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: "Pretendard", sans-serif;
  padding: 7px 0;
  border-bottom: 1px solid #dfdfdf;
  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  height: inherit;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  margin: 5px 0;
`;
const Relation = styled.span`
  color: #44484d;
  font-size: 12px;
`;
const Name = styled.span`
  font-size: 14px;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AccountInfo = styled.div`
  font-size: 13px;
`;
const CopyButton = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  gap: 2px;
  outline: none;
  box-shadow: none;
  background: white;
`;

export default AccountWrap;
