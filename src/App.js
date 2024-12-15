
import { Routes,Route,useParams, useNavigate } from "react-router-dom";

function User(){
  const {name}=useParams();
  return <h1>Profile - {name}</h1>
}
function App(){
  const navigate=useNavigate();

  return (
    <div>
      <button onClick={()=>navigate("/usre/alice")}>Alice</button>
      <button onClick={()=>navigate("/usre/bob")}>Bob</button>
      <div style={{padding:20,background:"cyan"}}>
        <Routes>
          <Route path="user/:name" element={<User />} /> 
        </Routes>
      </div>
    </div>
  );
}
export default App