import { SocialType } from "@/types";
import { getUrl } from "@/utils/helpers";
import { BiSolidUserRectangle as ResumeIcon } from "react-icons/bi";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { RiMailSendFill as EmailIcon } from "react-icons/ri";

export const socialConfigs: SocialType[] = [
  {
    id: 1,
    name: "Email",
    username: "Send email",
    tooltip: "Send me an email",
    href: "mailto:mattpantaleone@gmail.com",
    icon: EmailIcon,
  },
  {
    id: 2,
    name: "Twitter",
    username: "@m_pantaleone",
    tooltip: "Follow me on Twitter",
    href: "https://x.com/m_pantaleone",
    icon: FaTwitter,
  },

  {
    id: 3,
    name: "GitHub",
    username: "pantaleone-ai",
    tooltip: "Check out my GitHub",
    href: "https://github.com/pantaleone-ai",
    icon: FaGithub,
  },
  {
    id: 4,
    name: "LinkedIn",
    username: "mattpantaleone",
    tooltip: "Connect with me on LinkedIn",
    href: "https://www.linkedin.com/in/mattpantaleone/",
    icon: FaLinkedin,
  },
  // {
  //   id: 5,
  //   name: "Facebook",
  //   username: "pantaleoneNFTs",
  //   tooltip: "Connect with me on Facebook",
  //   href: "https://www.facebook.com/pantaleoneNFTs",
  //   icon: FaFacebook,
  // },
];
