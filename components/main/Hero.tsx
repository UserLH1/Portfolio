import HeroContent from "../sub/HeroContent";
function Hero() {
  return (
    <div className="relative flex flex-col h-full w-full ">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute left-0 z-[1] w-full object-cover sm:top-[-150px] md:top-[-220px] lg:top-[-300px] xl:top-[-500px] top-[-50px]"
      >
        <source src="/blackhole.webm" type="video/webm"></source>
      </video>
      <HeroContent />
      {/* <BackgroundBeamsWithCollisionDemo /> */}
    </div>
  );
}

export default Hero;
