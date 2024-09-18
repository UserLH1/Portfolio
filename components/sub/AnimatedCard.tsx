"use client";
import Image from "next/image";
import { PinContainer } from "../ui/3d-pin";
interface Props {
  src: string; //link-ul unde trebuie sa duca
  title: string; // titlul cardului
  description: string; // descrierea cardului
  image: string; // imaginea cardului
  link: string; // link-ul afisat pe card
}
const AnimatedCard = ({ src, title, description, image, link }: Props) => {
  return (
    <div className="h-auto w-[full] flex items-center justify-center ">
      <PinContainer title={link} href={src}>
        <div className="flex  flex-col  tracking-tight text-slate-100/50 sm:basis-1/2 w-[20vw] ">
          <Image
            src={image}
            alt={title}
            width={1000}
            height={1000}
            className="w-full object-contain"
          />
          <h1 className="p-3 font-bold text-slate-100 text-xl mt-3">{title}</h1>
          <div className="text-base mt-1 mb-3 font-normal">
            <div className="text-slate-100 p-4 text-lg">{description}</div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};
export default AnimatedCard;
