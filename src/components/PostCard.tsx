import React from 'react'
import { useState } from 'react'
export default function PostCard() {
    const [name, setName] = useState('No name');

    const showName = () => {
        if (name === 'No name') {
            setName('Saleh');
        } else {
            setName('No name');
        }

    }
    return (
        <div>
            <button onClick={showName}>Click</button>
            <p>{name}</p>
        </div>
    );
}
