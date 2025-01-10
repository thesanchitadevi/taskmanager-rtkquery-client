import Logo from "@/assets/logo";
import { ModeToggle } from "../mood-toggle";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-4">
          <li>
            <Link to="/about" className="text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="text-gray-500">
              Tasks
            </Link>
          </li>
          <li>
            <Link to="/users" className="text-gray-500">
              Users
            </Link>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
