import { dataAudiences } from "../../data/dataAudiences";
import Audience, { IAudience } from "./Audience";
import Filters from "./Filters";
import React, { useState } from "react";

export default function Audiences() {
  const [audiences, setAudiences] = useState(dataAudiences);

  const [stateFilters, setStateFilters] = useState({
    lecture: false as boolean | string,
    seminar: false,
    labWork: false,
    newBuilding: false,
    oldBuilding: false,
    projector: false,
    interactiveDesc: false,
    PC: false,
    solidworks: false,
    tflexcad: false,
    floor: false as boolean | number,
    date: "",
    time: "",
    capacityFrom: false,
    capacityUpTo: false,
  });

  function handleInputChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name as "lecture";

    stateFilters[name] = value;
    setStateFilters(stateFilters);
    setFilters(stateFilters);
    console.log(stateFilters);
  }

  function setFilters(currentFilters: {}) {
    setAudiences(
      dataAudiences.filter((item) => {
        for (let prop in item.filters) {
          if (currentFilters[prop as keyof typeof currentFilters] == false) {
            continue;
          } else if (
            item.filters[prop as keyof typeof item.filters] !=
            currentFilters[prop as keyof typeof currentFilters]
          ) {
            return false;
          }
        }
        return true;
      })
    );
  }

  return (
    <main className="audiencesPage">
      <Filters handleInputChange={handleInputChange} />
      <div className="audiences">
        {audiences.map((aud) => (
          <Audience audience={aud} />
        ))}
      </div>
    </main>
  );
}
