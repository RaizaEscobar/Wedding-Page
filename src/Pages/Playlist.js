import axios from 'axios';
import React, { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Navbar from "../Components/Navbar"
import "./Playlist.css"

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENTID_SPOTIFY,
  clientSecret: process.env.CLIENTSECRET_SPOTIFY
});


function Playlist(props) {
  const [playlist, setPLaylist] = useState([]);
  const [result, setResult] = useState([]);

  useEffect(() => {
    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");
    params.append("client_id", process.env.CLIENTID_SPOTIFY);
    params.append("client_secret", process.env.CLIENTSECRET_SPOTIFY);
    let header = {
       "auth": { 
        "username": "c735e88942e84b9aa0e287c4021b3995", 
        "password": "b015183f22fc409586ad62593ec7515f" 
      }, 
      header: { 'Content-Type': 'application/x-www-form-urlencoded' } 
    }
    console.log(header)
    axios.post("https://accounts.spotify.com/api/token", params, header)
      .then(response => {
        spotifyApi.setAccessToken(response.data.access_token);
        spotifyApi.getPlaylistTracks("2EQlxTqFC2jOS04BVmLGgA").then(response => {
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
      <h2>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Lista di canzoni per la festa!" : "Lista de canciones para la fiesta!"}</h2>
      <p>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Abbiamo bisogno del vostro aiuto per riempire la playlist della festa!! L'unica cosa che dovete fare è pensare a quelle canzoni che vi fanno ballare, cercarle e cliccare su 'aggiungi' per aggiungerle alla lista" : "Necesitamos vuestra ayuda para llenar la playList de la fiesta!! Lo único que teneis que hacer es pensar en aquellas canciones que os hacen bailar, buscarlas y darle al boton de añadir para que se agregen a la lista"}</p>
      <div className="playlist-container">
        <div>
          <form className="search"  onSubmit={handleSubmit}>
            <input type="search"  placeholder={props.match.params.lang !== "" && props.match.params.lang === "it" ? "Cerca" : "Busca"}/>
            <button>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Cerca" : "Busca"}</button>
          </form>
          {result.map((element, index) => {
            return (
              <div className="song-search" key={index} >
                <img src={element.picture} alt="album" />
                <span style={{width:"10%"}}>{element.artist}</span>
                <span>{element.song}</span>
                <audio controls controlsList="nodownload">
                  <source src={element.audio} />
                </audio>
                 <button onClick={()=>{onAddSong(element)}}>{props.match.params.lang !== "" && props.match.params.lang === "it" ? "Aggiungi" : "Añade"}</button>
              </div>
            )
          })}
        </div>
        <div className="list">
          {playlist.map((element, index) => {
            return (
              <div key={index} className="song">
                <img src={element.picture} alt="album" />
                <span>{element.artist}</span>
                <span>{element.song}</span>
                <audio controls controlsList="nodownload">
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
