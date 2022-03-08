import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import Dashboard from "./Dashboard"


const code = localStorage.getItem('accessToken');

function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App
