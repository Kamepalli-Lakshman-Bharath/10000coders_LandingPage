"use client";
import dynamic from "next/dynamic";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DummyModal = dynamic(() => import("./DummyModal"));

const StudentVideo = ({ isModal, handleModal, code }) => {
  return (
    <DummyModal isModal={isModal} handleModal={handleModal}>
      <div className="relative h-[70vh] w-[300px] border border-black sm:w-[350px] md:h-[80vh] md:w-[600px] lg:w-[750px]">
        <div
          onClick={handleModal}
          className="fill-red absolute right-2 top-2 z-10 size-10 cursor-pointer rounded-lg bg-slate-400 p-2 hover:bg-slate-500"
        >
          <AiOutlineClose color="white" size="100%" />
        </div>
        <div className="h-full w-full overflow-hidden rounded-lg">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${code}?rel=0&showinfo=0&controls=0&share=0`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </DummyModal>
  );
};

export default StudentVideo;
