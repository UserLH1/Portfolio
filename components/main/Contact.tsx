import { ContactForm } from "../sub/ContactForm";
import { GitHubGlobe } from "../sub/GitHubGlobe";
const Contact = () => {
  return (
    <div className="z-50 flex flex-row justify-center items-center">
      <GitHubGlobe />
      <div className="ml-[110px] flex items-center justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
