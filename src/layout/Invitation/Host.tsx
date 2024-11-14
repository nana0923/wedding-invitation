import styled from "@emotion/styled";
import data from "@/data.json";
import heartIcon from "@/assets/icons/heart.png";
import { BrideAndGroom } from "@/types/data.ts";
import { ParagraphCafe } from "@/components/Text";
import React from "react";

const Host = () => {
  const { groom, bride } = data.greeting.host;
  return (
    <>
      <HostContainer>
        <HostInfo person={groom} />
        <HeartImg src={heartIcon} />
        <HostInfo person={bride} />
      </HostContainer>
    </>
  );
};

export default Host;

const HostInfo = ({ person }: { person: BrideAndGroom }) => {
  return (
    <div>
      <ParagraphCafe>
        {person.parents && (
          <>
            {person.parents.map((parent, index) => (
              <React.Fragment key={index}>
                {index > 0 && <Dot />}
                {parent.name}
              </React.Fragment>
            ))}
          </>
        )}
      </ParagraphCafe>
      <ParagraphCafe>
        <ParagraphCafeSmall>{person.relation}</ParagraphCafeSmall>
        &nbsp;{person.name}
      </ParagraphCafe>
    </div>
  );
};

const HostContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin: 28px 0;
`;

const Dot = styled.span`
  display: inline-block;
  width: 2px;
  height: 2px;
  margin: 3px 6px;
  border-radius: 50%;
  background-color: #4174e8;
`;

const HeartImg = styled.img`
  width: 27px;
  height: 25px;
`;

const ParagraphCafeSmall = styled.span`
  font-size: 12px;
  line-height: 25px;
`;
