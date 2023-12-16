import error404 from '../assets/404-removebg-preview.png'
const Error = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <img src={error404} className="w-[500px] h-[500px]" />
        </div>
    );
};

export default Error;