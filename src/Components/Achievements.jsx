import React from "react";
import CircularCard from "./CircularCard";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-purple-900 py-12">
      
      <h1 className="text-5xl py-8 md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-center mb-0">
        GSOC Contributors
      </h1>

      
      <div className="flex justify-center gap-8 px-6 mb-8">
        <CircularCard
          image="https://i.ibb.co/jJyjcvZ/Kshitij-Shah-photoaidcom-cropped.png"
          name="Kshitij Shah"
          organization="Sugarlabs"
          link="https://github.com/kshitijdshah99/Pippy_Activity"
        />
        <CircularCard
          image="https://i.ibb.co/Z6fgX5F/IMG-20231110-003535-01-01-photoaidcom-cropped.png"
          name="Vedant Mehra"
          organization="CERN"
          link="https://hepsoftwarefoundation.org/gsoc/blogs/2024/blog_SOFIE_VedantMehra.html"
        />
        <CircularCard
          image="https://i.ibb.co/Sm9FtJ2/1714656497995-photoaidcom-cropped.png"
          name="Mayank Palan"
          organization="Red Hen Lab"
          link="https://medium.com/@mayankpalan066/gsoc24-with-red-hen-lab-modeling-wayfinding-cfb0131b71d1"
        />
        <CircularCard
          image="https://i.ibb.co/C640S72/Scanned-20240502-1627-1-page-0001-photoaidcom-cropped.png"
          name="Sharan Poojari"
          organization="NumFOCUS"
          link="https://github.com/aiidateam/aiida-explorer/blob/gsoc/gsoc/README.md"
        />
      </div>

      
      <div className="flex justify-center gap-8 px-6">
        <CircularCard
          image="https://i.ibb.co/T4D9vMh/IMG-20240502-172654-photoaidcom-cropped.png"
          name="Warren Jacinto"
          organization="Open Astronomy"
          link="https://deadspheroid.github.io/my-blog/"
        />
        <CircularCard
          image="https://i.ibb.co/t3vy9D9/IMG-20240502-WA0043-2-photoaidcom-cropped.png"
          name="Tvisha Vedant"
          organization="INCF"
          link="https://tvilight4.github.io/MyBlog/"
        />
        <CircularCard
          image="https://i.ibb.co/9WSz3ss/photo-photoaidcom-cropped.png"
          name="Raya Chakravarthy"
          organization="INCF"
          link="https://raya679.github.io/gsoc/"
        />
      </div>
    </div>
  );
};

export default Achievements;
