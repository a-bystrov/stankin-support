import ModalAudience from "./ModalAudience";
import { useState } from "react";

export interface IAudience {
  srcImg: string;
  number: string;
  type: string;
  building: string;
  floor: number;
  hardware: string[];
  software: string[];
  capacity: number;
  filters: {};
}

export interface propsAudience {
  audience: IAudience;
}

export default function Audience({ audience }: propsAudience) {
  const [modal, setModal] = useState(false);

  function clickHandler() {
    setModal(!modal);
  }

  return (
    <>
      {modal && (
        <ModalAudience audience={audience} handlerClick={clickHandler} />
      )}
      <div className="audience" onClick={clickHandler}>
        <div className="imgContainer">
          <img src={audience.srcImg} alt={String(audience.number)} />
        </div>
        <div className="textContent">
          <p>
            <b>Аудитория {audience.number}</b>
            <br />
          </p>
          <p>
            Вид занятий: {audience.type} <br />
          </p>
          <p>
            Корпус: {audience.building} <br />
          </p>
          <p>
            Этаж: {audience.floor} <br />
          </p>
          <p>
            Оборудование:{" "}
            {audience.hardware.map((item) => {
              if (
                audience.hardware.indexOf(item) ===
                audience.hardware.length - 1
              )
                return <>{item}</>;
              return <>{item}, </>;
            })}
          </p>
        </div>
      </div>
    </>
  );
}
