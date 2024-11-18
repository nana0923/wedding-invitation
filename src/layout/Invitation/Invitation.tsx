import styled from "@emotion/styled";
import data from "@/data.json";
import { Heading2, ParagraphHipi } from "@/components/Text";
import Host from "@/layout/Invitation/Host";
import Calendar from "@/layout/Invitation/Calendar";

const Invitation = () => {
  const { greeting } = data;

  return (
    <>
      <Heading2>모시는 글</Heading2>
      <ParagraphHipi>{greeting.message}</ParagraphHipi>
      <Border />
      <Host />
      <Calendar />
    </>
  );
};

export default Invitation;

const Border = styled.span`
  width: 284px;
  height: 1px;
  background: #dfdfdfdd;
  margin-top: 20px;
`;
