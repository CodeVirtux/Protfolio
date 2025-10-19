import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-white min-h-[92vh] overflow-hidden">
      {/* Right BG (desktop) */}
<div
  className="absolute top-0 right-0 hidden h-full w-[58%] md:block"
  style={{
    backgroundImage:
      "linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.65) 55%, rgba(0,0,0,0.15) 100%), url('/images/myimg.png')",
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    filter: "grayscale(100%)",
  }}
/>

{/* Faint BG (mobile) */}
<div
  className="absolute inset-0 opacity-35 md:hidden"
  style={{
    backgroundImage: "url('/images/myimg.png')",
    backgroundSize: "cover",
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    filter: "grayscale(100%)",
  }}
/>


      {/* Content Section */}
      <div className="relative z-10 mx-auto max-w-6xl min-h-[92vh] flex items-center px-6 lg:px-20">
        <div className="max-w-xl">
          <p className="text-[22px] md:text-[30px] font-bold text-white [text-shadow:0_1px_8px_rgba(0,0,0,.45)]">
            Hello, I’m
          </p>
          <h1 className="mt-2 text-[40px] md:text-[68px] font-extrabold leading-tight">
            Abdellah Ait-si
          </h1>
          <p className="mt-4 text-[18px] md:text-[22px] text-white/70">
            Full-Stack Web Developer
          </p>
          <a
            href="#projects"
            className="inline-block mt-8 rounded-full bg-white px-6 py-3 font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
