import FilterCheckbox from "./filterCheckbox";
import React, { useState } from "react";

export default function Filters({
  handleInputChange,
}: {
  handleInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="filters">
      <FilterCheckbox
        filter={{
          title: "Вид занятий",
          items: [
            { title: "Лекция", nameForm: "lecture" },
            { title: "Семинар", nameForm: "seminar" },
            { title: "Лабораторная работа", nameForm: "labWork" },
          ],
        }}
        handlerChange={handleInputChange}
      />
      <FilterCheckbox
        filter={{
          title: "Корпус",
          items: [
            { title: "Новый", nameForm: "newBuilding" },
            { title: "Старый", nameForm: "oldBuilding" },
          ],
        }}
        handlerChange={handleInputChange}
      />
      <div className="filter">
        <p>
          <b>Этаж</b>
        </p>
        <input
          type="number"
          min="0"
          max="8"
          name="floor"
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="filter">
        <p>
          <b>Дата и время</b>
        </p>
        <input type="date" name="date" onChange={handleInputChange} />
        <input type="time" name="time" onChange={handleInputChange} />
      </div>
      <FilterCheckbox
        filter={{
          title: "Оборудование",
          items: [
            { title: "Проектор", nameForm: "projector" },
            { title: "Интерактивная доска", nameForm: "interactiveDesc" },
            { title: "ПК", nameForm: "PC" },
          ],
        }}
        handlerChange={handleInputChange}
      />
      <FilterCheckbox
        filter={{
          title: "Установленное ПО",
          items: [
            { title: "SolidWorks", nameForm: "solidworks" },
            { title: "T-FLEX CAD", nameForm: "tflexcad" },
          ],
        }}
        handlerChange={handleInputChange}
      />
      <div className="filter">
        <p>
          <b>Количество мест</b>
        </p>
        <input
          type="number"
          placeholder="от"
          name="capacityFrom"
          onChange={handleInputChange}
          style={{ width: "30%", marginRight: "1%" }}
        />
        <input
          type="number"
          placeholder="до"
          name="capacityUpTo"
          onChange={handleInputChange}
          style={{ width: "30%" }}
        />
      </div>
      <div style={{ width: "100%", textAlign: "center" }}>
        <button>Применить</button>
      </div>
    </div>
  );
}
