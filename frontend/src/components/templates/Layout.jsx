import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Content from './Content'


export default function Layout(props) {

    return (
        <div className={`flex h-full w-full`}>
            <Sidebar />
            <div className={`
                flex flex-col 
                w-full h-full p-7
                bg-gray-400 dark:bg-gray-800
            `}>
                <Topbar title={props.title} subtitle={props.subtitle} />
                <Content>
                    {props.children}
                </Content>
            </div>
        </div>
    )
}