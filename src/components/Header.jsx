import LobeLogo from "../assets/images/lobe-logo.svg"


function Header() {
  return (
    <nav className="flex justify-between items-center px-20 py-4">
      <div>
        <a href="#"><img src={LobeLogo} className="w-25 h-auto" alt="lobe-logo" /></a>
      </div>

      <ul className="flex gap-8 items-center">
       <a href=""><li>Overview</li></a> 
       <a href=""><li>Examples</li></a> 
       <a href=""><li>Tour</li></a> 
       <a href=""><li>Blog</li></a> 
       <a href=""><li>Help</li></a> 
      </ul>

     <button className="bg-[#04ddb2] rounded-full text-white px-4 py-2 hover:cursor-pointer">Download</button>
    </nav>
  );
}

export default Header;
