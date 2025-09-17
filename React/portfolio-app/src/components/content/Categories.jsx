import { useState } from "react";

export function Category({style, name, count}) {
    return (
        <button className={style}>{name}<span class="category-count">{count}</span></button>
    );
}

export function Categories() {
    const categories = [
        {"name" : "All", "count" : "8"},
        {"name" : "Front-end", "count" : "4"},
        {"name" : "Back-end", "count" : "2"},
        {"name" : "Mobile", "count" : "2"}
    ];

    const [name, setName] = useState('All');
    
    return (
        <ul className="categories">
            {categories && categories.map(category => 
                <li>
                    <Category 
                        name={category.name}    
                        count={category.count}
                        style={name === category.name ? "category  selected" : "category"}
                    />
                </li>
            )}
        </ul>
    )
}

