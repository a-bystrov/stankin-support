import { IDateSchedule } from "../components/Schedules/DateOfSchedule";

export const commonSchedule: {group: string, schedule: IDateSchedule[]}[] = [];

const groupSchedule: IDateSchedule[] = [];

for(let i = 3; i < 9; i++) {
  groupSchedule.push(
    {
      date: (Math.trunc(i / 10) === 0) ?  `2023-04-0${i}` : `2023-04-${i}`,
      classes: [
        {
          time: 1,
          title: "Системный анализ",
          teacher: "Логачев М.С.",
          type: "Лекция",
          audience: "235",
        },
        {
          time: 2,
          title: "Программная инженерия",
          teacher: "Рыбаков А.В.",
          type: "Семинар",
          audience: "0501",
        },
        {
          time: 3,
          title: "Программное обеспечение для организации взаимодействия",
          teacher: "Мешков В.Г.",
          type: "Лекция",
          audience: "0502",
        },
      ],
    },
  )
}

for(let i = 10; i < 12; i++) {
  commonSchedule.push(
    {
      group: `ИДБ-19-${i}`,
      schedule: groupSchedule,
    }
  )
}
