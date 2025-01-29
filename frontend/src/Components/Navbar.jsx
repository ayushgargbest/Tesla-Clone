import logo from "../assets/tesla.svg";
import globe from "../assets/globe.svg";
import person from "../assets/person.svg";
import questionMark from "../assets/question-mark.svg";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 bg-transparent text-white z-50 transition-all duration-500 hover:bg-white hover:text-black">
      <img
        src={logo}
        alt="Tesla Logo"
        className="h-10 w-20 object-contain group-hover:filter"
      />

      <ol className="flex items-center justify-center space-x-6 mx-8">
        <li><button className="">Vehicles</button></li>
        <li><button className="">Energy</button></li>
        <li><button className="">Charging</button></li>
        <li><button className="">Discover</button></li>
        <li><button className="">Shop</button></li>
      </ol>

      <ol className="flex items-center space-x-6">
        <li>
          <a href="#"><img src={questionMark} alt="Help" className="h-6 w-6 object-contain group-hover:invert" /></a>
        </li>
        <li>
          <a href="#"><img src={globe} alt="Language" className="h-6 w-6 object-contain group-hover:invert" /></a>
        </li>
        <li>
          <a href="/signin"><img src={person} alt="Account" className="h-6 w-6 object-contain group-hover:invert" /></a>
        </li>
      </ol>
    </nav>
  );
}
export default Navbar;
