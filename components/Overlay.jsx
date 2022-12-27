import { useState, useEffect } from "react";

function Overlay({Task, SetTask, Tasks, SetTasks}) {
    // const [priority, setPriority] = useState('');
    // const [text, setText] = useState('');
    // useEffect(() => SetTasks(prev => [
    //     ...prev,
    //     Task
    // ]), [Task])
    return ( 
        <div className="bg-[#040e16] p-10 rounded-3xl">
            <input type="text" className="bg-[#0d1821] mr-3 w-[30rem] h-10 text-lg rounded-lg p-2" value={Task.text} onChange={e => SetTask({
                ...Task,
                text: e.target.value
            })}/>
            <button className="bg-[#0d1821] p-2 w-16 rounded-lg hover:bg-[#3b42a4] transition-all" onClick={() => {
                SetTasks(() => [
                    ...Tasks,
                    Task
            ])}}>Add</button><br />
            <p>Priority: {Task.priority}</p> <br />
            <button onClick={() => SetTask({
                ...Task,
                priority:'high'
            })}><img src="/hi-priority.png" alt="" className="w-12 hover:bg-[#3b42a4] mr-5 transition-all rounded-2xl"/></button>
            <button onClick={() => SetTask({
                ...Task,
                priority:'medium'
            })}><img src="/md-priority.png" alt="" className="w-12 hover:bg-[#3b42a4] mr-5 transition-all rounded-2xl"/></button>
            <button onClick={() => SetTask({
                ...Task,
                priority:'low'
            })}><img src="/lo-priority.png" alt="" className="w-12 hover:bg-[#3b42a4] mr-5 transition-all rounded-2xl"/></button>
        </div>
     );
}

export default Overlay;