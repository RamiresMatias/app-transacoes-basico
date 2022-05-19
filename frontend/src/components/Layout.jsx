import Header from "./Header"
import Sidebar from "./Sidebar"
import Content from "./Content"
import '../app.css'


export default function Layout(props) {
    return (
        <div className="layout">
           <Header />
           <Sidebar />
           <Content>
                {props.children}
           </Content> 
        </div>
    )
}