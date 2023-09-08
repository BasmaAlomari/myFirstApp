import React from "react";
import Image from "next/image";
type WCardProps={
    p:string;
    ico1: string;
    p11:string;
    p12:string;
    ico2:string;
    p21:string;
    p22:string;
    ico3:string;
    p31:string;
    p32:string;
    ico4:string;
    p41:string;
    p42:string;
    button:string;
}
function WhiteCard({p,ico1,p11,p12,ico2,p21,p22,ico3,p31,p32,ico4,p41,p42,button}:WCardProps){
    return(
        <div className=" bg-white flex flex-col  w-78 py-8 rounded-3xl  " >
            
            <div className="ml-5 text-lg font-semibold">
                <p>{p}</p>
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center text-rose-500 rounded-xl mx-8 my-4 bg-red-100 h-10">
                <div className="ml-3" >
                    <Image src={ico1} alt="Icon 1" width={20} height={20} />
                </div>
                <div className="flex-1 pl-2">
                    
                    <p>{p11}</p>
                </div>
                <div className=" flex-1 pr-6 text-right">
                    <p>{p12}</p>
                </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row items-center  text-yellow-400 rounded-xl mx-8 mb-4 bg-amber-50 h-10">
                <div className="ml-3" >
                    <Image src={ico2} alt="Icon 2" width={20} height={20} />
                </div>
                <div className="flex-1 pl-2">
                    <p>{p21}</p>
                    
                </div>
                <div className="flex-1 pr-6 text-right">
                    <p>{p22}</p>
                </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row  items-center text-emerald-500 rounded-xl mx-8 mb-4 bg-teal-50 h-10">
                <div className="ml-3" >
                    <Image src={ico3} alt="Icon 3" width={20} height={20} />
                </div>
                <div className="flex-1 pl-2">
                    <p>{p31}</p>
                </div>
                <div className="flex-1 pr-6 text-right">
                    <p>{p32}</p>
                </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-row  items-center text-indigo-600 rounded-xl mx-8 mb-6 bg-indigo-200 h-10">
                <div className="ml-3" >
                    <Image src={ico4} alt="Icon 4" width={20} height={20} />
                </div>
                <div className="flex-1 pl-2">
                    <p>{p41}</p>
                </div>
                <div className="flex-1 pr-6 text-right">
                    <p>{p42}</p>
                </div>
                </div>
            </div>
            <div className="ml-6 text-center bg-indigo-600 hover:bg-blue-900 text-white font-bold  mb-1  py-2 px-4 rounded-full w-60">
            <button >{button}</button>
            </div>

        </div>
    );
}
export default WhiteCard; 