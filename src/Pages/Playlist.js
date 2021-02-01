import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Navbar from "../Components/Navbar"
import "./Playlist.css"

const spotifyApi = new SpotifyWebApi({
  clientId: "c735e88942e84b9aa0e287c4021b3995",
  clientSecret: "b015183f22fc409586ad62593ec7515f"
});


function Playlist(props) {
  const [playlist, setPLaylist] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", "c735e88942e84b9aa0e287c4021b3995");
    params.append("client_secret", "b015183f22fc409586ad62593ec7515f");
    axios.post("https://accounts.spotify.com/api/token", params, { auth: { username: "c735e88942e84b9aa0e287c4021b3995", password: "b015183f22fc409586ad62593ec7515f" }, header: { 'Content-Type': 'application/x-www-form-urlencoded' } })
      .then(response => {
        spotifyApi.setAccessToken(response.data.access_token);
        spotifyApi.getPlaylistTracks("0beK2LcdMn8HyXj77pL5Ux").then(response => {
          let tracks = response.body.items.map(element => {
            return {
              artist: element.track.artists[0].name,
              song: element.track.name,
              audio: element.track.preview_url,
              picture: element.track.album.images[element.track.album.images.length - 1].url
            }
          });
          setPLaylist(tracks);
        }).catch(error => {
          console.error(error);
        })
      })

  }, [])

  function handleSubmit(e){
    e.preventDefault();
    setResult([]);
    let search = e.target[0].value;
    if(search !== ""){
      spotifyApi.searchTracks(search).then(response =>{
        let tracks = response.body.tracks.items.map(element => {
          return {
            artist: element.artists[0].name,
            song: element.name,
            audio: element.preview_url,
            picture: element.album.images[element.album.images.length - 1].url,
            id: element.id,
            link: element.uri
          }
        });
        setResult(tracks);
      })
    }
    else{
      setResult([])
    }
    
  }

  function onAddSong(song){
    let request = {
      artist: song.artist,
      song: song.song,
      link: song.link
    }
    axios
    .post(process.env.REACT_APP_API_URL + "/song/new", request)
    .then((el) => {
      alert(props.match.params.lang !== "" && props.match.params.lang === "it" ? "Grazie per averci suggerito la canzone, la aggiungeremo alla playlist" : "Gracias por habernos sugerido la canción, la añadiremos a la playlist");
    });
  }

  return (
    <>
      <Navbar lang={props.match.params.lang} />
      <h2>Lista de canciones</h2>
      <p>aqui explicamos que tienen que hacer</p>
      <div className="playlist-container">
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" />
            <button>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Cerca" : "Busca"}</button>
          </form>
          {result.map((element, index) => {
            return (
              <div key={index} >
                <img src={element.picture} alt="album" />
                <span>{element.artist}</span>
                <span>{element.song}</span>
                <audio controls>
                  <source src={element.audio} />
                </audio>
                <button onClick={()=>{onAddSong(element)}}>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Aggiungi" : "Añade"}</button>
              </div>
            )
          })}
        </div>
        <div>
          {playlist.map((element, index) => {
            return (
              <div key={index} className="song">
                <img src={element.picture} alt="album" />
                <span>{element.artist}</span>
                <span>{element.song}</span>
                <audio controls>
                  <source src={element.audio} />
                </audio>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Playlist
