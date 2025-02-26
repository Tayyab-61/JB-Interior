"use client"
import Image from "next/image";
import { MainSidebar } from "./Component/MainSidebar";
import { DashboardContent } from "./Component/DashboardContent";

export default function Home() {
  return (
  <>
  <div className="bg-white flex">

 
   <MainSidebar/>
   <DashboardContent/>
    
    </div>
  </>

  );
}
