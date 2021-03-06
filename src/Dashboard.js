import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'
import RecentlyPlayed from "./RecentlyPlayed"
import Sidebar from "./Sidebar"
import "./App.css"

const spotifyApi = new SpotifyWebApi({
  clientId: "3b0cf48b9bf5458fa5d997949ba53907",
})

export default function Dashboard({ code }) {
  const accessToken = code
  const [ recentlyPlayed, setRecentlyPlayed ] = useState([])
  const [ filteredResults, setFilteredResults] = useState([])

  //Return unique array of Artists
  const uniqueArtists = [...new Set(recentlyPlayed.map( track => track.artist ))]

  //Filter the Tracks Based on Artist
  const filterArtists = (filter) => {
    setFilteredResults(filter)
      if (filter !== '') {
          const filteredData = recentlyPlayed.filter(track => track.artist === filter)
          setFilteredResults(filteredData)
      } else { setFilteredResults(recentlyPlayed) }
  }
  
  //Set the Header
  const setHeader = (artist) => {
    if (artist) {
      document.getElementById('header').innerHTML = `Recently Played Tracks <span class="fs-5 text-muted">by ${artist}</span>`
    } else document.getElementById('header').innerHTML = "Recently Played Tracks"
  }

  // Set the last chosen filter
  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filteredResults));
  }, [filteredResults]);

  // Get the last chosen filter
  useEffect(() => {
    const songs = JSON.parse(localStorage.getItem('filter'));
    if (songs) {
      setRecentlyPlayed(songs);
    }
  }, []);

  // Set filtered artists upon render  
  useEffect(() => {
    filterArtists("")
  }, [recentlyPlayed])

  //Get Access Token From Spotify
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])
 
  //Get Recently Played Tracks from Spotify
  useEffect(() => {
    spotifyApi.getMyRecentlyPlayedTracks({
        limit : 50
      }).then(res => {
          setRecentlyPlayed(
            res.body.items.map(track => {
              return {
                artist: track.track.artists[0].name,
                title: track.track.name,
                trackId: track.track.id,
                artistId: track.track.artists[0].id,
                albumUrl: track.track.album.images[2].url
              }
            })
          )
        },
      )
  }, [])

  return (
    <div className="App">
      <Sidebar uniqueArtists={uniqueArtists} filterArtists={filterArtists} setHeader={setHeader}/> 
      <Container className="dashboard">
        <div className="mt-5 text-center"><h1>Your Latest Listens on <span className="text-success">Spotify</span></h1></div>
        <div className="row justify-content-center mt-5" > 
          <div className="col-12 col-md-10">
            <h3 id="header">Recently Played Tracks</h3>
            <div className="recently-played-container my-2 mt-3 p-2 bg-light">
              {filteredResults.map((track, i) => (
                  <RecentlyPlayed
                    track={track}
                    key={i}
                  />
                  ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
