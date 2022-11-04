import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import Footer from "./components/Footer";

export const API_KEY = "8adbaf5b";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #1c0070;
  color: #fff;
  padding: 10px;
  font-size: 25px;
  font-weight: 900;
  box-shadow: 0 3px 6px #555;
  justify-content: space-between;
  align-items: center;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  background-color: #fff;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: #fff;
  align-items: center;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const SearchInput = styled.input`
  color: #000;
  font-size: 16px;
  font-weight: 900;
  border: 0;
  outline: none;
  margin-left: 15px;
  width: 100%;
  &::placeholder{
    color: #d9d9d9;
  }
`;
const MovieListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  padding: 30px;
  justify-content: space-evenly;
`;
const Placeholder=styled.img`
width: 120px;
height: 120px;
margin: 150px;
margin-top: 250px;
opacity: 50%;
`
function App() {
  const [searchQ, setSearchQ] = useState("");
  const [timeOut, setTimedOut] = useState();
  const [movieShow, setMovieShow] = useState([]);
  const [oneMovie, setOneMovie] = useState();

  const fetchData = async (searchString) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?&s=${searchString}}&apikey=${API_KEY}`
    );
    setMovieShow(response.data.Search);
  };
  const typeText = (e) => {
    clearTimeout(timeOut);
    setSearchQ(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimedOut(timeout);
  };
  return (
    <>
    <Container>
      <Header>
        <AppName>
          <MovieImage src="./topIcon.png" />
          Movie Info<a href="#offcanvasBottom" data-bs-toggle="offcanvas"><i className="bi bi-link-45deg"></i></a>
        </AppName>
        <SearchBox>
          <SearchIcon src="https://img.icons8.com/sf-regular/48/000000/search.png" />
          <SearchInput
            type="search"
            value={searchQ}
            onChange={typeText}
            placeholder="search movies/tv shows"
          />
        </SearchBox>
        
      </Header>
      {oneMovie && <MovieDetail oneMovie={oneMovie} setOneMovie={setOneMovie}/>}
      <MovieListContainer>
        {movieShow?.length
          ? movieShow.map((movie, index) => (
              <MovieList key={index} movie={movie} setOneMovie={setOneMovie} />
            ))
          : <Placeholder src="./frontIcon.gif"/>}
      </MovieListContainer>
    </Container>
<Footer/>
    </>
  );
}

export default App;
