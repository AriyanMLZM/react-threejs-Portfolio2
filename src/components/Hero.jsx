import { styles } from "../styles";
import { EarthCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto flex justify-center`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white select-none`}>
            Hi, I'm <span className='text-[#915EFF]'>Maryam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 select-none`}>
            I develop fullstack web applications
          </p>
        </div>
      </div>
      <div className="w-[350px] h-[350px] mt-[320px]">
        <EarthCanvas />
      </div>
    </section>
  );
};

export default Hero;
