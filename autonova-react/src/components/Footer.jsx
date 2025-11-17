import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return(
        <footer className="bg-gray-900 text-white p-6 mt-10">
            <div className="flex justify-center space-x-6 text-2xl">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FaInstagram /></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FaTwitter /></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><FaYoutube /></a>
            </div>
            <p className="text-center mt-3">info@autonova.es</p>
            <p className="text-center text-gray-400 mt-2 text-sm">&copy; 2025 Autonova. Tots els drets reservats.</p>
        </footer>
    );
}

export default Footer;