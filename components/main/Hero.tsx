import HeroContent from "../sub/HeroContent";
function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full ">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-320px] left-0 z-[1] w-full h-full object-cover"
      >
        <source src="/blackhole.webm" type="video/webm"></source>
      </video>
      <HeroContent />
      {/* <BackgroundBeamsWithCollisionDemo /> */}
    </div>
  );
}

export default Hero;
