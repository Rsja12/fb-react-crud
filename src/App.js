import React, { useState, useEffect } from 'react'
import { db } from './firebase/firebase.utils';

import NoteInput from './components/NoteInput';

const App = () => {
    const [notes, setNotes] = useState([]);
    console.log(notes)

    useEffect(() => {
        const fetchData = async () => {
            const data = await db.collection('notes').get();

            // for each doc get the data that we input in firestore, plus the id
            setNotes(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        };

        fetchData();
    }, []);

    return (
        <div>
        {
            notes.map(note => (
                <NoteInput note={note} />
            ))
        }
        </div>
    )
}

export default App
