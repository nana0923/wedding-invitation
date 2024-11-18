import styled from "@emotion/styled";
import data from "@/data.json";
import { Heading2, ParagraphCafeBlack, ParagraphHipi } from "@/components/Text";
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
      <ParagraphCafeBlack>{greeting.eventDetail}</ParagraphCafeBlack>
      <Calendar date={greeting.date} groom={greeting.host.groom.name} bride={greeting.host.bride.name} />
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
