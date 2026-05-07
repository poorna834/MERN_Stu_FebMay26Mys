// Basic events in react
// What is an Event?
// An action triggered by the user (mouse,keyboard,DOM).
// React uses camelCase attributes like onClick , onChange.
// React passes an event object (SyntheticEvent) to the handler

export function EventBasics(){
    // Declaring a event handler function
    const handleClick = () => alert=("Clicked");

    return(
        <section>
            <h2>Basic Events</h2>
            {/* Event Binding */}
            <button>
                Click Me
            </button>
        </section>
    )
}