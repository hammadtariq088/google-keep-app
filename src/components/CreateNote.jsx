import React, { useState } from 'react';
import Note from "./Note";


const CreateNote = () => {

    const [notedata, setNoteData] = useState(
    {
        title: '',
        desc: ''
    });

    const [data, setData] = useState([]);

    const [show, setShow] = useState(false);

    const eventFunction = (e) => 
    {
        // console.log(e);
        const {name, value} = e.target;
        // console.log(name, value);

        setNoteData((preVal)=>
        {
            return{
                ...preVal,
                [name]:value
            }

        })
    }

    const getData = () => 
    {
        if(notedata.title === "" && notedata.desc === ""){
            alert("Please enter the Note Title & Note Desc");
        }

        else if(notedata.title !== "" && notedata.desc === ""){
            alert("Please enter the Note Desc");
        }

        else if(notedata.title === "" && notedata.desc !== ""){
            alert("Please enter the Note Title");
        }

        else{
        setData((preVal)=>
        {
            return[...preVal, notedata]

        });

        setNoteData(
        {
            title: '',
            desc: ''
        });

        }

       

    }

    const deleteNote = (id) => {
        // console.log(id);
        const message = window.confirm('Are you sure you want to delete?');

        if(message){
            const finalData = data.filter((val, index) => 
            {
                return index !== id ;
            })

            setData(finalData);
            return;
        }
        else{
            return null;
        }
          
 
    }

   

    return (
        <>
            <div className="create-note-section">
                <div className="container">
                  <form onSubmit={(e)=> e.preventDefault}>
                    <div className="mx-auto d-block w-50" onClick={()=> setShow(true)}>
                        <input type="text" className="form-control py-2 input-field" name="title" placeholder="Add Note title..." value={notedata.title} onChange={eventFunction}/>
                    </div>
                    {
                        show ? (
                        <div className="mx-auto d-block w-50 text-end" onDoubleClick={()=> setShow(false)}>
                            <textarea className="form-control input-text-area" rows="5" name="desc" value={notedata.desc} placeholder="Add Note description here..." onChange={eventFunction}></textarea>
                            <button type="button" className="btn btn-outline-info btn-lg px-4 py-2 mt-2" onClick={getData}><i class="bi bi-plus-circle" aria-hidden="true"></i></button>
                        </div>
                        ) : null
                    }
                  </form> 
                </div>
            </div>
            
  

            <div className="note-section">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    {
                        data.map((val, index) =>
                        {
                            return <Note key={index} index={index} noteTitle={val.title} noteDesc={val.desc} func={deleteNote} />

                        })
                    } 
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default CreateNote;
