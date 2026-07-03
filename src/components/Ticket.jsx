import { useState, useEffect } from "react";
import ticketImg from "../assets/images/pattern-ticket.svg";
import logoMark from "../assets/images/logo-mark.svg";
import logoFull from "../assets/images/logo-full.svg";
import iconGitHub from '../assets/images/icon-github.svg'

function Ticket({ name, email, git, image }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [ticketNumber] = useState(
    () => "#" + String(Math.floor(Math.random() * 90000) + 10000),
  );

  useEffect(() => {
    if (!image) return;
    const url = URL.createObjectURL(image);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  return (
    <div className="flex flex-col items-center text-center  pb-16">
      <img
        src={logoFull}
        alt="Coding Conf"
        className="w-[165px] w-[26px] sm:w-[170px] mt-2"
      />

      <h1 className="text-3xl sm:text-6xl font-bold mt-10 leading-tight max-w-[700px]">
        Congrats, <span className="text-orange-500">{name}!</span> Your ticket
        is ready.
      </h1>

      <p className="text-neutral-300 text-xl mt-6 mx-0 min-w-[330px] md:max-w-[480px]">
        We've emailed your ticket to{" "}
        <span className="text-orange-500">{email}</span> and will send updates
        in the run up to the event.
      </p>

      <div className="relative w-full max-w-[600px] mt-12">
        <img src={ticketImg} alt="" className="aspect-[345/160] mx-auto" />
        <div className=" absolute inset-0 flex flex-col justify-between sm:p-8">
          <div className="flex items-center gap-3 px-7 py-4">
            <img src={logoMark} alt="" className="w-10 h-8 sm:w-12 sm:h-12" />
            <div className="text-left">
              <h2 className="text-2xl sm:text-4xl font-bold">Coding Conf</h2>
              <p className="text-neutral-300 text-sm sm:text-xl">
                Jan 31, 2025 / Austin, TX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 max-w-[70%] px-7 py-4">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="avatar"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover"
              />
            ) : (
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-neutral-700" />
            )}
            <div className="text-left overflow-hidden">
              <h3 className="font-bold text-xl sm:text-3xl truncate">
                {name}
              </h3>
              <div className="flex items-center gap-1.5 text-neutral-300 text-xs sm:text-sm">
                <img src={iconGitHub} alt="" className="w-5"/>
                <span className="truncate text-sm sm:text-xl">@{git}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="block flex items-center absolute right-3 top-1/2 -translate-y-1/2 rotate-90 origin-center text-neutral-400 tracking-[0rem] text-xl sm:text-2xl text-bold  whitespace-nowrap">
          {ticketNumber}
        </div>
      </div>
    </div>
  );
}

export default Ticket;
