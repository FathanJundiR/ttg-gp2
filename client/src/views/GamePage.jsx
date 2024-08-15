import { useState } from "react";
import burger from "../assets/burger.gif"

export default function GamePage(){
  
  return (
    <>
      <div className="w-full h-screen bg-slate white flex justify-center fixed">
        <div className="w-4/5 h-4/5 bg-slate-500 mt-5 border border-2 border-slate-200 rounded-3xl flex">
          <div className="w-[30%] h-full bg-slate-300 rounded-xl"></div>
          <div className="w-[70%] h-full bg-slate-700">
            <div className="w-full h-[10%] bg-yellow-100"></div>
            <div className="w-full h-[80%] relative bg-slate-500 overflow-hidden">
  <img className="absolute inset-0 w-full h-full object-contain z-10" src={burger} alt="Burger" />
  <div className="absolute inset-0 w-full h-full bg-slate-200 bg-opacity-20 z-20 grid grid-cols-3 grid-rows-3 gap-0">
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full"  onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
  <div className="border border-black">
    <div className="bg-slate-300 w-full h-full" onClick={(e) => (e.target.style.display = 'none')}> </div>
  </div>
 
</div>
</div>

            <div className="w-full h-[10%] bg-slate-100 flex justify-center px-4 py-3">
              <input
                type="email"
                className="border-l border-t border-b border-gray-200 rounded-l-md w-[80%] text-base md:text-lg px-3 py-2"
                placeholder="Enter Your Answer Here"
              />
              <button className="bg-orange-500 hover:bg-orange-600 hover:border-orange-600 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-orange-500">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
