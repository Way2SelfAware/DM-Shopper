// React hooks
import React, { useEffect, useState } from "react";
// My Imports

const equipmentList = "https://www.dnd5eapi.co/api/equipment/";

const ProductListEquipment = () => {
  const [equipmentData, setEquipmentData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(equipmentList);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setEquipmentData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching equipmentList data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="eqipment-list">
      <h2>Product List Equipment</h2>
      {equipmentData ? (
        <ul>
          {equipmentData.results.map((equipment, index) => (
            <li key={index}>{equipment.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductListEquipment;
