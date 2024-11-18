import styled from "@emotion/styled";
import { ParagraphCafeBlack } from "@/components/Text";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isSameDay, differenceInDays, startOfDay } from "date-fns";
import data from "@/data.json";

const { host, eventDate, eventTime } = data.greeting;

const Calendar = () => {
  const currentDate = new Date(eventDate);
  const today = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const dayOfWeek = currentDate.getDay();
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
  const yoil = weekDays[dayOfWeek];

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startOfWeekDate = startOfWeek(startOfMonthDate); // 달력 첫 번째 주의 시작 날짜
  const endOfWeekDate = endOfWeek(endOfMonthDate); // 달력 마지막 주의 끝 날짜
  const daysLeft = differenceInDays(startOfDay(currentDate), startOfDay(today));

  const days = eachDayOfInterval({ start: startOfWeekDate, end: endOfWeekDate });

  // 날짜,시간 렌더링
  const renderEventDate = () => {
    const eventDateText = `${year}년 ${month}월 ${day}일 ${yoil}요일`;
    return (
      <>
        <EventText>{eventDateText}</EventText>
        <EventText>{eventTime}</EventText>
      </>
    );
  };

  // 요일 이름 렌더링
  const renderWeekDays = () => {
    return (
      <WeekDaysRow>
        {weekDays.map((day, index) => (
          <WeekDay key={index} isSaturday={index === 6} isSunday={index === 0}>
            {day}
          </WeekDay>
        ))}
      </WeekDaysRow>
    );
  };

  // 달력 렌더링
  const renderCalendar = () => {
    const weeks: JSX.Element[] = [];
    let currentWeek: JSX.Element[] = [];

    days.forEach((day, index) => {
      const isCurrentMonth = day >= startOfMonthDate && day <= endOfMonthDate;
      const isSaturday = day.getDay() === 6;
      const isSunday = day.getDay() === 0;
      const isToday = isSameDay(day, currentDate);

      if (isCurrentMonth) {
        currentWeek.push(
          <Day key={index} isSaturday={isSaturday} isSunday={isSunday} isToday={isToday}>
            {format(day, "d")}
          </Day>
        );
      } else {
        currentWeek.push(<Day key={index} isSaturday={isSaturday} isSunday={isSunday} isToday={isToday} />);
      }

      if (currentWeek.length === 7) {
        weeks.push(<Week key={`week-${index}`}>{currentWeek}</Week>);
        currentWeek = [];
      }
    });

    return weeks;
  };

  // 남은 일수 메시지
  const renderLeftDayMessage = () => {
    if (daysLeft > 0) {
      return (
        <>
          {host.groom.name}♥{host.bride.name} 결혼식이 <MessageBold>{daysLeft}</MessageBold>일 남았습니다
        </>
      );
    } else if (daysLeft == 0) {
      return (
        <>
          드디어 결혼식 날🎉 <br />
          함께해주셔서 감사합니다 😊
        </>
      );
    } else {
      return <> 축하해주셔서 감사합니다😊</>;
    }
  };
  return (
    <>
      <CalenderWrap>
        <EventDate>{renderEventDate()}</EventDate>
        {renderWeekDays()}
        <WeeksWrap>{renderCalendar()}</WeeksWrap>
        <Message>{renderLeftDayMessage()}</Message>
      </CalenderWrap>
    </>
  );
};

export default Calendar;

const CalenderWrap = styled.div`
  width: 100%;
  max-width: 330px;
  margin: 30px auto;
`;

const EventDate = styled.div`
  margin-bottom: 20px;
`;

const EventText = styled(ParagraphCafeBlack)`
  font-size: 20px;
`;

const WeekDaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-weight: 400;
`;

interface IWeekDayProps {
  isSaturday: boolean;
  isSunday: boolean;
}

const WeekDay = styled.div<IWeekDayProps>`
  color: ${({ isSaturday, isSunday }) => (isSaturday ? "#4174e8" : isSunday ? "#E84149" : "#595959")};
  padding: 13px;
`;

const WeeksWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Week = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

interface IDayProps {
  isSaturday: boolean;
  isSunday: boolean;
  isToday: boolean;
}

const Day = styled.div<IDayProps>`
  text-align: center;
  padding: 13px;
  color: ${({ isSaturday, isSunday }) => (isSaturday ? "#4174e8" : isSunday ? "#E84149" : "#595959")};
  font-weight: ${({ isToday }) => (isToday ? "bold" : "normal")};
  background-color: ${({ isToday }) => (isToday ? "#ffe4e1" : "transparent")};
  border-radius: ${({ isToday }) => (isToday ? "50%" : "0")};
`;

const Message = styled(ParagraphCafeBlack)`
  margin-top: 30px;
`;

const MessageBold = styled.span`
  color: #4174e8;
  font-weight: bold;
`;
