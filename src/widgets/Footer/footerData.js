import {
  PhoneIcon,
  MailIcon,
  LocationIcon,
  InstagramIcon,
  YoutubeIcon,
  MetaIcon,
} from "@/shared/svgIcons/footer_svg";

export const FooterData = [
  {
    title: "Reach us",
    items: [
      { text: "6305693431", icon: <PhoneIcon /> },
      { text: "adminsession@10000coders.co", icon: <MailIcon /> },
      {
        text: "Metro station, MIG 214, Road 1, Behind KPHB, Kukatpally Housing Board Colony, Kukatpally, Hyderabad, Telangana 500072",
        icon: <LocationIcon />,
      },
    ],
  },
  {
    title: "10000 Coders",
    items: [
      { text: "About us" },
      { text: "Careers" },
      { text: "Privacy Policy" },
      { text: "Terms and Conditions" },
      { text: "Refund Policy" },
      { text: "Review" },
    ],
  },
  {
    title: "Social Media",
    items: [
      { text: "Instagram", icon: <InstagramIcon /> },
      { text: "Youtube", icon: <YoutubeIcon /> },
      { text: "Meta", icon: <MetaIcon /> },
    ],
  },
];
