import React from "react";
import { CiLocationOn } from "react-icons/ci";

const locations = [
  "24B, Near Kapoor's Cafe, Bhopal",
  "45A, MG Road, Indore",
  "15C, Park Street, Kolkata",
  "18D, Connaught Place, Delhi",
  "89E, Marine Drive, Mumbai",
  "12F, Brigade Road, Bangalore",
];

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  return (
    <div className="p-6 bg-gradient-to-b from-gray-50 to-gray-200 rounded-lg shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-4">
        Select a Location
      </h2>
      <div className="space-y-3">
        {locations.map((location, index) => (
          <div
            onClick={() => {
              setVehiclePanel(true);
              setPanelOpen(false);
            }}
            key={index}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md hover:border-gray-300 border border-gray-200 transition-all duration-200"
          >
            <div className="flex items-center justify-center bg-gray-100 text-blue-500 h-12 w-12 rounded-full">
              <CiLocationOn size={24} />
            </div>
            <h4 className="text-lg font-medium text-gray-800">{location}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearchPanel;
