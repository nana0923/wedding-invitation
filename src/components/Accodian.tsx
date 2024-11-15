import styled from "@emotion/styled";
import { ReactNode, useState } from "react";
import ExpandMore from "@/assets/icons/expand_more.svg?react";

interface IAccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore />
        </span>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  font-family: "Pretendard", sans-serif;
  border: 1px solid #4174e8;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #4174e8;
  padding: 7px 12px 8px 16px;
  cursor: pointer;
  & > p {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    line-height: 25px;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isActive ? "rotate(180deg)" : undefined)};
  }
`;

export const AccordionContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  text-align: justify;
  padding: 5px 15px;
  background-color: #ffffff;
`;
