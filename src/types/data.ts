export interface IGreeting {
  mainImg: string;
  title: string;
  date: string;
  message: string;
  host: {
    groom: {
      name: string;
      relation: string;
      parents: Parent;
    };
    bride: {
      name: string;
      relation: string;
      parents: Parent;
    };
  };
  eventDetail: string;
}

type Parent = { relation: string; isDeceased?: boolean; name: string }[];

export interface BrideAndGroom {
  name: string;
  relation: string;
  parents: Parent;
}
