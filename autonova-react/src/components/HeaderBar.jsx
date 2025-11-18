import React from 'react';
import logo from '../assets/autonova-logoA.png';
import {Link, NavLink} from 'react-router-dom';

function HeaderBar() {
    return(
        <nav className="bg-linear-to-r from-red-700 to-red-500 text-white p-4 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
                <img src={logo} alt="AutoNova Logo" className="h-12 w-12 object-contain" />
                <h1 className="text-2xl font-bold">AutoNova</h1>
            </Link>
            <div className="flex gap-2">
                <Link to="/"><button className="bg-white text-red-600 font-sans px-4 py-2 rounded-xl hover:bg-red-100 transition">Inici</button></Link>
                <Link to="/SellPage"><button className="bg-white text-red-600 font-sans px-4 py-2 rounded-xl hover:bg-red-100 transition">Vendre cotxe</button></Link>
                <Link to="/LoginPage"><button className="bg-white text-red-600 font-sans px-4 py-2 rounded-xl hover:bg-red-100 transition">Iniciar sessió</button></Link>
                <Link to="/RegisterPage"><button className="bg-white text-red-600 font-sans px-4 py-2 rounded-xl hover:bg-red-100 transition">Registrar-se</button></Link>
            </div>
        </nav>
    );
};

export default HeaderBar;