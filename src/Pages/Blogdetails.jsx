import { useLoaderData, useParams, Link } from "react-router-dom";
import { BsCalendar2Date } from "react-icons/bs";
import { FaBookmark } from "react-icons/fa";
import { Helmet } from 'react-helmet-async'
const Blogdetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(singleDetails => singleDetails.id === idInt);


    const { image, title, category_id, category_name, author_name, publish_date, description } = detail;

    // Filter other blog posts with the same category_name and category_id
    const relatedBlogs = details.filter(blog =>
        blog.category_id === category_id && blog.category_name === category_name && blog.id !== idInt
    );

    return (
        <div>
            <Helmet>
                <title>GypsyLife | Blog Details Page</title>
            </Helmet>
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 w-full min-h-[50vh] flex flex-col gap-5 items-center justify-center">
                <h1 className="text-white text-4xl font-bold pt-10">
                    Blog Details
                </h1>
                <Link to={'/'}>
                    <a className="text-red-500">Return To Home</a>
                </Link>
            </div>
            <div className="container mx-auto px-5 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
                    <div className="w-full lg:w-1/2 relative">
                        <img src={image} className="w-full h-[400px] object-cover" />
                        <div className="bg-slate-900 bg-opacity-50 w-full h-16 absolute bottom-0 flex items-center justify-between px-5">
                            <div className="flex items-center gap-3">
                                <div className="avatar-group -space-x-3 rtl:space-x-reverse">
                                    <div className="avatar">
                                        <div className="w-5">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-5">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-5">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="w-5">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-white text-xs font-medium">120+ Views</p>
                            </div>
                            <div>
                                <button className="btn bg-transparent hover:bg-transparent focus:bg-transparent text-white border-none outline-none">Read Later <FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-5">
                        <h1 className="text-3xl font-medium leading-normal">{title}</h1>
                        <span className="flex items-center justify-center badge badge-neutral rounded-md p-3 text-sm font-medium text-white">{category_name}</span>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="w-8 rounded-full">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    </div>
                                </div>
                                <p className="text-sm font-semibold text-slate-700">{author_name}</p>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700">
                                <BsCalendar2Date size={20}></BsCalendar2Date>
                                <p className="text-sm font-semibold">{publish_date}</p>
                            </div>
                        </div>
                        <p className="text-justify text-base leading-normal font-normal">{description}</p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col items-center justify-center gap-2 mb-10">
                        <h2 className="text-4xl font-medium">Related Blogs</h2>
                        <div className="w-[50px] h-[4px] rounded-full bg-red-500">
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {
                            relatedBlogs.map(blog => (
                                <div key={blog.id} className="card bg-slate-50 shadow-sm rounded-md w-full p-5">
                                    <div className="flex flex-col gap-3">
                                        <img src={blog.image} className="w-full h-[200px] object-cover rounded-md" />
                                        <h3 className="text-2xl line-clamp-2 font-medium">{blog.title}</h3>
                                        <span className="badge badge-neutral rounded-md p-3 flex items-center justify-center text-xs">{blog.category_name}</span>
                                        <p className="text-base font-normal line-clamp-3">{blog.description}</p>
                                        <Link to={`/blog/${blog.id}`}>
                                            <p className="text-red-500">Read More</p>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogdetails;