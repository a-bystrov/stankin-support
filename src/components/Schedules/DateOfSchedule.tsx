import Class, { IClass } from "./Class";

export interface IDateSchedule {
  date: string;
  classes: IClass[];
}

export default function DateOfSchedule({ date, classes }: IDateSchedule) {
  let classDate = new Date(date);

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  return (
    <div className="dateOfSchedule">
      <div className="date">
        <p>{days[classDate.getDay()]}</p>
        <p className="number">{classDate.getDate()}</p>
        <p>{months[classDate.getMonth()]}</p>
      </div>
      <div className="classes">
        {classes.map((item) => {
          return <Class Class={item} />;
        })}
      </div>
    </div>
  );
}
