// BasicDataLeftCard.tsx
import React from "react";
import {
  FaGenderless,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Import icons from FontAwesome

interface BasicDataLeftCardProps {
  imageUrl: string;
  name: string;
  phone: string;
  email: string;
  gender: string;
}

const BasicDataLeftCard: React.FC<BasicDataLeftCardProps> = ({
  imageUrl,
  name,
  phone,
  email,
  gender,
}) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md w-full md:w-96 ">
      <div className="flex flex-col items-center md:items-center">
        <img
          src="/assets/cool-profile-picture-ld8f4n1qemczkrig.jpg"
          alt="User"
          className="w-20 h-20 rounded-full mb-4 md:mb-2"
        />
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <div className="flex items-center mb-2">
          <FaGenderless className="mr-2" />
          <span>{gender}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaPhone className="mr-2" />
          <span>{phone}</span>
        </div>
        <div className="flex items-center mb-2">
          <FaEnvelope className="mr-2" />
          <span>{email}</span>
        </div>
        <hr className="my-4 border-t w-full" />
        {/* Additional data lines with icons go here */}
        <div className="flex items-center custom-font md:text-sm md:mb-1">
          <FaMapMarkerAlt className="mr-2" style={{ color: "red" }} />
          <p>chennai,india</p>
        </div>
      </div>
    </div>
  );
};

export default BasicDataLeftCard;
