import React from "react";

export class ClassComponentsBasics extends Component{
    // 1. Class extends React.Component
    // State, lifecycle methods , props , setstate()

    render(){
        //render(): returns JSX describing what to show
        // Called whenever component needs to update
        return(
            <>
            <h2>Class Components</h2>
            <p>Class Components use regular() and support lifecycle methods.</p>
            </>
        )
    }
}