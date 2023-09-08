import React from "react";
//types that may come and occur restriction on any type of  props 
type PCardProps={
    title1:string;
    content1:string;
    subContent:string;
    title2:string;
    content2:string;
}
//takes props dynamic
function PurpleCard({title1,content1,subContent,title2,content2}:PCardProps){
    return(
        <div className=" bg-indigo-600 flex flex-col items-center justify-center w-72 py-8 rounded-3xl " >
            <div className="mb-5">
                <p className="text-white/50 text-xl ">{title1}</p>
            </div>
            <div className="rounded-full w-40 h-40 flex flex-col items-center justify-center bg-indigo-700 mb-5">
            <p className="text-white text-6xl pt-2.5">{content1}</p>
            <p className="text-white/50 mt-2">{subContent}</p>
            </div>
            <div>
            <p className="text-white text-2xl mb-3">{title2}</p>
            </div>
            <div className="text-center">
                <p className="text-white/50 text-xs px-14">{content2}</p>
            </div>
        </div>
    );

}
export default PurpleCard;