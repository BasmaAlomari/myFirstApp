import PurpleCard from "@/components/purpleCard";
import WhiteCard from "@/components/whiteCard";
import React from "react";

export default function Home() {
    return (
      <div className="grid lg:grid-cols-2 ">
          <div className="z-50 -mb-6">
            <PurpleCard
              title1="Your Result"
              content1="76"
              subContent="of 100"
              title2="Great"
              content2="You scored higher than 65% of the people who have taken these tests."
            />
          </div>
          <div className="lg:-ml-2 ">
            <WhiteCard
              p="Summary"
              ico1="icons/icon-reaction.svg"
              p11="Reaction"
              p12="80/100"
              ico2="icons/icon-memory.svg"
              p21="Memory"
              p22="91/100"
              ico3="icons/icon-verbal.svg"
              p31="Verbal"
              p32="61/100"
              ico4="icons/icon-visual.svg"
              p41="Visual"
              p42="71/100"
              button="Continue"
  
            />
          </div>
        </div>
      
    );
  }