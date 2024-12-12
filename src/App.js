import { useRef, useState } from "react"

function Item(props){
  return <li>{props.name} ,${props.price}</li>
}


function AddForm(props){

  const nameRef=useRef();
  const priceRef=useRef();


  return (
    <form onSubmit={e=>{
      e.preventDefault();
      props.add(
        nameRef.current.value,
        priceRef.current.value
      );
      nameRef.current.value="";
      priceRef.current.value="";
    }}>

      <input type="text" ref={nameRef} /> <br />
      <input type="number" ref={priceRef} /> <br />
      <button type="submit">Add</button>
    </form>
  );
}
function App()
{
  const [data,setData]=useState([
    {id:1,name:"orange",price:0.2},
    {id:2,name:"Apple",price:0.8}
  ]);

  const add=(name,price)=>{

    const id=data.length+1; 

    setData([
      ...data,
      {id,name,price}
    ])


  }
 
  return (
    <divL>
      <h1>Hello World</h1>
      <ul>
        {data.map(i=><Item name={i.name} price={i.price} />)}
      </ul>
      <AddForm add={add} />
    </divL>
  )
}

export default App