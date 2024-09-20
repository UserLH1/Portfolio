import { ContactForm } from "../sub/ContactForm";

const Contact = () => {
  return (
    <div className="z-30 relative">
      {" "}
      {/* Am adăugat `relative` pentru control asupra poziționării */}
      {/* Containerul pentru titlu și paragraf */}
      <div className="relative z-40 mt-[40px] md:mt-[150px] mb-[-150px]">
        {" "}
        {/* `z-40` pentru a aduce secțiunea în față și `mt-[200px]` pentru distanță */}
        <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
          Get in touch
        </h2>
        <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 mt-2 mx-auto">
          Contact me for global collaboration
        </p>
      </div>
      {/* Secțiunea principală cu GitHub Globe și Contact Form */}
      <div className="z-30 flex flex-col md:flex-row justify-center items-center mt-20 md:space-x-10 mb-20">
        {/* Globul GitHub */}
        <div className="flex justify-center md:justify-end w-full md:w-auto md:ml-[-50px] relative z-10">
          {" "}
          {/* Am adăugat `relative` și `z-10` pentru control */}
        </div>

        {/* Formularul de contact */}
        <div
          className="flex justify-center items-center w-full md:w-auto mt-10 md:mt-0 relative z-10 "
          id="contact"
        >
          {" "}
          {/* Am adăugat `relative` și `z-10` pentru control */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
