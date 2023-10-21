// React Hooks
import React, { useEffect, useState } from "react";
// My Imports
import axios from "../../api/axios-setup";

const CategoryList = () => {
  // State Management
  const [equipmentCategories, setEquipmentCategories] = useState([]);

  useEffect(() => {
    // Fetch Product Categories
    axios
      .get("https://www.dnd5eapi.co/api/equipment-categories")
      .then((response) => setEquipmentCategories(response.data.results))
      .catch((error) =>
        console.error("Error fetching equipment categories: ", error)
      );
  }, []);

  return (
    <div className="CategoryList">
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {equipmentCategories.map((category) => (
            <a key={category.index} href={category.url}>
              {category.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
