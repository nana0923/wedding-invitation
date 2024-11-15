import Accordion from "@/components/Accodian";
import { Heading2 } from "@/components/Text";
import styled from "@emotion/styled";
import AccountWrap from "./AccountWrap";
import data from "@/data.json";

const Account = () => {
  const { hostInfo } = data;
  return (
    <>
      <Heading2>마음 전하실 곳</Heading2>
      <AccordionContent>
        {hostInfo.map((host) => {
          return (
            <Accordion title={host.host} key={host.host}>
              {host.accountInfo.map((account) => {
                return <AccountWrap key={account.name} name={account.name} relation={account.relation} bank={account.bank} account={account.account} />;
              })}
            </Accordion>
          );
        })}
      </AccordionContent>
    </>
  );
};
export default Account;

const AccordionContent = styled.div`
  width: 100%;
  padding: 10px 0;
`;
