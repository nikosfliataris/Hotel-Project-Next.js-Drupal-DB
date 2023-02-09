import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
export const SocialLinks = [
  {
    id: 1,
    name: "facebook",
    icon: <FaFacebookF />,
    url: "httsp://www.facebook.com",
  },
  {
    id: 2,
    name: "twitter",
    icon: <BsTwitter />,
    url: "httsp://www.twitter.com",
  },
  {
    id: 3,
    name: "linkedIn",
    icon: <BsLinkedin />,
    url: "https://www.linkedin.com/in/nikolaos-fliataris-968097156/",
  },
];
export const PagesLinks = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Flights", url: "/flights" },
  { id: 3, name: "Hotels", url: "/hotels" },
  { id: 4, name: "Transportation", url: "/transfer" },
  { id: 5, name: "Cruises", url: "/cruises" },
  { id: 6, name: "Activities", url: "/activities" },
];
