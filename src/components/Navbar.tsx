import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { navLinks } from "../constants";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import useWindowScroll from "../hooks/useWindowScroll";
import gsap from "gsap";

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const audioElementRef = useRef<HTMLAudioElement>(null);
  const navElementRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useWindowScroll();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((b) => !b);
    setIsIndicatorActive((b) => !b);
  };

  useEffect(() => {
    const audio = audioElementRef.current;
    if (!audio) return;
    isAudioPlaying ? audio.play() : audio.pause();
  }, [isAudioPlaying]);

  useEffect(() => {
    const navbar = navElementRef.current;
    if (scrollY === 0) {
      setIsNavVisible(true);
      if (navbar) navbar.classList.remove("floating-nav");
    } else if (scrollY > lastScrollY) {
      setIsNavVisible(false);
      if (navbar) navbar.classList.add("floating-nav");
    }else if (scrollY < lastScrollY) {
        setIsNavVisible(true);
        if (navbar) navbar.classList.add("floating-nav");
      }
      setLastScrollY(scrollY)
  }, [scrollY]);

  useEffect(() => {
    gsap.to(navElementRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navElementRef}
      className="fixed inset-x-0 sm:inset-x-6 top-4 h-16 border-none transition-all duration-700 z-50"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="size-full flex items-center justify-between p-4">
          <div className="logo flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-10" />
            <Button
              id="product-button"
              title="Product"
              suffixIcon={<TiLocationArrow />}
              className="bg-blue-50 md:flex hidden items-center justify-center gap-1"
            />
          </div>
          <div className="h-full flex items-center">
            <ul className="hidden md:block">
              {navLinks.map((navLink) => (
                <a
                  key={navLink.id}
                  href={`#${navLink.id}`}
                  className="nav-hover-btn"
                >
                  {navLink.title}
                </a>
              ))}
            </ul>
            <button
              onClick={toggleAudioIndicator}
              className="ms-10 flex items-center space-x-0.5"
            >
              <audio
                ref={audioElementRef}
                src="/audio/loop.mp3"
                loop
                className="hidden"
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{
                    animationDelay: `${bar * 0.1}s`,
                  }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
