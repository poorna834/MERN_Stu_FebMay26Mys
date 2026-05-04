// Event Handling With State

import { useState } from "react";

export function EventHandlingState() {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleClick = () => {
        alert(`Hello, ${name || 'Guest'}`);
    };

    return (
        <>
            <h2>Event Handling with state</h2>
            <input 
                type="text" 
                value={name} 
                onChange={handleChange} 
                placeholder="Enter your name" 
            />
            <button onClick={handleClick}>Greet User</button>
            <p>Current input: {name}</p>
        </>
    );
}