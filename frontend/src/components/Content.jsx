import '../app.css'

export default function Content(props) {
    return (
        <main className="content">
            {props.children}
        </main>
    )
}