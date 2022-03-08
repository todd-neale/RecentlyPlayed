import React from 'react'

export default function RecentArtists( { filterArtists, artist } ) {
  return (
    <button 
      type="button" 
      className="m-2 btn btn-outline-light btn-sm" 
      onClick={() => {
      filterArtists(artist)}}
    >
      {artist}
    </button>
  )
}
