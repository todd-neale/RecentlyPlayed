import React from 'react'

export default function RecentlyPlayed({ track }) {
  return (
    <div
      className="d-flex m-2 align-items-center"
      style={{ cursor: "pointer" }}
    >
      <img src={track.albumUrl} alt={track.title} style={{ height: "64px", width: "64px" }} />
      <div className="ms-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}
