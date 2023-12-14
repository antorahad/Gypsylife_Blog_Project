import { useEffect, useState } from "react";

const Blogs = () => {
  const [categories, setCategories] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch the JSON data
    fetch('./blogdata.json') // Replace with your JSON URL
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

  const filteredBlogData = selectedCategory
    ? blogData.filter(item => item.category_name === selectedCategory)
    : blogData;

  const displayData = filteredBlogData.length > 0 ? filteredBlogData : blogData;

  return (
    <div>
      <div className="tab-buttons">
        <button className="btn" key="All" onClick={() => handleCategoryClick('')}>All</button>
        {categories.map((category, index) => (
          <button className="btn" key={index} onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>
      <h3>Selected Category: {selectedCategory || 'All'}</h3>
      <div className="blog-posts">
        {displayData.map(blog => (
          <div key={blog.id} className="blog-post">
            <h4>{blog.title}</h4>
            <p>Category: {blog.category_name}</p>
            {/* Render other blog details */}
          </div>
        ))}
        {displayData.length === 0 && <p>No data available</p>}
      </div>
    </div>
  );
};

export default Blogs;
