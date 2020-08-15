import React, { useState } from 'react'

import { db } from '../firebase/firebase.utils';

const NoteInput = ({ note }) => {

    const [title, setTitle] = useState(note.title);

    const handleUpdate = () => {
        db.collection('notes')
        .doc(note.id)
        .set({...note, title})
    };

    const handleDelete = () => {
        db.collection('notes')
        .doc(note.id)
        .delete()
    };

    return (
        <div>
            <input value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={handleUpdate}>Update Title</button>
            <button onClick={handleDelete}>Delete Title</button>
        </div>
    )
}

export default NoteInput
