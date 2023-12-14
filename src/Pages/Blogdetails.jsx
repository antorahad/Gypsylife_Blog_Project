import { useLoaderData, useParams, Link } from "react-router-dom";

const Blogdetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(singleDetails => singleDetails.id === idInt);

    if (!detail) {
        return <div>Loading...</div>; // Handle case when detail is not found
    }

    const { image, title, category_id, category_name, author_name, author_image, publish_date, description } = detail;

    // Filter other blog posts with the same category_name and category_id
    const relatedBlogs = details.filter(blog =>
        blog.category_id === category_id && blog.category_name === category_name && blog.id !== idInt
    );

    return (
        <div className="min-h-screen flex items-center justify-center px-5">
            <div className="container mx-auto py-20">
                <div className="space-y-6">
                    <Link to={'/'} className="text-red-500">
                        Home
                    </Link>
                    <img src={image} className="w-full" />
                    <h1 className="text-4xl font-semibold">{title}</h1>
                    <span className="badge badge-neutral rounded-md p-2 flex items-center justify-center">{category_name}</span>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                                <div className="w-8 rounded-full">
                                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <p className="text-sm font-medium text-slate-800">{author_name}</p>
                        </div>
                        <p className="text-sm font-medium text-slate-800">Published Date: {publish_date}</p>
                    </div>
                    <p className="text-justify text-base font-normal">{description}</p>
                </div>
                <div className="mt-10">
                    <div className="flex flex-col items-center justify-center gap-3 mb-10">
                        <h2 className="text-4xl font-medium">Related Blogs</h2>
                        <div className="w-[50px] h-[4px] rounded-full bg-red-500">
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        {
                            relatedBlogs.map(blog => (
                                <div key={blog.id} className="card bg-slate-50 shadow-sm rounded-md w-full p-5">
                                    <div className="flex flex-col gap-3">
                                        <img src={blog.image} className="rounded-md" />
                                        <h3 className="text-2xl line-clamp-2 font-medium">{blog.title}</h3>
                                        <span className="badge badge-neutral rounded-md p-2 flex items-center justify-center">{blog.category_name}</span>
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