import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { API_KEY } from "../App";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 30px;
  justify-content: center;
  border-bottom: 1px solid lightgray;
`;
const CoverImage = styled.img`
  object-fit: cover;
  height: 352px;
  border-radius: 10px;
`;
const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const MovieName = styled.span`
  font-size: 22px;
  font-weight: 600;
  color: #000;
  margin: 15px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-transform: capitalize;
`;
const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  overflow: hidden;
  margin: 4px 0;
  text-transform: capitalize;
  text-overflow: ellipsis;
  & span {
    opacity: 0.5;
  }
`;
const Close = styled.span`
  font-size: 25px;
  font-weight: 600;
  color: #000;
  height: fit-content;
  border-radius: 50%;
  cursor: pointer;
  opacity: .8;
`;
const Loading=styled.img`
  width: 40px;
  height: 40px;
`;

const MovieDetail = (props) => {
  const [MovieInformation, setMovieInformation] = useState();
  const { oneMovie } = props;
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?i=${oneMovie}&apikey=${API_KEY}`)
      .then((response) => {
        setMovieInformation(response.data);
      });
  }, [oneMovie]);
  return (
    <Container>
      {MovieInformation?
      <>
        <CoverImage src={MovieInformation?.Poster} />
      <InfoColumn>
        <MovieName>
          {MovieInformation?.Type}: {MovieInformation?.Title}
        </MovieName>
        <MovieInfo>
          IMDB Rating: <span>{MovieInformation?.imdbRating}</span>
        </MovieInfo>
        <MovieInfo>
        IMDB Votes: <span>{MovieInformation?.imdbVotes}</span>
        </MovieInfo>
        <MovieInfo>
          Language: <span>{MovieInformation?.Language}</span>
        </MovieInfo>
        <MovieInfo>
          Rated: <span>{MovieInformation?.Rated}</span>
        </MovieInfo>
        <MovieInfo>
          Released: <span>{MovieInformation?.Released}</span>
        </MovieInfo>
        <MovieInfo>
          Genre: <span>{MovieInformation?.Genre}</span>
        </MovieInfo>
        <MovieInfo>
          Director: <span>{MovieInformation?.Director}</span>
        </MovieInfo>
        <MovieInfo>
          Actors: <span>{MovieInformation?.Actors}</span>
        </MovieInfo>
        <MovieInfo>
          Plot: <span>{MovieInformation?.Plot}</span>
        </MovieInfo>
      </InfoColumn>
      <Close onClick={()=>props.setOneMovie()}>x</Close>
      </>:<Loading src="./loading.gif"></Loading>}
     
    </Container>
  );
};

export default MovieDetail;
