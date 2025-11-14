import React from 'react';
import logo from '../assets/autonova-logoA.png';

function HeaderBar() {
    return(
        <nav className="bg-linear-to-r from-red-700 to-red-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <img src={logo} className="h-12 w-12 object-contain"/>
                <h1 className="text-2xl font-bold">AutoNova</h1>
            </div>
            <div className="flex gap-2">
                <button className="bg-white text-red-600 font-sans px-4 py-2 rounded-xl hover:bg-red-100 transition">Vendre cotxe</button>
                <button className="bg-white text-red-600 font-sans px-4 py-2 rounded-xl hover:bg-red-100 transition">Login</button>
                <button className="bg-white text-red-600 font-sans px-4 py-2 rounded-xl hover:bg-red-100 transition">Register</button>
            </div>
        </nav>
    );
};

export default HeaderBar;