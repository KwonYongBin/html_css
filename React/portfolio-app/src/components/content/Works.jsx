import { useState } from "react";

export function Works() {
    const categories = [
        {"title" : "All", "num" : "8"},
        {"title" : "Front-end", "num" : "4"},
        {"title" : "Back-end", "num" : "2"},
        {"title" : "Mobile", "num" : "2"}
    ]

    const [selected, setSelected] = useState('All');
    const handleClick = (name) => {
        setSelected(name);
    }
    
    return (
        <ul className="categories">
            {categories && categories.map(item => 
                <li>
                    <button 
                        click={handleClick}
                        className={selected === item.title ? "category  selected" : "category"}
                    >{item.title}
                        <span className="category-count">{item.num}</span>
                    </button>
                </li>
            )}
        </ul>
    )
}