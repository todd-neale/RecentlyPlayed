import React from 'react'

export default function RecentArtists( { setHeader, filterArtists, artist } ) {
  return (
    <button 
      type="button" 
      className="m-2 btn btn-outline-light btn-sm" 
      onClick={() => {
      filterArtists(artist);
      setHeader(artist)}}
    >
      {artist}
    </button>
  )
}
