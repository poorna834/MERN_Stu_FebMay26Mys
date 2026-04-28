import React from "react";
// List rendering 
const users = [
    {id:1, role: "Student"},
    {id:2, role: "Trainer"},
    {id:3, role: "Admin"},
    {id:4, role: "Developer"}
];

export function FunctionComp(){
    return(
        <div>
            <h2>Functional Component.</h2>
            {/* List Rendering */}
            {users.map((user)=>(
                <p key={user.id}>
                    {user.role}
                </p>
            ))}
        </div>
    );
}