import { useEffect, useState } from "react";

const Blogs = () => {
    const [categoryButtons, setCategoryButtons] = useState([]);
    const [activeCategory, setActiveCategory] = useState(''); // State to track active category

    useEffect(() => {
        // Fetching the categories data from the correct path
        fetch('/categories.json') // Adjust the path if needed based on your project setup
            .then(res => res.json())
            .then(data => {
                setCategoryButtons(data);
                // Set the first category as active by default
                if (data.length > 0) {
                    setActiveCategory(data[0].id);
                }
            })
            .catch(error => console.error("Error fetching data:", error)); // Add error handling if required
    }, []);

    const handleCategoryClick = (id) => {
        // Set the active category when a button is clicked
        setActiveCategory(id);
        // Handle click or any action for category buttons
        // You can add functionality here if you want to handle category clicks
    };

    return (
        <div className="px-5">
            <div className="container mx-auto py-40">
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-5">
                    {
                        categoryButtons.map(categoryButton => (
                            <button
                                className={activeCategory === categoryButton.id ? 'btn bg-red-500 hover:bg-red-500 focus:bg-red-500 py-3 px-5 border-none outline-none text-white' : 'btn bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 text-slate-950 py-3 px-5 border-none outline-none'}
                                onClick={() => handleCategoryClick(categoryButton.id)}
                                key={categoryButton.id}
                            >
                                {categoryButton.category_name}
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;
