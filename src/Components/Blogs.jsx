import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [categories, setCategories] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch the JSON data
    fetch('/blogdata.json') // Replace with your JSON URL
      .then(response => response.json())
      .then(data => {
        // Extract unique category names
        const uniqueCategories = [...new Set(data.map(item => item.category_name))];
        setCategories(uniqueCategories);
        setBlogData(data); // Set all blog data initially
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
  };

  const setButtonStyle = category => {
    if (selectedCategory === category) {
      return "btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white border-none outline-none rounded-md"; // Apply this class for the active button
    }
    return "btn bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 text-slate-950 border-none outline-none rounded-md"; // Apply this class for inactive buttons
  };

  const displayData = selectedCategory
    ? blogData.filter(item => item.category_name === selectedCategory)
    : blogData;

  return (
    <div className="py-20 px-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-3">
          <button
            className={selectedCategory === '' ? "btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white border-none outline-none rounded-md" : "btn bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 text-slate-950 border-none outline-none rounded-md"}
            onClick={() => handleCategoryClick('')}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              className={setButtonStyle(category)}
              key={index}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-10">
          {displayData.length > 0 ? (
            displayData.map(blog => (
              <div key={blog.id} className="card bg-slate-50 shadow-sm rounded-md w-full p-5">
                <div className="flex flex-col gap-3">
                  <img src={blog.image} className="rounded-md" />
                  <h4 className="text-2xl line-clamp-2 font-medium">{blog.title}</h4>
                  <span className="badge badge-neutral rounded-md p-2 flex items-center justify-center">{blog.category_name}</span>
                  <p className="text-base font-normal line-clamp-3">{blog.description}</p>
                  <Link to={`/blog/${blog.id}`}>
                    <p className="text-red-500">Read More</p>
                  </Link>
                </div>
                {/* Render other blog details */}
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
