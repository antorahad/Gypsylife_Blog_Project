import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isTop = window.scrollY < 100;
            setScrolled(!isTop); // Inverting the 'isTop' value to set the background on scroll
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={scrolled ? "w-full fixed px-5 bg-white shadow-sm" : "w-full fixed px-5 bg-transparent"}>
            <div className="container mx-auto py-3">
                <nav className="navbar">
                    <div className="navbar-start">
                        <Link to="/">
                            <a className={scrolled ? "text-2xl font-bold text-slate-950" : "text-2xl font-bold text-white"}>
                                <span className="text-red-500 font-lobster">Gypsy</span>Life
                            </a>
                        </Link>
                    </div>
                    <div className="navbar-end">
                        <a className="btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white px-7 py-3 rounded-md border-none outline-none">
                            Sign In
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
