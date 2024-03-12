
import './App.css'
import Counter from './counter';
import Team from './team';
import Users from './user';
import Friends from './friends';

function App() {

  function handleClick(){
    alert('Button Clicked')
  }

  const handleClickTwo = () =>{
    alert('Button Two CLicked');
  }

  const addToFive= (num)=>{
    alert(num + 5)
  }


  return (
    <>
    
      <h1>Vite + React</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me </button>
      <button onClick={handleClickTwo}>ClickTwo</button>
      <button onClick={()=>{alert('Thrid clicked')}}>Tirdh click</button>

      <button onClick={()=>addToFive(4)}>jkds</button>
      {/* <button onClick={addToFive(4)}>jkds</button> */}
   
    </>
  )
}

export default App
