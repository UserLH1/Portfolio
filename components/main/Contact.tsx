import { ContactForm } from "../sub/ContactForm";
import { GitHubGlobe } from "../sub/GitHubGlobe";

const Contact = () => {
  return (
    <div className="z-30">
      <div>
        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
          Get in touch
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 mt-2 mx-auto">
          Contact me for global colaboration
        </p>
      </div>

      {/* Secțiunea principală cu GitHub Globe și Contact Form */}
      <div className="z-30 flex flex-col md:flex-row justify-center items-center mt-10 md:space-x-10 mb-20">
        {/* Globul GitHub */}
        <div className="flex justify-center md:justify-end w-full md:w-auto md:ml-[-50px]">
          <GitHubGlobe />
        </div>

        {/* Formularul de contact */}
        <div className="flex justify-center items-center w-full md:w-auto mt-10 md:mt-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
