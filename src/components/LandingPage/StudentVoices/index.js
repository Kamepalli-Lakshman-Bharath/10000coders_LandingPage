"use client";
import React, { useState } from "react";
import { studentVoiceData } from "./studentVoiceData.json";
import Image from "next/image";
import { FaPlay } from "react-icons/fa6";
import styles from "./StudentVoices.module.css";
import { league_spartan, poppins } from "@/shared/styles/font";
import StudentVideo from "@/components/Modals/StudentVideo";

const StudentVoices = () => {
  const [activeStdVoice, setactiveStdVoice] = useState(0);
  const [studentVideoCode, setStudentVideoCode] = useState("");
  const handleSetStudentModal = (e, code = "") => setStudentVideoCode(code);

  const handleActiveStdVoice = (e = {}, idx = "") => {
    setactiveStdVoice(idx);
  };

  const StudentVoiceCard = ({ data, id }) => {
    const { href } = data;
    return (
      <div
        onClick={(e) => {
          handleActiveStdVoice(e, Number(id) - 1);
          handleSetStudentModal(e, href);
        }}
        className="group relative mx-auto h-[70.18px] w-[124.76px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[7.51px] transition-all duration-500 sm:h-[140.36px] sm:w-[249.52px] sm:rounded-[15.03px] md:mx-0 md:h-[128.29px] md:w-[228.07px] lg:h-[174.56px] lg:w-[310.33px]"
      >
        <Image
          quality={100}
          fill={true}
          src={`/student_voices/image${id}.${id == 3 ? "jpg" : "png"}`}
          alt={`image${id}`}
        />
        <FaPlay
          color="white"
          className="transiton-all absolute left-1/2 top-1/2 size-[15.67px] -translate-x-1/2 -translate-y-1/2 opacity-0 duration-500 group-hover:opacity-100 md:size-[28.65px]"
        />
      </div>
    );
  };
  return (
    <main
      id="reviews"
      className={`relative mx-auto flex w-[320px] flex-col gap-[20px] overflow-hidden pb-[26px] sm:w-[640px] sm:gap-[42px] md:w-[768px] md:gap-[24px] lg:w-[1024px] lg:gap-[33px]`}
    >
      <h1
        className={`${league_spartan.className} mx-auto mt-[30px] w-fit text-[18px] font-medium leading-[21.92px] text-carretRed sm:mt-[60px] sm:text-[32px] sm:leading-[43.84px] md:text-[24px] md:font-bold md:leading-[32.88px] lg:mt-[25px] lg:text-[32px] lg:leading-[43.84px]`}
      >
        What are our students saying?
      </h1>
      <p
        className={`${league_spartan.className} mx-auto w-[273px] flex-shrink-0 text-center text-[13px] font-medium leading-[17.81px] sm:w-auto sm:text-[26px] sm:leading-[35.62px] md:text-[16px] md:leading-[21.92px] lg:text-[22px] lg:leading-[30.14px]`}
      >
        Student Voices: Candid Video Reviews on Institute Experience and
        Curriculum
      </p>
      <div className="flex flex-col gap-[20px] sm:gap-[40px] md:hidden">
        <div className="group relative mx-auto h-[147.12px] w-[261.55px] flex-shrink-0 overflow-hidden rounded-[15.75px] sm:h-[294.24px] sm:w-[523.09px] sm:rounded-[31.5px]">
          <Image
            fill
            src={`/student_voices/image${activeStdVoice + 1}.jpg`}
            alt={`image${activeStdVoice + 1}`}
          />
          <FaPlay
            color="white"
            className="transiton-all absolute left-1/2 top-1/2 size-[32.85px] -translate-x-1/2 -translate-y-1/2 opacity-0 duration-500 group-hover:opacity-100"
          />
        </div>
        <div className="hide-scrollbar ml-[11px] flex w-full gap-[12px] gap-y-5 overflow-auto pr-[20.88px]">
          {studentVoiceData.map((item, idx) => (
            <StudentVoiceCard data={item} id={idx + 1} key={idx} />
          ))}
        </div>
      </div>
      <div className="mx-auto hidden flex-wrap justify-center gap-[25.89px] md:flex lg:gap-[35.23px]">
        {studentVoiceData.map((item, idx) => (
          <StudentVoiceCard
            handleActiveStdVoice={handleActiveStdVoice}
            data={item}
            id={idx + 1}
            key={idx}
          />
        ))}
      </div>
      <StudentVideo
        isModal={studentVideoCode.length > 0}
        handleModal={handleSetStudentModal}
        code={studentVideoCode}
      />
    </main>
  );
};

export default StudentVoices;
