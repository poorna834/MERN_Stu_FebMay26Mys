import {NavLink} from "react-router-dom";
export default function NavBar(){
    return(
        <nav style={styles.nav}>
            <h3>BookMyShow App</h3>
            <div style={styles.links}>
                <NavLink to="/" end style={getNavStyle}>
                    Home
                </NavLink>
                <NavLink to="/movies" style={getNavStyle}>
                    Movies
                </NavLink>
                <NavLink to="/login" end style={getNavStyle}>
                    Login
                </NavLink>
                <NavLink to="/signup" end style={getNavStyle}>
                    Signup
                </NavLink>
                <NavLink to="/bookings" end style={getNavStyle}>
                    Bookings
                </NavLink>
                <NavLink to="/dashboard" end style={getNavStyle}>
                    Dashboard
                </NavLink>
            </div>
        </nav>
    );
}
function getNavStyle({isActive}){
    return{
        textDecoration: "none",
        color: isActive ? "#d32f2f":"#333",
        fontWeight: isActive ? "bold":"normal",
        borderBottom: isActive ? "2px solid #d32f2f":"none",
    };
}
const styles = {
    nav: {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"15px 25px",
        borderBottom: "1px solid #ddd",
        marginBottom: "20px"
    },
    links: {
        display:"flex",
        gap:"20px"
    }
};
