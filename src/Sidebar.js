import React from 'react'
import RecentArtists from "./RecentArtists"
import "./App.css"

function Sidebar( { setHeader, filterArtists, uniqueArtists }) {
  return (
    <div className="Sidebar text-center">
      <div className="avatar">
        <img src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" alt="Profile"/>
      </div>
      {/* <h5>Todd</h5>         */}
      <h6 className="mt-5">Recent Artists</h6>
      <div className="artists-container mt-3 d-flex flex-column">
        <button type="button" className="m-2 btn btn-outline-light btn-sm"
        onClick={() => {
          filterArtists("")
          setHeader("")}}
        >All</button>
          {uniqueArtists.map((artist, i) => (
            <RecentArtists
              artist={artist}
              key={i}
              filterArtists={filterArtists}
              setHeader={setHeader}
            />
          ))}
      </div>
    </div>
  )
}

export default Sidebar