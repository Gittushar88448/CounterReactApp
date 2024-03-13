import "./App.css";

function App() {
  return (
    // Wrapper class

    <div className="w-[100vw] h-[100vh] bg-[#344151] flex flex-col justify-center items-center gap-10">

       <div className="text-[#0398d4] font-medium text-2xl">Increment&Decrement</div>

       <div className="flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">

        <button className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>

        <div className="font-bold gap-12 text-5xl"></div>

        <button className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>

       </div>

        <button className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>

    </div>
  );
}

export default App;
