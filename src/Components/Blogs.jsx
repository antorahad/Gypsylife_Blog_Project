import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import error404 from '../assets/404-removebg-preview.png'
const Blogs = () => {
  const [categories, setCategories] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 6;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  useEffect(() => {
    fetch('/blogdata.json')
      .then(response => response.json())
      .then(data => {
        const uniqueCategories = [...new Set(data.map(item => item.category_name))];
        setCategories(uniqueCategories);
        setBlogData(data);
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  }, []);

  const handleCategoryClick = category => {
    setSelectedCategory(category);
    setDisplayCount(initialDisplayCount);
    setShowAll(false);
  };

  const setButtonStyle = category => {
    if (selectedCategory === category) {
      return "btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white border-none outline-none rounded-md";
    }
    return "btn bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 text-slate-950 border-none outline-none rounded-md";
  };

  const handleLoadMoreClick = () => {
    setShowAll(true);
  };

  const handleShowLessClick = () => {
    setShowAll(false);
    setDisplayCount(initialDisplayCount);
  };

  let displayData = selectedCategory
    ? blogData.filter(item => item.category_name === selectedCategory)
    : blogData;

  displayData = showAll ? displayData : displayData.slice(0, displayCount);

  return (
    <div className="py-20 px-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-3">
          {displayData.length > 0 && (
            <button
              className={
                selectedCategory === ""
                  ? "btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white border-none outline-none rounded-md"
                  : "btn bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 text-slate-950 border-none outline-none rounded-md"
              }
              onClick={() => handleCategoryClick("")}
            >
              All
            </button>
          )}
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
        {displayData.length === 0 && (
          <div className="flex items-center justify-center min-h-screen mt-5">
            <img
              src={error404}
              alt="No data available"
              className="w-[400px] h-[400px] object-cover rounded-md"
            />
          </div>
        )}
        {displayData.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5 mt-10">
            {displayData.map(blog => (
              <div key={blog.id} className="card bg-slate-50 shadow-sm rounded-md w-full p-5">
                <div className="flex flex-col gap-3">
                  <img src={blog.image} alt={blog.title} className="w-full h-[200px] object-cover rounded-md" />
                  <h4 className="text-2xl line-clamp-2 font-medium">{blog.title}</h4>
                  <span className="badge badge-neutral rounded-md p-3 flex items-center justify-center text-xs">{blog.category_name}</span>
                  <p className="text-base font-normal line-clamp-3">{blog.description}</p>
                  <Link to={`/blog/${blog.id}`}>
                    <p className="text-red-500">Read More</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedCategory === "" && displayData.length > 0 && (
          <div className="flex justify-center mt-7">
            {showAll ? (
              <button
                className="btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white border-none outline-none rounded-md"
                onClick={handleShowLessClick}
              >
                Show Less
              </button>
            ) : (
              <button
                className="btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white border-none outline-none rounded-md"
                onClick={handleLoadMoreClick}
              >
                Load More
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
