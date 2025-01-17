import logo from "../assets/tesla.svg";
import globe from "../assets/globe.svg";
import person from "../assets/person.svg";
import questionMark from "../assets/question-mark.svg";

function Navbar() {
  return (
    <>
        <nav className="group flex justify-between items-center p-6 bg-transparent text-white transition-all duration-1000 hover:bg-white hover:text-black">
        <img
            src={logo}
            alt="Tesla Logo"
            className="h-10 w-20 object-contain group-hover:filter"
        />

        <ol className="flex items-center justify-center space-x-6 mx-8">
            <li>
            <button className=" group-hover:text-black">
                Vehicles
            </button>
            </li>
            <li>
            <button className="group-hover:text-black">
                Energy
            </button>
            </li>
            <li>
            <button className="group-hover:text-black">
                Charging
            </button>
            </li>
            <li>
            <button className="group-hover:text-black">
                Discover
            </button>
            </li>
            <li>
            <button className="group-hover:text-black">
                Shop
            </button>
            </li>
        </ol>

        <ol className="flex items-center space-x-6">
            <li>
            <a href="#">
                <img
                src={questionMark}
                alt="Question Mark"
                className="h-6 w-6 object-contain group-hover:invert"
                />
            </a>
            </li>
            <li>
            <a href="#">
                <img
                src={globe}
                alt="Globe"
                className="h-6 w-6 object-contain group-hover:invert"
                />
            </a>
            </li>
            <li>
            <a href="#">
                <img
                src={person}
                alt="Person"
                className="h-6 w-6 object-contain group-hover:invert"
                />
            </a>
            </li>
        </ol>
        </nav>
    </>
  );
}

export default Navbar;
