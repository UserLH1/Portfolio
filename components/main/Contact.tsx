import { ContactForm } from "../sub/ContactForm";
import { FlipWords } from "../ui/flip-words";
const Contact = () => {
  const words = ["amazing", "creative", "innovative", "professional"];

  return (
    <div className="z-30 relative">
      {" "}
      {/* Am adăugat `relative` pentru control asupra poziționării */}
      {/* Containerul pentru titlu și paragraf */}
      <div className="relative z-40 mt-[5vh] md:mt-[15vh] mb-[-150px] md:flex items-center justify-center">
        {" "}
        {/* `z-40` pentru a aduce secțiunea în față și `mt-[200px]` pentru distanță */}
        <div className="text-4xl mx-auto font-normal text-center md:text-left text-neutral-600 dark:text-neutral-400 mb-10 md:mb-0 w-full md:w-1/2 relative  ">
          Let&apos;s build something{" "}
          <span className="text-indigo-500">
            <span className="text-gradient">
              <FlipWords words={words} />
            </span>
          </span>{" "}
          together.
          <br />
          <span className="block mt-4 md:flex items-center justify-center mb-6 ">
            Reach out now!
          </span>
        </div>
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
          className="flex justify-center items-center w-full md:w-auto mt-10 md:mt-0 relative z-10"
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
