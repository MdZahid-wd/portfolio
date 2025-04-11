import React from "react";

const StatInfoCard = () => {
  return (
    <>
      <div className="flex-1  gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] rounded-[14px] p-5">
        <h4 className="text-3xl mb-2  md:text-4xl font-medium text-secondary">
          Education
        </h4>
        <h3 className="text-lg md:text-[20px] font-serif">
          Calcutta Institute of Engineering and Management
        </h3>
        <p className="text-sm mb-2 md:text-[16px] font-semibold text-black leading-6 whitespace-pre-line">
          (B.Tech- Information Technology- CGPA- 8.5)
          <br />
        </p>
        <h3 className="text-lg  md:text-[20px] font-serif">
          Calcutta Madrasah A. P. Department
        </h3>
        <p className="text-sm mb-2 md:text-[16px] font-semibold text-black leading-6 whitespace-pre-line">
          (Class 12th Science percentage- 81)
          <br />
        </p>
        <h3 className="text-lg  md:text-[20px] font-serif">
          Calcutta Madrasah A. P. Department
        </h3>
        <p className="text-sm md:text-[16px] font-semibold text-black leading-6 whitespace-pre-line">
          (Class 10th Science percentage- 80)
          <br />
        </p>
      </div>
      <div className="flex-1 gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] rounded-[14px] p-5">
        <h4 className="text-3xl mb-2 md:text-4xl font-medium text-secondary">
          Extracurricular
        </h4>
        <p className="text-sm md:text-[16px] font-serif text-black leading-6 whitespace-pre-line">
          Taught 10th to 12th class from 2022 to 2025
        </p>
      </div>
    </>
  );
};

export default StatInfoCard;
