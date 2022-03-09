import { useEffect } from "react"
import { Container } from "react-bootstrap"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=3b0cf48b9bf5458fa5d997949ba53907&redirect_uri=http://localhost:3000&scope=user-read-email%20user-read-private%20user-library-read%20user-top-read%20user-read-recently-played&response_type=token"

// Get Authorisation Token
const getAuthToken = (hash) => {
  const stringAfterHashtag = hash.substring(1)
  const paramsInUrl = stringAfterHashtag.split("&")
  const paramsSplitUp = paramsInUrl.reduce((accumulater, currentValue) => {
    console.log(currentValue)
    const [key, value] = currentValue.split("=")
    accumulater[key] = value
    return accumulater
  }, {})
  return paramsSplitUp
};

export default function Login() {
// Store Token in Local Storage
  useEffect(() => {
    if (window.location.hash) {
      const { access_token } =
      getAuthToken(window.location.hash)
      localStorage.clear()
      localStorage.setItem("accessToken", access_token)
    }
  });

  const handleLogin = () => {
    window.location = AUTH_URL;
  };
  
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <button className="btn btn-success btn-lg" onClick={handleLogin}>
        Login With Spotify
      </button>
    </Container>
  )
}