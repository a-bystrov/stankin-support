import { dataContracts } from "../../data/dataContracts";
import Contract from "./Contract";
import { useState } from "react";
import CreateContractPage from "./CreateContractPage";

export default function Contracts() {
  const [form, setForm] = useState(false);
  const [dataContractsCurrent, setDataContractsCurrent] =
    useState(dataContracts);
  const [stateInputs, setStateInputs] = useState({
    date: "",
    title: "",
    theme: "",
    main: "",
  });

  function handlerSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (stateInputs.title && stateInputs.theme && stateInputs.main) {
      setForm(!form);
      let dataCont = dataContractsCurrent;

      let dateObj = new Date();
      let month = String(dateObj.getMonth() + 1).padStart(2, "0");
      let day = String(dateObj.getDate()).padStart(2, "0");
      let year = dateObj.getFullYear();
      let date = day + "." + month + "." + year;
      stateInputs.date = date;

      dataCont.push(stateInputs);
      setDataContractsCurrent(dataCont);
      clearStateInputs();
    } else alert("Заполните необходимые поля!");
  }

  function clearStateInputs() {
    setStateInputs({
      date: "",
      title: "",
      theme: "",
      main: "",
    });
  }

  function handlerChangeInput(event: React.FormEvent) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const name = target.name as "date";

    stateInputs[name] = value;
    setStateInputs(stateInputs);
  }

  return (
    <>
      {!form && (
        <>
          <div className="contracts">
            <button
              onClick={() => {
                setForm(!form);
              }}
            >
              Создать заявку
            </button>
            {dataContractsCurrent.map((contract) => {
              return <Contract date={contract.date} title={contract.title} />;
            })}
          </div>
        </>
      )}
      {form && (
        <CreateContractPage
          handlerChangeInput={handlerChangeInput}
          handlerSubmit={handlerSubmit}
          handlerBackButton={() => {
            setForm(!form);
            clearStateInputs();
          }}
        />
      )}
    </>
  );
}
