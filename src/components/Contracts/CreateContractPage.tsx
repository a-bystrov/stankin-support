import { useLinkClickHandler } from "react-router-dom";

export default function CreateContractPage(props: { handlerSubmit: (event: React.FormEvent)=>void, handlerChangeInput: (event: React.FormEvent)=>void, handlerBackButton: (event: React.FormEvent)=>void }) {
    return(
        <form className="contractForm">
            <h1>Новая заявка</h1>
            <input required type="text" placeholder="Название (видите только вы)" className="textInput" onChange={props.handlerChangeInput} name='title' />
            <input required type="text" placeholder="Тема обращения" className="textInput" onChange={props.handlerChangeInput} name='theme'/>
            <textarea required placeholder="Текст" className="textInput mainTextContract" onChange={props.handlerChangeInput} name="main"/>
            <input type="file" id="fileInput"/><button type="submit" onClick={props.handlerSubmit}>Создать</button><p className="backToContracts" onClick={props.handlerBackButton}>Назад к заявкам</p>
        </form>
    )
}