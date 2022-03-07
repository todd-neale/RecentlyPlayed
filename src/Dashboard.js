import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import useAuth from './useAuth'
import SpotifyWebApi from 'spotify-web-api-node'
import RecentlyPlayed from "./RecentlyPlayed"
import RecentArtists from "./RecentArtists"


const spotifyApi = new SpotifyWebApi({
  clientId: "3b0cf48b9bf5458fa5d997949ba53907",
})

export default function Dashboard({ code }) {
  const accessToken = code
  const [ recentlyPlayed, setRecentlyPlayed ] = useState([])
  const [ filteredResults, setFilteredResults] = useState([])

  //Remove Duplicate Artists
  const uniqueArtists = [...new Set(recentlyPlayed.map( track => track.artist ))]

  //Remove Duplicate Songs


  //Filter the Tracks Based on Artist
  const filterArtists = (filter) => {
    setFilteredResults(filter)
      if (filter !== '') {
          const filteredData = recentlyPlayed.filter(track => track.artist === filter)
          setFilteredResults(filteredData)
      } else { setFilteredResults(recentlyPlayed) }
      return filter
  }

  //Get the last chosen filter
  useEffect(() => {
    const filter = JSON.parse(localStorage.getItem('items'));
    if (filter) {
      setFilteredResults(filter);
    }
  }, []);

  //Set the last chosen filter
  useEffect(() => {
    localStorage.setItem('filter', JSON.stringify(filteredResults));
  }, [filteredResults]);

  //Get Access Token From Spotify
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])
 
  //Get Recently Played Tracks from Spotify
  useEffect(() => {
    if (!accessToken) return
    spotifyApi.getMyRecentlyPlayedTracks({
        limit : 50
      }).then(res => {
          setRecentlyPlayed(
            res.body.items.map(track => {
              return {
                artist: track.track.artists[0].name,
                title: track.track.name,
                artistId: track.track.artists[0].id,
                albumUrl: track.track.album.images[2].url
              }
            })
          )
        }, function(err) {
          console.log('Something went wrong!', err);
    })
  }, [accessToken])

  return (
    <Container >
      <div className="mt-4 text-center"><h1>Your Latest Listens on <span className="text-success">Spotify</span></h1></div>
      <div className="row justify-content-center mt-5" > 
        <div className="col-12 col-md-3">
          <h3 className="ms-2">Filter by Artist</h3>
          <div className="mt-3 d-flex flex-column" style={{ height: "70vh", overflowY: "auto" }}>
            <button type="button" className="m-2 btn btn-outline-dark btn-sm" onClick={() => {
              filterArtists("")}}>All</button>
            {uniqueArtists.map((artist, i) => (
                <RecentArtists
                  artist={artist}
                  key={i}
                  setFilter={filterArtists}
                />
              ))}
          </div>
        </div>
        <div className="col-12 col-md-6">
          <h3>Recently Played Tracks</h3>
          <div className="my-2 mt-3 p-2 bg-light" style={{ height: "70vh", overflowY: "auto" }}>
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
  )
}
