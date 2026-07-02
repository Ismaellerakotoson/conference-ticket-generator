import { useState } from "react";
import GenerateButton from "./GenerateButton";
import logo from "../assets/images/logo-full.svg";

function Form({
  name,
  setName,
  email,
  setEmail,
  git,
  setGit,
  image,
  setImage,
  handleState,
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !git) return;
    handleState();
  };

  const handleFile = (file) => {
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const imageUrl = image ? URL.createObjectURL(image) : null;

  return (
    <div className="flex flex-col items-center w-full">
      <img src={logo} alt="Coding Conf" className="w-[140px] sm:w-[170px]" />

      <div className="w-full max-w-[540px] mt-10">
        <div className="text-center">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 leading-tight mt-4 sm:mt-6">
            Secure your spot at next year's biggest coding conference.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 sm:mt-10 space-y-6">
          <div>
            <label className="block text-sm mb-2">Upload Avatar</label>

            <label
              htmlFor="avatar"
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
              }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFile(e.dataTransfer.files[0]);
              }}
              className={`flex flex-col items-center justify-center gap-4 border-2 border-dashed rounded-xl py-8 px-4 cursor-pointer bg-neutral-700/20 backdrop-blur-sm transition-colors ${
                isDragging ? "border-orange-500" : "border-neutral-500/50"
              }`}
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="avatar preview"
                  className="w-16 h-16 rounded-lg object-cover"
                />
              ) : (
                <div className="bg-neutral-700/60 border border-neutral-500 rounded-lg p-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-orange-500">
                    <path d="M10 13V3M10 3L6 7M10 3l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M3 13v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
              <p className="text-neutral-300 text-sm text-center">
                {image ? "Click or drag to change image" : "Drag and drop or click to upload"}
              </p>
              <input
                id="avatar"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </label>

            <p className="flex items-center gap-2 text-neutral-500 text-xs mt-3">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
                <path d="M7 6.5v3M7 4.5v.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Upload your photo (JPG or PNG, max size: 500KB).
            </p>
          </div>

          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-neutral-700/20 border border-neutral-500 rounded-lg px-4 py-3 text-neutral-0 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              required
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-neutral-700/20 border border-neutral-500 rounded-lg px-4 py-3 text-neutral-0 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">GitHub Username</label>
            <input
              type="text"
              value={git}
              required
              placeholder="@yourusername"
              onChange={(e) => setGit(e.target.value)}
              className="w-full bg-neutral-700/20 border border-neutral-500 rounded-lg px-4 py-3 text-neutral-0 placeholder-neutral-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
            />
          </div>

          <GenerateButton />
        </form>
      </div>
    </div>
  );
}

export default Form;