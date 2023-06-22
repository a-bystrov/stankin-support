import ItemOfDescriptionAudience from "./itemOfDescriptionAudience";
import { IAudience } from "./Audience";
import React from "react";

interface propsDescriptionAud {
  audience: IAudience;
  handlerClick: () => void;
}

export default function ModalAudience({
  audience,
  handlerClick,
}: propsDescriptionAud) {
  function modalClick(e: React.MouseEvent) {
    if (e.target == e.currentTarget) {
      handlerClick();
    }
  }

  return (
    <div className="modalAudienceBackground" onClick={modalClick}>
      <div className="modalAudience">
        <div className="shortDescription">
          <div>
            <p style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
              Аудитория {audience.number}
            </p>
            <p>{audience.type}</p>
            <p>{audience.capacity} мест</p>
          </div>
          <img src={audience.srcImg} alt="" />
        </div>
        <ItemOfDescriptionAudience
          title="Оборудование"
          children={
            <p>
              {audience.hardware.map((item) => {
                if (
                  audience.hardware.indexOf(item) ==
                  audience.hardware.length - 1
                )
                  return <>{item}</>;
                return <>{item}, </>;
              })}
            </p>
          }
        />
        <ItemOfDescriptionAudience
          title="Расположение"
          children={
            <p>
              Корпус: {audience.building}
              <br />
              Этаж: {audience.floor}
            </p>
          }
        />
        <ItemOfDescriptionAudience
          title="Установленное ПО"
          children={
            <p>
              {audience.software.map((item) => {
                if (
                  audience.software.indexOf(item) ==
                  audience.software.length - 1
                )
                  return <>{item}</>;
                return <>{item}, </>;
              })}
            </p>
          }
        />
        <ItemOfDescriptionAudience
          title="Расписание занятий"
          children={<p>Расписание</p>}
        />
        <ItemOfDescriptionAudience
          title="Комментарии"
          children={<p>Комментарии</p>}
        />
      </div>
    </div>
  );
}
