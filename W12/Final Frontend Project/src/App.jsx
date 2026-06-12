import './App.css';
// import HomePage from "./pages/HomePage";
// import CitySelector from "./components/CitySelector";
// import MovieSearch from "./components/MovieSearch";
// import BookButtton from "./components/BookButton";
// import GenreFilter from "./components/GenreFilter";
// import LoginForm from "./components/LoginForm";
// import SearchShortcut from "./components/SearchShortcut";
import AuthStatus from "./components/AuthStatus";
import MovieLoader from "./components/MovieLoader";
import MovieResults from "./components/MovieResults";

function App() {
  return (
    <>
      {/* <CitySelector/> */}
      {/* Controlled Component */}
      {/* <MovieSearch/>
      <BookButtton/>
      <GenreFilter/>
      <LoginForm/>
      <SearchShortcut/> */}
      <AuthStatus/>
      <MovieLoader/>
      <MovieResults/>

    </>
  );
}

export default App;

