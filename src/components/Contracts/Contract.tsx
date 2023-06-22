export default function Contract(props: {date: string, title: string}) {
    return(
        <div className="contract">
            <p className="date">{props.date}</p>
            <p className="title">{props.title}</p>
        </div>
    )
}