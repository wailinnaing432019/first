
import { Link,Routes,Route } from "react-router-dom";

const users = [
  { id: 1, name: 'Alice', gender: 'f' },
  { id: 2, name: 'Bob', gender: 'm' },
  { id: 3, name: 'Tom', gender: 'm' },
  { id: 4, name: 'Mary', gender: 'f' },
];

function Male(props){
  return (
    <ul>
      {users.filter(u=> u.gender==='m').map(u=><li key={u.id}>{u.name}</li>)}
    </ul>
  )
}

function Female(props){
  return (
    <ul>
      {users.filter(u=> u.gender==='f').map(u=><li key={u.id}>{u.name}</li>)}
    </ul>
  )
}
function App(){
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <ul>
        <li><Link to="Male">Male</Link></li>
        <li><Link to="Female">Female</Link></li>
      </ul>
      <div>
      <Routes>
        <Route path="/male" element={<Male />}></Route>
        <Route path="/female" element={<Female />}></Route>
      </Routes>
      </div>
    </div>
  );
}
export default App