import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from '@gsap/react';
import { heroVideoSlides } from "../constants";


gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [exitVideoSrc, setExitVideoSrc] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = heroVideoSlides.length;
  const nextVideoIndex = (currentIndex % totalVideos)+1 ;


  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const exitVideoRef = useRef<HTMLVideoElement>(null);

  const play=() =>  {nextVideoRef.current && nextVideoRef.current.play()}

const ExitTrans=() => {
 // if(currentIndex===0) return
  //if(currentIndex > exitVideoSrc){
    setExitVideoSrc(prev=>{
      return currentIndex===0 ?0 :currentIndex > exitVideoSrc?currentIndex:0
      return prev
    })
 // }
};

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);


  

 
  /* handlers */
  const miniVideoClickHandler = () => {
    setHasClicked(true);
    setCurrentIndex(currentIndex>=totalVideos-1?0 :(currentIndex % totalVideos)+1);
  };

  const onLoadedData = () => setLoadedVideos((prev) => prev + 1)
  const getVideoSrc =useCallback((index: number) =>  heroVideoSlides[index].src,[],)


  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#next-video', {
        visibility: 'visible'
      });

      gsap.from('#preview-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
       
        
      });

      //  gsap.to('#current-video', {
      //   transformOrigin: 'center center',
      //   scale: 1,
      //   width: '100%',
      //   height: '100%',
      //   duration: 1,
      //   ease: 'power1.inOut',
      //   //onStart: () =>  play(),
        
      // }); 

      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: () =>  play(),
        onComplete: () => {
          ExitTrans()
          exitVideoRef.current&& exitVideoRef.current.pause()
         
         },
        // on:()=>{ExitTrans()}
      });
    }
  }, { dependencies: [currentIndex], revertOnUpdate: true });
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  useEffect(() => {
    const slide = heroVideoSlides[currentIndex];

    // Reset previous animations
    gsap.set("#heading", { opacity: 0, scale: 0 });
    gsap.set("#subtitle", { opacity: 0, y: 20 });
    gsap.set("#title", { opacity: 0, x: -20 });

    // Apply text animations for the current slide
    gsap.fromTo(
      "#heading",
      { opacity: slide.animation.heading.opacity, scale: slide.animation.heading.scale },
      { opacity: 1, scale: 1, duration: slide.animation.heading.duration, ease: slide.animation.heading.ease }
    );

    gsap.fromTo(
      "#subtitle",
      { opacity: slide.animation.subtitle.opacity, y: slide.animation.subtitle.y },
      { opacity: 1, y: 0, duration: slide.animation.subtitle.duration, ease: slide.animation.subtitle.ease }
    );

    gsap.fromTo(
      "#title",
      { opacity: slide.animation.title.opacity, x: slide.animation.title.x || 0 }, // Ensure x exists or default to 0
      { opacity: 1, x: 0, duration: slide.animation.title.duration, ease: slide.animation.title.ease }
    );
  }, [currentIndex]);

  return (
    <div className="relative h-dvh w-screen overflow-x-clip">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div id="video-frame" className="relative h-dvh w-screen overflow-hidden rounded-lg bg-blue-75 z-10">
        <div>
          <div className="mask-clip-path absolute-center absolute size-64 rounded-lg overflow-hidden cursor-pointer z-50">
            <div onClick={miniVideoClickHandler} className="origin-center scale-50 opacity-0 transition-all duration-100 ease-in hover:scale-100 hover:opacity-100">
              <video
                id="preview-video"
                src={getVideoSrc(nextVideoIndex>totalVideos-1?0:nextVideoIndex)}
                muted
                loop
                onLoadedData={onLoadedData}
                className="size-46 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            id="next-video"
            muted
            loop
            onLoadedData={onLoadedData}
            className="absolute-center absolute invisible size-64 object-cover object-center z-20"
          />
          <ExitVideo src={heroVideoSlides[exitVideoSrc].src} onLoadedData={onLoadedData}/>

        </div>
         <h1 id="heading" className="special-font hero-heading absolute bottom-5 end-5 text-blue-75 z-40" dangerouslySetInnerHTML={{ __html: heroVideoSlides[currentIndex].title }}/>
        <div className="absolute start-0 top-0 size-full z-40">
          <div className="mt-24 px-5 sm:px-10">
            <h1 id="subtitle" className="special-font hero-heading text-blue-100" dangerouslySetInnerHTML={{ __html: heroVideoSlides[currentIndex].heading }} />
            <p id="title" className="mb-5 max-w-64 font-robert-regular text-blue-100" dangerouslySetInnerHTML={{ __html: heroVideoSlides[currentIndex].subtitle }} />
            <Button id="watch-trailer" title="Watch Trailer" prefixIcon={<TiLocationArrow />} className="!bg-yellow-300 flex-center gap-1" />
          </div>
        </div> 
      </div>
       <h1 className="special-font hero-heading absolute bottom-5 end-5 text-black " dangerouslySetInnerHTML={{ __html: heroVideoSlides[currentIndex].title }}/> 
    </div>
  );
};

export default Hero;

const ExitVideo = memo(({src,onLoadedData}:{src:string,onLoadedData:()=>void})=>{
return (
  <video
  //  id="current-video"
    //ref={exitVideoRef}
    src={src}
      muted
      loop
      autoPlay
      onLoadedData={onLoadedData}
      className="absolute start-0 top-0 size-full object-cover object-center"
    />
)
})