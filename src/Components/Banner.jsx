const Banner = () => {
    return (
        <div className="banner-bg px-5">
            <div className="flex flex-col items-center justify-center py-40">
                <h1 className="text-5xl lg:text-7xl font-semibold text-white mb-7 text-center">Welcome To <span className="text-red-500 font-lobster">Gypsy</span>life</h1>
                <p className="text-white text-2xl font-medium font-lobster italic">Travel, Explore and Share</p>
            </div>
        </div>
    );
};

export default Banner;