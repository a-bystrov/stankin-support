import DateOfSchedule, { IDateSchedule } from "./DateOfSchedule";
import FiltersSchedules from "./FiltersSchedules";
import { commonSchedule } from "../../data/dataSchedules";
import { useState } from "react";

export default function Schedules() {
  const [group, setGroup] = useState('');
  const [selectedDate, setDate] = useState('');

  const changeGroup = (event:React.ChangeEvent, search: string)=>{
    setGroup(search)
  }

  const changeDate = (event:React.ChangeEvent, newDate: string)=>{
    setDate(newDate)
  }

  return (
    <>
      <FiltersSchedules changeDate={changeDate} changeSearch={changeGroup}/>
      {
      commonSchedule.find((item) => {
        if(item.group === group) return true
      })?.schedule.map((date) => (
        Date.parse(date.date) >= Date.parse(selectedDate) ? 
        <DateOfSchedule date={date.date} classes={date.classes} />
        :
        <></>
      ))}
    </>
  );
}
