// Updating Objects And Arrays
import { useState } from "react";

export function UpdatingObjectsArraysState() {
    // user state
    const [user , setUser] = useState ({
        name: "Poorna",
        skill: "React"
    });

    const updatSkill = () => {
        setUser({
            ...user, // Copies All Existing Properties.
            skill: "Advanced React"
        });
    };
    return(
        <>
            <h2>Updating Objects State</h2>
            <p>{user.name} - {user.skill}</p>
            <button onClick={updatSkill}>Update Skill</button>
        </>
    )
}