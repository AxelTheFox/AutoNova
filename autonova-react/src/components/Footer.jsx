import { FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return(
        <footer className="bg-gray-900 text-white p-6 mt-10">
            <div className="flex justify-center space-x-6 text-2xl">
                <FaGithub />
                <FaInstagram />
                <FaTwitter />
                <FaYoutube />
            </div>
            <p className="text-center mt-3">alvaro@autonova.es</p>
            <p className="text-center text-gray-400 mt-2 text-sm">&copy; 2025 Autonova. Tots els drets reservats.</p>
        </footer>
    );
}

export default Footer;