"use client";
import React, { useState, useEffect } from "react";

const IllustrationSelector =({ onIllustrationChange }) => {
  const [illustrations, setIllustrations] = useState([]);
  const [selectedIllustration, setSelectedIllustration] = useState("");
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchIllustrations = async () => {
      console.log("API URL being used:", `${apiUrl}/api/illustrations`); // デバッグ用
      try {
        const response = await fetch(`${apiUrl}/api/illustrations`);
        if (!response.ok) throw new Error("Failed to fetch illustrations.");
        const data = await response.json();
        setIllustrations(data.illustrations);
      } catch (error) {
        console.error(error);
      }
    };
    fetchIllustrations();
  }, [apiUrl]);


  const handleSelectionChange = (e) => {
    const newIllustration = e.target.value;
    setSelectedIllustration(newIllustration);
    if (onIllustrationChange) {
      onIllustrationChange(`${apiUrl}${newIllustration}`); // プロパティを利用して通知
    }
  };

  return (
    <div>
      <label 
        htmlFor="illustration-select" 
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        好きなイラストを1つえらぼう
      </label>
      <select
        id="illustration-select"
        value={selectedIllustration}
        onChange={handleSelectionChange}
        className="block w-full p-2 rounded-lg shadow-sm"
      >
        <option value="">---- イラスト ----</option>
        {illustrations.map((item, index) => (
          <option key={index} value={item.url}>
            {item.name}
          </option>
        ))}
      </select>
      {selectedIllustration && (
        <div className="mt-4">
          <img
            src={`${apiUrl}${selectedIllustration}`}
            alt="Selected Illustration"
            className="w-32 h-32 object-contain mx-auto rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default IllustrationSelector;
