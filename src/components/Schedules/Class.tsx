import { dataAudiences } from "../../data/dataAudiences";
import { IAudience } from "../Audiences/Audience";
import ModalAudience from "../Audiences/ModalAudience";
import { useState } from "react";

export interface IClass {
  time: number;
  title: string;
  teacher: string;
  type: string;
  audience: string;
}

interface propsClass {
  Class: IClass;
}

export default function Class({ Class }: propsClass) {
  const [modalAudience, setModalAudience] = useState(false);

  function clickHandler() {
    setModalAudience(!modalAudience);
  }

  const classesTime = [
    "",
    "8:30 - 10:10",
    "10:20 - 12:00",
    "12:20 - 14:00",
    "14:10 - 15:50",
    "16:00 - 17:40",
  ];

  const audience = dataAudiences.find(
    (item) => item.number == Class.audience
  ) as IAudience;

  return (
    <>
      {modalAudience && (
        <ModalAudience audience={audience} handlerClick={clickHandler} />
      )}
      <div className="class">
        <div className="classTime">{classesTime[Class.time]}</div>
        <div className="classMainInfo">
          <p style={{ fontWeight: "bold" }}>{Class.title}</p>
          <p style={{ color: "#ADADAD" }}>{Class.teacher}</p>
          <p style={{ fontWeight: "normal" }}>{Class.type}</p>
        </div>
        <div
          className="classAudience"
          onClick={clickHandler}
          style={{ cursor: "pointer" }}
        >
          {Class.audience}
        </div>
      </div>
    </>
  );
}
