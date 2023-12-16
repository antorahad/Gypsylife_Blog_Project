import Banner from "../Components/Banner";
import Blogs from "../Components/Blogs";
import { Helmet } from 'react-helmet-async'
const Home = () => {
    return (
        <div>
            <Helmet>
                <title>GypsyLife | Home Page</title>
            </Helmet>
            <Banner/>
            <Blogs/>
        </div>
    );
};

export default Home;