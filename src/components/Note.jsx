import React from 'react';

const Note = ({index, noteTitle, noteDesc, func}) => {

    const deleteFunction = () => {
        func(index);
    }

    return (
        <div className="col-lg-3 col-md-3 col-sm-6 col-6 text-end note-content m-2">
            <div className="">
                <div className="note-title text-start">
                    <h4>
                        {noteTitle}
                    </h4>
                </div>
                <hr/>
                <div className="note-description text-start">
                    <p>{noteDesc}</p>
                </div>
                <button type="button" className="btn btn-outline-danger btn-lg px-3 py-2 mt-2" onClick={deleteFunction}><i class="bi bi-trash" aria-hidden="true"></i></button>
            </div>
        </div>
    )
}

export default Note;
