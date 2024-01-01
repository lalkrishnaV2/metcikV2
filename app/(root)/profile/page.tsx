// Page.js
import BasicDataLeftCard from "@/components/profile/BasicDataLeftCard";
import MainContentData from "@/components/profile/MainContentData";
import React from "react";

const Page = () => {
  const user = {
    imageUrl: "path/to/user-image.jpg",
    name: "Mahin shams",
    phone: "123-456-7890",
    email: "john@example.com",
    gender: "Male",
  };

  const profileData = {
    projects: ["Mern full stack project", "Node project"],
    experience: ["microsoft", "google"],
    education: ["MCA", "BCA"],
  };

  return (
    <section className="max-w-7xl lg:mx-auto p-1 md:px-10 xl:px-0 my-8 flex flex-col lg:flex-row gap-8 ">
      <BasicDataLeftCard {...user} />
      <MainContentData {...profileData} />
    </section>
  );
};

export default Page;
