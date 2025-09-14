import { TiLocationArrow } from "react-icons/ti";
import { VideoSlide } from "../types";
import { FaDiscord, FaMedium, FaTwitter, FaYoutube } from "react-icons/fa";

export const navLinks = [
  {
    id: "nexus",
    title: "Nexus",
  },
  {
    id: "vault",
    title: "Vault",
  },
  {
    id: "prologue",
    title: "Prologue",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const heroVideoSlides: VideoSlide[] = [
  {
    src: "videos/hero-1.mp4",
    heading: "redefi<b>n</b>e",
    subtitle: "Enter the Metagame Layer <br /> Unleash the Play Economy",
    title: "G<b>a</b>ming",
    animation: {
      heading: { opacity: 0, scale: 0.5, duration: 1, ease: "power1.inOut" },
      subtitle: { opacity: 0, y: 20, duration: 1.2, ease: "power1.inOut" },
      title: { opacity: 0, x: -20, duration: 1, ease: "power1.inOut" },
    },
  },
  {
    src: "videos/hero-2.mp4",
    heading: "Discover New Worlds",
    subtitle: "Explore the Unknown, Conquer the Future",
    title: "Adven<b>t<b>ure",
    animation: {
      heading: { opacity: 0, scale: 0.3, duration: 1.5, ease: "power2.out" },
      subtitle: { opacity: 0, y: 30, duration: 1.5, ease: "power2.out" },
      title: { opacity: 0, x: 20, duration: 1.5, ease: "power2.out" },
    },
  },
  {
    src: "videos/hero-3.mp4",
    heading: "The Future of Gaming",
    subtitle: "Join the Revolution, Play to Win",
    title: "Nex<b>t G<b>en",
    animation: {
      heading: { opacity: 0, scale: 0.2, duration: 1, ease: "back.out(1.7)" },
      subtitle: { opacity: 0, y: 40, duration: 1.5, ease: "back.out(1.7)" },
      title: { opacity: 0, x: -40, duration: 1, ease: "back.out(1.7)" },
    },
  },
  {
    src: "videos/hero-4.mp4",
    heading: "Unlock Your Potential",
    subtitle: "Step into the Metaverse, Create Your Future",
    title: "Become a Legend",
    animation: {
      heading: { opacity: 0, scale: 0.4, duration: 1.2, ease: "bounce.out" },
      subtitle: { opacity: 0, y: 50, duration: 1.2, ease: "bounce.out" },
      title: { opacity: 0, x: 30, duration: 1.2, ease: "bounce.out" },
    },
  },
];

export const features_cards = [
  {
    title: "radia<b>n</b>t",
    description:
      "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
    isComingSoon: true,
    src: "videos/feature-1.mp4",
  },
  {
    title: "zig<b>m</b>a",
    description:
      "An anime and gaming-inspired NFT collection - the IP primed for expansion.",
    isComingSoon: true,
    src: "videos/feature-2.mp4",
  },
  {
    title: "n<b>e</b>xus",
    description:
      "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
    src: "videos/feature-3.mp4",
  },
  {
    title: "az<b>u</b>l",
    description:
      "A cross-world AI Agent - elevating your gameplay to be more fun and productive.",
    isComingSoon: true,
    src: "videos/feature-4.mp4",
  },
  {
    title: '<span className="">M<b>o</b>re co<b>m</b>ing s<b>o</b>on.</span>',
    description: null,
    className: "bg-violet-300  [&>div]:max-w-64",
    Icon: TiLocationArrow,
  },
  {
    title: null,
    description: null,
    isComingSoon: true,
    src: "videos/feature-5.mp4",
  },
];

export const contact_list = [
  {
    src: "/img/contact-1.webp",
    clipClass: "contact-clip-path-1",
  },
  {
    src: "/img/contact-2.webp",
    clipClass: "contact-clip-path-2 lg:translate-y-40 translate-y-60",
  },
  {
    src: "/img/swordman-partial.webp",
    clipClass: "absolute md:scale-125",
  },
  {
    src: "/img/swordman.webp",
    clipClass: "sword-man-clip-path md:scale-125",
  },
];
export const socialLinks = [
  { href: "https://discord.com", icon: FaDiscord },
  { href: "https://twitter.com", icon: FaTwitter  },
  { href: "https://youtube.com", icon: FaYoutube  },
  { href: "https://medium.com", icon: FaMedium  },
];
/* export const features_cards = [
  {
    title:'<>radia<b>n</b>t</>',
    description:"A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
    isComingSoon:true,
    video:"videos/feature-1.mp4"
  },

  {
    title:'<>zig<b>m</b>a</>',
    description:"An anime and gaming-inspired NFT collection - the IP primed for expansion.",
    isComingSoon:true,
    video:"videos/feature-2.mp4"
  },

  {
    title:'<>zig<b>m</b>a</>',
    description:"An anime and gaming-inspired NFT collection - the IP primed for expansion.",
    isComingSoon:true,
    video:"videos/feature-2.mp4"
  },
] */
