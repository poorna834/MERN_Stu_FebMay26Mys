import React from "react";

function Welcome(props) {
    // Child Component : reusable UI
    return (
        <p>Hello, {props.name}</p>
    );
}

export function FunctionalComponentsBasics() {
    return (
        <div>
            <h2>Functional Components Basics</h2>
            {/* We are passing "Poorna" as prop. Welcome function receives it as {name: "Poorna"}*/}
            <Welcome name="Poorna" />
            {/* We are passing "Developer" as prop. Welcome function receives it as {name: "Developer"}*/}
            <Welcome name="Developer" />
        </div>
    );
}