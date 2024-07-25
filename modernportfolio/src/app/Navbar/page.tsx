import './navbar.css'

import { MdOutlineHome } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { RiRobot3Fill } from "react-icons/ri";
import { VscFeedback } from "react-icons/vsc";

import logo from "../../../public/asssets/logo.png"

function Navbar() {
  return (
    <div className='main_content'>
        <div className='left'>
            <div className="logo">
                Portfolio
            </div>
        </div>

        <div className='right'>
            <div className="nav_eles">
                <div className='nav_ele'><MdOutlineHome size={30}/></div>
                <div className='nav_ele'><RiRobot3Fill size={30}/></div>
                <div className='nav_ele'><SlLike size={25}/></div>
                <div className='nav_ele'><VscFeedback size={25}/></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar