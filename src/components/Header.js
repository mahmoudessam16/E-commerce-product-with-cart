import logo from "../images/logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import avatar from "../images/image-avatar.png";
import menu from '../images/icon-menu.svg';
import close from "../images/icon-close.svg";
import Cart from "./Cart";
import { useState } from "react";

function Header({ cartNum, onClick }) {
    const [isOpen, setIsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <header className="flex items-center justify-between p-8 border-b border-slate-400 max-w-7xl mx-auto relative">
                <div className="flex items-center justify-start gap-4">
                    <img src={menu} alt="Menu-Icon" className="cursor-pointer md:hidden" onClick={() => setIsOpen(true)} />
                    <img src={logo} alt="logo" className="w-28 lg:w-full" />
                    <nav className={`mobile ${isOpen ? 'open' : 'close'}`}>
                        <img src={close} alt="close" className="mb-6 cursor-pointer size-4" onClick={() => setIsOpen(false)} />
                        <ul className="">
                            <li className="cursor-pointer">Collections</li>
                            <li className="cursor-pointer">Men</li>
                            <li className="cursor-pointer">Women</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    </nav>
                    <nav className="hidden md:block ml-8">
                        <ul className="flex items-start justify-between gap-8 text-slate-400 font-normal">
                            <li className="cursor-pointer">Collections</li>
                            <li className="cursor-pointer">Men</li>
                            <li className="cursor-pointer">Women</li>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Contact</li>
                        </ul>
                    </nav>
                </div>
    
                <div>
                    <ul className="flex items-center gap-4">
                        <li>
                            <button onClick={() => setCartOpen(!cartOpen)} className="relative">
                                <AiOutlineShoppingCart className="text-2xl text-slate-600" />
                                {cartNum > 0 && <span className="absolute bg-orange-500 text-white 
                                                w-6 h-auto -top-2 -right-2 rounded-xl text-xs
                                                flex items-center justify-center">{cartNum}</span>}
                            </button>
                        </li>
                        <li>
                            <img src={avatar} alt="" className="w-12 transition-all rounded-full 
                                                                border-4 border-white hover:border-orange-300 
                                                                cursor-pointer" />
                        </li>
                    </ul>
                </div>
                <div className={`${cartOpen ? 'absolute' : 'hidden'} cart absolute right-0 top-full lg:w-1/3 z-50 mt-5 lg:mt-0`}>
                    <Cart counter={cartNum} onClick={onClick} />
                </div>
            </header>
        </>
        )
}


export default Header