import React, { useState } from "react";
import './Menu.css';

const Menu = () => {
    const categories = [
        { name: "Sports", path: "/sports" },
        { name: "Science", path: "/science" },
        { name: "Entertainment", path: "/entertainment" },
        { name: "Health", path: "/health" }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`menu ${isOpen ? "open" : ""}`}>
            <button onClick={toggleMenu}>
                <i className="fas fa-bars" />
            </button>
            <ul>
                {categories.map(category => (
                    <li key={category.name}>
                        <a href={category.path}>{category.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;