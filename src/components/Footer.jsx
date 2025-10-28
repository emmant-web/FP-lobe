import LobeLogo from "../assets/images/lobe-logo.svg";
import { Badge } from "lucide-react";

function Footer() {

  return (
    <>
    <div className="border-t-2 border-gray-300 w-[80rem] mx-auto"></div>
      <footer className="flex flex-col justify-start mx-[2rem] items-start gap-6 md:mx-[0rem] md:flex md:flex-row md:items-start md:justify-center md:gap-8 md:px-10 md:py-10 lg:px-40">
    
        <div className="flex flex-col gap-4 mt-6 w-2xs md:justify-center">
            <img src={LobeLogo} alt="lobe-logo" className="w-20 h-auto" />
            <p>A product by Microsoft.</p>
            <p>All rights reserved.</p>
            <p>© Microsoft 2021</p>
        </div>

        <div className="flex flex-col gap-4 md:w-md md:flex md:flex-row lg:w-lg">  
            <div className="flex flex-col gap-4 mt-6 w-2xs md:w-40">
            <p className="font-bold">About</p>
            <a href=""><p>Download</p></a>
            <a href=""><p>Overview</p></a>
            <a href=""><p>Examples</p></a>
            <a href=""><p>Blog</p></a>
        </div>
        <div className="flex flex-col gap-4 mt-6 w-2xs md:w-40">
            <p className="font-bold">General</p>
            <a href=""><p>Notice</p></a>
            <a href=""><p>License</p></a>
            <a href=""><p>Press Inquiry</p></a>
            <a href=""><p>Press Images</p></a>
        </div>
        <div className="flex flex-col gap-4 mt-6 w-2xs md:w-40">
            <p className="font-bold">Resources</p>
            <a href=""><p>Help</p></a>
            <a href=""><p>Tour</p></a>
            <a href=""><p>Contact</p></a>
            <a href=""><p>Privacy</p></a>
        </div>
</div>

      

        <div className="flex gap-4 mt-6 w-2xs md:w-40">
            <a href="rounded-full bg-[#04ddb2]"><Badge /></a>
            <a href="rounded-full bg-[#04ddb2]"><Badge /></a>
            <a href="rounded-full bg-[#04ddb2]"><Badge /></a>
        </div>
      </footer>
    </>
  )
}

export default Footer
