import Image from "next/image";
import Child from "@/components/child";
 

export default function Home() {
  return (
    <div className="flex w-screen">
      <div className="w-screen text-xl text-gray-700 font-bold">
      <h1 className="text-center w-screen py-10 text-3xl">Freinds Details</h1>


      
  <div className="flex m-10 justify-between px-10 bg-slate-300">
     <Child name="Ahmed" age={20} favDish="Biryani" className="bg-red-400"/>
     <Child name="Hussain" age={21} favDish="Haleem"/>
     <Child name="Hammad" age={22} favDish="Beef Pulao"/>
  </div>
  <div className="flex m-10 justify-between px-10 bg-red-200">
     <Child name="Talha" age={23} favDish="Haleem"/>
     <Child name="Hamza" age={21} favDish="Biryani"/>
     <Child name="Hasan" age={21}  favDish="Haleem"/>
 </div>
     </div>
    </div>
  );
}
