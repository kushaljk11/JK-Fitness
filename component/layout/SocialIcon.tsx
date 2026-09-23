import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

interface SocialIconProps {
  name: "x" | "github" | "linkedin" | "youtube" | "instagram";
  className?: string;
  size?: number;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  name,
  className = "w-5 h-5",
  size = 18,
}) => {
  switch (name) {
    case "x":
      return <FaXTwitter size={size} className={className} />;
    case "github":
      return <FaGithub size={size} className={className} />;
    case "linkedin":
      return <FaLinkedinIn size={size} className={className} />;
    case "youtube":
      return <FaYoutube size={size} className={className} />;
    case "instagram":
      return <FaInstagram size={size} className={className} />;
    default:
      return null;
  }
};

export default SocialIcon;
