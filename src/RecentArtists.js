import React from 'react'

export default function RecentArtists( { setFilter, artist } ) {

  return (
    <button 
      type="button" 
      className="m-2 btn btn-outline-dark btn-sm" 
      onClick={() => {
      setFilter(artist)}}
    >
      {artist}
    </button>
  )
}
