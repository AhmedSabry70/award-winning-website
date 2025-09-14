export interface VideoSlideAnimation {
  heading: {
    opacity: number;
    scale: number;
    duration: number;
    ease: string;
    [key: string]: any;
  };
  subtitle: {
    opacity: number;
    y: number;
    duration: number;
    ease: string;
    [key: string]: any;
  };
  title: {
    opacity: number;
    y?: number;
    duration: number;
    ease: string;
    [key: string]: any;
  };
}

export interface VideoSlide {
  src: string;
  heading: string;
  subtitle: string;
  title: string;
  animation: VideoSlideAnimation;
}
