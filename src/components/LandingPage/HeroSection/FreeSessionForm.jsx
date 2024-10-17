import React, { useState } from "react";
import styles from "./HeroSectionStyles.module.css";
import { inter, league_spartan, open_sans } from "@/shared/styles/font";
import { IoClose } from "react-icons/io5";
import { CallIcon, DpIcon, EmailIcon } from "@/shared/svgIcons/icons";
import { BsCheck } from "react-icons/bs";
import useToast from "@/hooks/useToast";
import { envConfig } from "@/shared/helpers/envApi";
import { formMailRegex } from "@/shared/utils/formRegex";
import getData from "@/firebase/firestore/getData";
import addData from "@/firebase/firestore/addData";
import SpinnerLoader from "@/components/SpinnerLoader";
import editData from "@/firebase/firestore/editData";
const forminfo = [
  {
    label: "Name",
    placeholder: "Enter your name..",
    icon: <DpIcon color="" />,
    icon_active: <DpIcon color="" />,
    name: "name",
  },
  {
    label: "Mobile",
    placeholder: "+91 Enter your mobile..",
    icon: <CallIcon color="" />,
    icon_active: <CallIcon color="" />,
    name: "mobile",
  },
  {
    label: "Email",
    placeholder: "Email to receive session link",
    icon: <EmailIcon color="" />,
    icon_active: <EmailIcon color="" />,
    name: "email",
  },
];

const initialForm = {
  name: "",
  email: "",
  mobile: "",
  whatsapp_ms: false,
};

const FreeSessionForm = () => {
  const [formData, setFormData] = useState(initialForm);
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value, type, checked = false } = e.target;
    const sanitizedValue =
      name === "mobile"
        ? value.replace(/\D/g, "").trim()
        : type === "checkbox"
        ? checked
        : value;
    setFormData((prev) => ({ ...prev, [name]: sanitizedValue }));
  };
  const { showSuccessToast, showWarningToast, showErrorToast } = useToast();
  const { mobile, email, whatsapp_ms } = formData;

  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      ...formData,
      visitedOn: [Date.now()],
    };
    if (mobile.length !== 10) {
      showWarningToast("Invalid Mobile Number", "top-right", "light");
      setIsLoading(false);
      return;
    }
    if (!formMailRegex.test(email)) {
      showWarningToast("Invalid Mail Id", "top-right", "light");
      setIsLoading(false);
      return;
    }
    try {
      const { result } = await getData(envConfig.interested_students, email);
      if (result.exists()) {
        data.visitedOn = [...result.data().visitedOn, Date.now()];
        const { result: success } = await editData(
          envConfig.interested_students,
          email,
          data
        );
        if (success) {
          showSuccessToast(
            "We have recieved your data, our experts will reach out to you",
            "top-right",
            "light"
          );
          setFormData(initialForm);
        } else {
          showErrorToast(
            "Some thing went wrong please try again later",
            "top-right",
            "light"
          );
        }
      } else {
        try {
          const { result } = await addData(
            envConfig.interested_students,
            email,
            data
          );

          if (result && result.success) {
            showSuccessToast(
              "We have received your data, our experts will reach out to you",
              "top-right",
              "light"
            );
            setFormData(initialForm);
          } else {
            showErrorToast(
              "Some thing went wrong please try again later",
              "top-right",
              "light"
            );
            setFormData(initialForm);
          }
        } catch (error) {
          setIsLoading(false);
          showErrorToast(
            "Some thing went wrong please try again later",
            "top-right",
            "light"
          );
          console.error("Error adding data:", error);
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      style={{ border: "0.27px solid #FF8541" }}
      className={`mx-auto h-[340.25px] w-[297.1px] gap-[15.95px] rounded-[10.63px] border-Vivid_Tangelo px-[26.59px] py-[25.26px] ${styles.form_shadow} transla relative flex -translate-y-28 flex-col overflow-hidden bg-white sm:mx-auto sm:h-[545.55px] sm:w-[476.76px] sm:gap-[25.6px] sm:rounded-[17.07px] sm:px-[40.53px] sm:py-[42.66px] md:mx-0 md:h-[301.9px] md:w-[257.81px] md:-translate-y-0 md:gap-[13.84px] md:rounded-[9.23px] md:px-[23.07px] md:py-[21.92px] lg:h-[348.2px] lg:w-[304.26px] lg:gap-[16.34px] lg:rounded-[10.89px] lg:px-[27.23px] lg:py-[25.87px]`}
    >
      <div className="absolute right-[13.48px] top-[10.5px]">
        {/* <IoClose
          className="md:size-[4.49px] lg:size-[9.65px]"
          color="#747474"
        /> */}
      </div>
      <div className={`${league_spartan.className} flex`}>
        <div
          className={`flex h-[44.39px] w-[156.18px] flex-col justify-between gap-[3.83px] py-[4.49px] text-Vivid_Tangelo sm:h-[70.92px] sm:w-[250.62px] sm:py-[7.21px] md:h-[45.92px] md:w-[135.52px] md:py-[4.6px] lg:w-[159.94px]`}
        >
          <p className="text-[10px] leading-[9.2px] sm:text-[16px] sm:leading-[14.73px] md:text-[10px] md:leading-[9.2px] lg:text-[11px] lg:leading-[10.13px]">
            Upcoming FREE Session
          </p>
          <p className="text-[14px] font-bold sm:text-[22px] sm:leading-[20.25px] md:text-[13px] md:leading-[11.97px] lg:text-[14px] lg:leading-[12.89px]">
            HTML Fundamentals
          </p>
        </div>
        <p className="absolute right-[11.9px] top-[33.2px] text-nowrap text-[12px] font-medium sm:right-[15.71px] sm:top-[53.28px] sm:text-[20px] sm:leading-[18.41px] md:right-[7.82px] md:top-[28.81px] md:text-[11px] lg:right-[13.26px] lg:top-[34px] lg:text-[12px]">
          Starts in : 13h 4m
        </p>
      </div>
      {forminfo.map(({ label, placeholder, icon, name }) => (
        <div
          className={`flex ${inter.className} h-[43.9px] flex-col justify-between sm:h-[70.4px] md:h-[39.41px] lg:h-[44.71px]`}
        >
          <label
            className="text-[8px] font-semibold sm:text-[13px] md:text-[8px] lg:text-[8.17px]"
            htmlFor={label}
          >
            {label}
          </label>
          <div
            className={`flex h-[28.58px] flex-shrink-0 items-center gap-2 sm:h-[45.86px] md:h-[24.8px] lg:h-[29.27px] ${styles.input_shadow} ease rounded-[5.45px] border border-gray-300 px-[10.89px] transition-all duration-500 focus-within:border-Vivid_Tangelo`}
          >
            <div className="size-[10.63px] sm:size-[25.6px] md:size-[11px] lg:size-[12px]">
              {icon}
            </div>
            <input
              placeholder={placeholder}
              required
              onChange={handleInputChange}
              className="h-full w-full text-[8.64px] font-medium focus:outline-none sm:text-[13.87px] md:text-[10.89px]"
              type="text"
              name={name}
              value={formData[name]}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col gap-[10.63px] sm:gap-[17.07px] md:gap-[10.89px]">
        <div>
          <div>
            <label
              className={`flex ${inter.className} items-center gap-[6.65px] sm:gap-[10.67px] md:gap-[6.81px]`}
            >
              <input
                onChange={handleInputChange}
                type="checkbox"
                name="whatsapp_ms"
                className="peer hidden"
                checked={whatsapp_ms}
              />
              <div className="relative grid size-[10.63px] flex-shrink-0 place-items-center rounded-sm bg-gray-200 peer-checked:border-transparent peer-checked:bg-Vivid_Tangelo peer-checked:text-white sm:size-[17.07px] md:size-[10.89px]">
                <BsCheck className="absolute inset-1/2 size-[10px] -translate-x-1/2 -translate-y-1/2 sm:size-[19px] md:size-[10px]" />
              </div>
              <p className="text-[8px] font-semibold sm:text-[13px] md:text-[8px] lg:text-[9px]">
                I want to receive updates on WhatsApp
              </p>
            </label>
          </div>
        </div>
        <button className="duration-750 linear grid h-[28.58px] w-full place-items-center rounded-[5.45px] bg-Vivid_Tangelo text-[12px] text-xs font-semibold text-white transition-all active:scale-95 sm:h-[45.86px] sm:text-[20px] md:h-[29.27px] md:text-[16px]">
          {isLoading ? <SpinnerLoader size={"1.7rem"} /> : "Book Your Slot"}
        </button>
      </div>
    </form>
  );
};

export default FreeSessionForm;
