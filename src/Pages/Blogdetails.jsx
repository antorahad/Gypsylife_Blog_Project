import { useLoaderData, useParams, Link } from "react-router-dom";

const Blogdetails = () => {
    const details = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const detail = details.find(singleDetails => singleDetails.id === idInt);

    if (!detail) {
        return <div>Loading...</div>; // Handle case when detail is not found
    }

    const { title, category_id, category_name, author_name, author_image, publish_date, description } = detail;

    // Filter other blog posts with the same category_name and category_id
    const relatedBlogs = details.filter(blog =>
        blog.category_id === category_id && blog.category_name === category_name && blog.id !== idInt
    );

    return (
        <div className="min-h-screen flex items-center justify-center px-5">
            <div className="container mx-auto py-20">
                <h1>{title}</h1>
                <span>{category_name}</span>
                <p>{author_name}</p>
                <img src={author_image} alt={author_name} /> {/* Render author image */}
                <p>{publish_date}</p>
                <p>{description}</p>
                <div className="mt-10">
                    <h2 className="text-4xl font-semibold mb-5">Related Blogs</h2>
                    <div className="grid grid-cols-3 gap-4">
                        {
                            relatedBlogs.map(blog => (
                                <div key={blog.id} className="card bg-slate-50 shadow-sm rounded-md p-2 w-full">
                                    <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover mb-4" />
                                    <div className="card-body space-y-4">
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
