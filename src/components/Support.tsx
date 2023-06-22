import { useState } from "react"
import paperClipImg from "../images/paperclip.png"
import sendMessageImg from "../images/sendMessage.png"
import fileImg from "../images/file.png"
import supportImg from "../images/customerSupport.png"
import searchImg from "../images/magnifierBlue.png"
import fileSentImg from "../images/fileSent.png"

export default function Support() {
    const [selectedFiles, setSelectedFiles] = useState([] as string[])
    const [textMessage, setTextMessage] = useState('')

    function handlerChangeInputFile(event: React.FormEvent) {
        let fileInput = event.target as HTMLFormElement
        let files : string[] = [];
        for(let file of fileInput.files) {
            files.push(file.name)
        }
        setSelectedFiles(files)
    }

    function handlerChangeTextMessage(event: React.FormEvent) {
        let textInput = event.target as HTMLInputElement
        let text = textInput.value
        setTextMessage(text) 
    }

    function handlerSubmit(event: React.FormEvent) {
        event.preventDefault()
        if(!textMessage){
            alert("Пустое сообщение!")
            return;
        }
        let containerMessages = document.querySelector('.messages')
        let message = document.createElement('p')
        if(selectedFiles.length != 0) {
            message.innerHTML = `<p>${textMessage}</p>
            <div style="display:flex; margin-top: 10px;">
                <img src=${fileSentImg} style="align-self: start"></img>
                <p style="font-weight: bold; align-self: end">${selectedFiles.join('<br />')}</p>
            </div>`
        } else {
            message.innerHTML = `<p>${textMessage}</p>`
        }
   
        message.className = 'messageFromMe'
        containerMessages?.append(message)
        let textInput = document.querySelector('.messageAndSelectedFiles input') as HTMLInputElement
        textInput.value = ''
        setTextMessage('')
        setSelectedFiles([])
    }

    return(
        <main className="support">
            <div className="headerChat">
                <div className="iconAndTitle">
                    <img src={supportImg} alt="" />
                    <p>Поддержка</p>
                </div>
                <img src={searchImg} alt="" />
            </div>
            <div className="messages"></div>
            <form action="">
                <label htmlFor="fileSupportMessage"><img src={paperClipImg} alt="Прикрепить файл" /></label>
                <input multiple type="file" id="fileSupportMessage" onChange={handlerChangeInputFile}/>
                <div className="messageAndSelectedFiles">
                    <input type="text" placeholder="Напишите сообщение..." onChange={handlerChangeTextMessage}/>
                    <div className="selectedFiles">{selectedFiles.map((file)=><p key={file}><img src={fileImg} alt="" />{file}</p>)}</div> 
                </div>
                <button className="sendMessageBtn" type="submit" onClick={handlerSubmit}><img src={sendMessageImg} alt="" /></button>
            </form>
            
        </main>
    )
}