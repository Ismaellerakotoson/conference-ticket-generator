import { useState, useEffect } from "react";
import ticketImg from "../assets/images/pattern-ticket.svg";
import logoMark from "../assets/images/logo-mark.svg";
import logoFull from "../assets/images/logo-full.svg";

function Ticket({ name, email, git, image }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [ticketNumber] = useState(
    () => "#" + String(Math.floor(Math.random() * 90000) + 10000)
  );

  useEffect(() => {
    if (!image) return;
    const url = URL.createObjectURL(image);
    setImageUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [image]);

  return (
    <div className="flex flex-col items-center text-center px-4 pb-16">
      <img src={logoFull} alt="Coding Conf" className="w-[140px] sm:w-[170px] mt-2" />

      <h1 className="text-3xl sm:text-5xl font-bold mt-10 leading-tight max-w-[700px]">
        Congrats, <span className="text-orange-500">{name}!</span> Your ticket is ready.
      </h1>

      <p className="text-neutral-300 text-lg mt-6 max-w-[500px]">
        We've emailed your ticket to <span className="text-orange-500">{email}</span> and will send updates in the run up to the event.
      </p>

      <div className="relative w-full max-w-[600px] mt-12">
        <img src={ticketImg} alt="" className="w-full h-auto" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="text-left">
              <h2 className="text-lg sm:text-2xl font-bold">Coding Conf</h2>
              <p className="text-neutral-300 text-xs sm:text-sm">Jan 31, 2025 / Austin, TX</p>
            </div>
          </div>

          <div className="flex items-center gap-3 max-w-[70%]">
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover" />
            ) : (
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-neutral-700" />
            )}
            <div className="text-left overflow-hidden">
              <h3 className="font-bold text-base sm:text-lg truncate">{name}</h3>
              <div className="flex items-center gap-1.5 text-neutral-300 text-xs sm:text-sm">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                </svg>
                <span className="truncate">@{git}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-neutral-300 tracking-[0.3em] text-sm whitespace-nowrap">
          {ticketNumber}
        </div>
      </div>
    </div>
  );
}

export default Ticket;