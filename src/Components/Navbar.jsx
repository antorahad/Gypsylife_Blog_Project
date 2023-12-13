import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            if (isTop !== scrolled) {
                setScrolled(isTop);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const navbarStyle = {
        backgroundColor: scrolled ? 'transparent' : 'white',
        transition: 'background-color 0.3s ease-in-out',
    };

    return (
        <div className="w-full fixed px-5" style={navbarStyle}>
            <div className="container mx-auto py-3">
                <div className="navbar">
                    <div className="navbar-start">
                        <Link to="/">
                            <a className={scrolled ? "text-2xl font-bold text-white" : "text-2xl font-bold text-slate-950"}>
                                <span className="text-red-500 font-lobster">Gypsy</span>Life
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white px-7 py-3 rounded-md border-none outline-none">
                            Sign In
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;