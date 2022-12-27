import { useEffect,useState } from "react";
import NavBar from "../../components/NavBar";
import Overlay from "../../components/Overlay";
import { nanoid } from 'nanoid'
import Head from "next/head";
function Dashboard() {
    const [on, setOn] = useState(false);
    const [task, setTask] = useState({
        id: "",
        text: "",
        priority: "",
    })
    const [tasks, setTasks]= useState([])
    useEffect(() => setTask({
        id: nanoid(),
    }), [tasks])
    function Delete(id){
        const removeItem = tasks.filter(todo => {
            return todo.id !== id;
          });
          setTasks(removeItem);
    }
    return ( 
        <>
            <Head>
                <title>Inbox | Dashborad</title>
            </Head>
            <NavBar
            onClick={() =>{
                setOn(!on);
            }}
            />
            <div className="p-5">
                {on ? <Overlay Task={task} SetTask={setTask} Tasks={tasks} SetTasks={setTasks}/> : <span></span>}
            </div>
            <ul>
                {
                    tasks.map(
                        todo => (<li key={todo.id} id={todo.id} className="ml-48">
                        <span className="flex"><input type="checkbox" className="-mb-4 mr-3 accent-[#ffefd3] rounded-full w-5 transition-all"/> 
                            <h2 className="-mb-3 text-3xl text-[#5fbff9]">{todo.text}</h2> 
                        </span>
                        <button onClick={() => {
                            Delete(todo.id)
                        }}><img id="remove" src="/remove.svg" alt="" className="w-7 hover:w-10 ml-[150vh] -mb-5 transition-all rounded-2xl"/></button>  <h4 className="text-[#da3737] mt-3 ml-8">{todo.priority}</h4> 
                        
                        <hr className="w-[150vh] mt-3 text-slate-800 mb-3" />
                        </li>)
                        
                    )
                }
            </ul>
            <footer>
                {}
            </footer>

        </>
     );
};
export default Dashboard;