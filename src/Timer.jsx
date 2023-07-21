import React from "react";
// import Modal from "./Modal";
import Alltask from "./components/Alltask";
import Modal from 'react-modal';

const Timer = () => { 
    const [time, settime] = React.useState(0);
    const [isrunning, setisrunning] = React.useState(false);
    const [isModalOpen, setisModalOpen] = React.useState(false);
    const [title, setTitle] = React.useState("");
    const [description, setdescription] = React.useState("");
    const [tasks, settask] = React.useState([{
        id: 100,
        title: "code",
        description: "build time tracking app",
        timing:4
    }]);
    function reset() { 
        settime(0);
        setisrunning(false);
    }
    function clock() { 
        setisrunning((prevState) => !prevState);
    }
    function openModal() { 
        setisrunning(false);
        setisModalOpen(true);        
    }
    function CloseModal() { 
        setisModalOpen(false);
    }
    function Savetask(title, description) {
        const timing = time;
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      timing,
    };
        settask((prevState) => [...prevState, newTask]);
        console.log(tasks);
        CloseModal();
     }
    React.useEffect(() => {
        let intervalid;
        if (isrunning) { 
            intervalid = setInterval(() => {
                settime((prevState) => prevState + 1);
            }, 1000);
        }
         return () => {
      clearInterval(intervalid);
    };
    }, [isrunning]);
    return (
        <>
            <h1>
                Timer 
            </h1>
            <h2>{Time(time)}</h2>
            <br/>
            <button disabled={isrunning} onClick={clock}>Start</button>
            &nbsp;&nbsp;
            <button disabled={!isrunning} onClick={clock}>Stop</button>
            &nbsp;&nbsp;
            <button onClick={reset}>Reset</button>
            <br />
            <br/><br/>
            <button onClick={openModal}>Save</button>
            
            <Modal
        isOpen={isModalOpen}
        onRequestClose={CloseModal}       
      >
                <button onClick={CloseModal}>Close</button>
                 &nbsp;&nbsp;
                <button >All Task</button>
                
        <div id="root">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
                    />
                    <br />
                    <br />
         <textarea
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <div >
                        <button onClick={ CloseModal}>Cancel</button>
                        &nbsp;&nbsp;
                        
                        <button onClick={ Savetask}>Save</button>
          </div>
                </div>
            </Modal>
            
                <Alltask tasks={tasks}/>

            
        </>
    )
}

function Time(time) { 
    const hours = Math.floor(time / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}
export default Timer;