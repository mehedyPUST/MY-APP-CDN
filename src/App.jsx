import { useState } from 'react'
import ShowHide from './ShowHide';
import ShowHide1 from './ShowHide1';

function App() {


  const [count, setCount] = useState(0);
  const handleIncreas1 = () => {
    const updateCount = count + 1;
    setCount(updateCount);
  }
  const handledecrease1 = () => {
    const updateCount = count - 1;
    setCount(updateCount);
  }
  const handledeReset = () => {

    const updateCount = count - count;
    setCount(updateCount);
  }




  return (
    <>

      <div className='space-y-3 mx-auto mt-5'>

        <h2 className='bg-green-500 text-white p-2 rounded-md font-bold'>Count: {count} </h2>

        <div className='flex gap-4  text-center'>
          <button onClick={handleIncreas1} className='btn btn-outline'>Click Me +1</button>
          <button onClick={handledecrease1} className='btn btn-outline'>Click Me -1</button>
          <button onClick={handledeReset} className='btn btn-primary'>Reset</button>
        </div>

      </div>

      <ShowHide></ShowHide>
      <ShowHide1></ShowHide1>



    </>



  )
}

export default App