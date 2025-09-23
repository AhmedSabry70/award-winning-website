import { ElementType, MouseEvent, ReactNode, useRef, useState } from "react";
import { features_cards } from "../constants";

import { TiLocationArrow } from "react-icons/ti";
import { cn } from "../lib/utils";

const BentoTilt = ({
  ...props
}: {
  className?: string;
  children: ReactNode;
}) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef<HTMLDivElement>(null);

  const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
    const card = itemRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();

    const relativeX = (clientX - left) / width;
    const relativeY = (clientY - top) / height;

    const tiltX = (relativeX - 0.5) * 5;
    const tiltY = (relativeY - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95,.95,.95)`;
    setTransformStyle(newTransform);
  };

  const onMouseLeave = () => setTransformStyle("");

  return (
    <div
      ref={itemRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ transform: transformStyle }}
      {...props}
    />
  );
};

const BentoCard = ({
  src,
  title,
  description,
  isComingSoon=false,
  className,
  Icon,
}: {
  src?: string;
  title?: string | null;
  description?: string;
  isComingSoon?: boolean;
  className?: string;
  Icon?: ElementType;
}) => {
  const initialPosition = { x: 0, y: 0 };
  const [cursorPosition, setCursorPosition] =
    useState<typeof initialPosition>(initialPosition);
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverBtnRef = useRef<HTMLDivElement>(null);

  const onMouseMove = ({ clientX, clientY }: MouseEvent) => {
    if (!hoverBtnRef.current) return;
    const rect = hoverBtnRef.current.getBoundingClientRect();

    setCursorPosition({
      x: clientX - rect.left,
      y: clientY - rect.top,
    });
  };
  const onMouseEnter = () => setHoverOpacity(1);
  const onMouseLeave = () => setHoverOpacity(0);

  return (
    <div className={cn("relative size-full", className)}>
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute start-0 top-0 size-full object-cover object-center"
      />

      <div className="relative size-full flex flex-col justify-between p-5 text-blue-50 z-10">
        <div>
          {title && (
            <h1
              className="bento-title special-font "
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}
          {description && (
            <p className="max-w-64 mt-3 text-xs md:text-base">{description}</p>
          )}
          {Icon && <Icon className="m-5 scale-[5] self-end" />}
        </div>
        {isComingSoon && (
          <div
            ref={hoverBtnRef}
            onMouseMove={onMouseMove}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="border-hsla relative w-fit flex items-center gap-1 px-5 py-2 bg-black text-xs uppercase text-white/20 rounded-full cursor-pointer overflow-hidden"
          >
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className=" bg-black">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>

          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge inteo an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div className=" grid h-[calc(135vh+384px)] md:h-[calc(135vh+65vh)] grid-cols-1 md:grid-cols-2 grid-rows-[384px_fr1_fr1_fr1] md:grid-rows-[65vh_320px_320px_320px] gap-7">
          {features_cards.map((feature, idx) => (
            <BentoTilt
              key={idx}
              className={cn("", {
                "col-span-1 md:col-span-2 row-span-1 border-hsla relative  mb-7 rounded-md overflow-hidden":
                  idx === 0,
                "bento-tilt_1 md:col-span- md:row-span-2": idx === 1,

                "bento-tilt_2": idx === 4 || features_cards.length - 1,
              })}
            >
              <BentoCard
                title={feature.title}
                description={feature.description || ""}
                src={feature.src}
                Icon={feature.Icon}
                className={feature.className}
                isComingSoon={feature.isComingSoon}
              />
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
{
  /* <div className="border-hsla relative h-96 w-full md:h-[65vh] mb-7 rounded-md overflow-hidden">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            description="A cross-platform metagame app. turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-title_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />
          </div>
        </div> */
}
