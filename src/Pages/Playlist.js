import React from 'react'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENTID_SPOTIFY,
    clientSecret: process.env.CLIENTSECRET_SPOTIFY
});

/* spotifyApi.clientCredentialsGrant().then(
    function(data) {
      console.log('The access token expires in ' + data.body['expires_in']);
      console.log('The access token is ' + data.body['access_token']);
   
      // Save the access token so that it's used in future calls
      spotifyApi.setAccessToken(data.body['access_token']);
    },
    function(err) {
      console.log('Something went wrong when retrieving an access token', err);
    }
  ); */

function Playlist() {

    function test() {

        
        
        spotifyApi.searchTracks('Love')
  .then(function(data) {
    console.log('Search by "Love"', data.body);
  }, function(err) {
    console.error(err);
  });
    }
    return (
        <div>
            <button onClick={test}>Prova</button>
        </div>
    )
}

export default Playlist
