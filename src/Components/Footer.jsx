import { FaFacebook, FaInstagram, FaTwitter, FaRedditAlien } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-slate-900 to-slate-800">
            <footer className="container mx-auto p-5 flex flex-col lg:flex-row items-center justify-between gap-5">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-2xl font-bold text-white">
                        <span className="text-red-500 font-lobster">Gypsy</span>Life
                    </h1>
                    <p className="text-white text-xs font-light">Travel, Explore and Share</p>
                </div>
                <div>
                    <p className="text-white text-xs font-light">Copyright © 2023 - All right reserved by GypsyLife.</p>
                </div>
                <div className="flex items-center justify-center gap-5 text-white">
                    <Link>
                        <FaFacebook size={20}></FaFacebook>
                    </Link>
                    <Link>
                        <FaInstagram size={20}></FaInstagram>
                    </Link>
                    <Link>
                        <FaTwitter size={20}></FaTwitter>
                    </Link>
                    <Link>
                        <FaRedditAlien size={20}></FaRedditAlien>
                    </Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;