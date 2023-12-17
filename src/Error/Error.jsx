import { Link } from 'react-router-dom';
import error404 from '../assets/No-data.jpg'
import { Helmet } from 'react-helmet-async'
const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center gap-3 justify-center">
            <Helmet>
                <title>404 | Error Page</title>
            </Helmet>
            <div>
                <img src={error404} className="w-[300px] h-[300px]" />
            </div>
            <p className='text-slate-800 font-poppins font-medium'>Sorry! This page is not Found.</p>
            <Link to={'/'}>
                <a className='text-green-500 underline'>Return To Home</a>
            </Link>
        </div>
    );
};

export default Error;