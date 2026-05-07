// Synthetic Event VS Native DOM Events
// Synthetic Events : A wrapper created by react around the browser's native event handler
// Gives consistent API across browsers
// Works similarly to native DOM events
// Still allows access to the original browser events via event.nativeEvent

// Why does react use it?
// To make event handling behave consistently
// To Simplify cross-browser differences 
// To integrate smoothly with React's event system

// How Synthetic event works:
// Component renders: A button appears on the screen
// handleClick is defined but it is not executed

// User Clicks the button
// Browser creates a native click event
// React wraps that native event in a syntheticEvent
// React passes the syntheticEvent to handleClicks

// Event refers to the SyntheticEvent
// event.target gives us the HTML elements

