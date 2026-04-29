// Container/Wrapper component
import React from "react";
// Children is a special React prop
// It holds nested JSX passed between component tags
// It helps create resuable wrapper/layout components
function Container({children}){
    return(
        <div className="card">
            {children}
        </div>
    );
}
// Parent Component
export function PropsChildren(){
    return(
        <>
            <container>    {/* Container here is name of child child component */}
                <h3>First Child Element In Nested Approach</h3>
            </container>
        </>
    );
}