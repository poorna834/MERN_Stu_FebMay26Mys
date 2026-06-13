// Error boundaries prevent the entire app from crashing when a child component
// fails / throws an error during rendering
// fallback UI 
import React from "react";
class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(){
        return{
            hasError: true
        };
    }

    componentDidCatch(error,errorInfo){
        console.error("Error boundary caught an error");
        console.error("Component stack: ",errorInfo);
    }
    
render(){
    // Fallback UI
    if(this.state.hasError){
        return(
            <section style={styles.container}>
                <h2>Something went wrong</h2>

            </section>
        );
    }
    return this.props.children;
}
}
export default ErrorBoundary;

const style = {
    container:{
        border :"1px solid #e57373",
        padding:"20px",
        borderRadius:"6px"
    }
};