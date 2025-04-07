import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <body className='w-[1620px] px-0 py-0 pt-0 pb-0 h-screen duration-200' style={{ backgroundColor: color }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' >
            <button
              onClick={() => setColor("red")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("white")}
              className='border-2 px-4 py-1 rounded-full text-black shadow-lg'
              style={{ backgroundColor: "white" }}
            >
              White
            </button>
            <button
              onClick={() => setColor("green")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("yellow")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("grey")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "grey" }}
            >
              Grey
            </button>
            <button
              onClick={() => setColor("black")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "black" }}
            >
              Black
            </button>
            <button
              onClick={() => setColor("orange")}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
