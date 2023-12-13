import { useEffect, useState } from "react";

const Blogs = () => {
    const [categoryButtons, setCategoryButtons] = useState([])
    useEffect(() => {
        fetch('/categories.json')
        .then(res => res.json())
        .then(data => setCategoryButtons(data))
    }, [])
    return (
        <div className="px-5">
            <div className="container mx-auto py-40">
                <div className="flex items-center justify-center gap-5">
                    {
                        categoryButtons.map(categoryButton => <button className="btn bg-red-500 hover:bg-red-500 focus:bg-red-500 text-white py-3 px-5 border-none outline-none" key={categoryButton.id}>{categoryButton.category_name}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;