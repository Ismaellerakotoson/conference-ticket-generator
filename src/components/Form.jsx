import { useRef, useState } from "react";
import GenerateButton from "./GenerateButton";
import logo from "../assets/images/logo-full.svg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import iconUpload from "../assets/images/icon-upload.svg"

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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!name || !email || !git) return;
    if (!isEmailValid) {
      return;
    }
    handleState();
  };

  const MAX_FILE_SIZE = 500 * 1024;
  const [imageError, setImageError] = useState("");

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setImageError("File to large. Please upload a photo under 500KB");
      return;
    }
    setImageError("");
    setImage(file);
  };

  const removeImage = ()=>{
    setImage(null);
  }

  const fileInputRef = useRef(null);

  const imageUrl = image ? URL.createObjectURL(image) : null;

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="flex flex-col items-center w-full">
      <img src={logo} alt="Coding Conf" className="w-[140px] sm:w-[170px]" />

      <div className="w-full max-w-[540px] mt-10 md:min-w-[790px] items-center flex flex-col">
        <div className="text-center">
          <h1 className="text-3xl sm:text-6xl font-bold leading-tight">
            Your Journey to Coding Conf 2025 Starts Here!
          </h1>
          <p className="text-xl text-neutral-300 leading-tight mt-4 sm:mt-6">
            Secure your spot at next year's biggest coding conference.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="min-w-[345px] mt-8 sm:mt-10 space-y-6 md:min-w-[460px]">
          <div>
            <label className="block text-xl mb-2">Upload Avatar</label>

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
              className={`flex flex-col items-center justify-center gap-4 border-2 border-dashed rounded-xl py-4 px-4 cursor-pointer bg-neutral-700/20 backdrop-blur-sm focus:outline-none  focus:ring-1 focus:ring-offset-1 focus:ring-neutral-500 focus:ring-offset-neutral-500 transition-colors ${
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
                <div className="bg-neutral-700/60 border border-neutral-500 rounded-lg p-2">
                  <img src={iconUpload} alt="" />
                </div>
              )}
              <p className="text-neutral-300 text-lg text-center">
                {image
                  ? <span className="flex gap-2">
                    <button type="button" className="hover:underline py-1 px-2 rounded hover:bg-neutral-700/20" onClick={removeImage}>Remove Image</button>
                    <button type="button" className="hover:underline py-1 px-2 rounded hover:bg-neutral-700/20" onClick={() => fileInputRef.current?.click()}>Change Image</button>
                  </span>
                  : "Drag and drop or click to upload"}
              </p>
              <input
                id="avatar"
                type="file"
                accept="image/png, image/jpeg"
                className="hidden"
                onChange={(e) => handleFile(e.target.files[0])}
                ref={fileInputRef}
              />
            </label>

            {imageError ? (
              <span className="flex text-red-500 text-xs gap-2 items-center mt-3">
                <IoIosInformationCircleOutline className="w-4 h-4" />
                {imageError}
              </span>
            ) : (
              <span className="flex text-neutral-300 text-xs gap-2 items-center mt-3">
                <IoIosInformationCircleOutline className="w-4 h-4" />
                Upload your photo (JPG or PNG, max size: 500KB).
              </span>
              
            )}
          </div>

          <div>
            <label className="block text-xl mb-2">Full Name</label>
            <input
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="w-full text-lg bg-neutral-700/20 border border-neutral-500 rounded-lg px-4 py-3 text-neutral-0 placeholder-neutral-500 focus:outline-none  focus:ring-1 focus:ring-offset-1 focus:ring-neutral-500 focus:ring-offset-neutral-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xl mb-2">Email Address</label>
            <input
              type="text"
              value={email}
              required
              placeholder="example@email.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-lg bg-neutral-700/20 border border-neutral-500 rounded-lg px-4 py-3 text-neutral-0 placeholder-neutral-500 focus:outline-none  focus:ring-1 focus:ring-offset-1 focus:ring-neutral-500 focus:ring-offset-neutral-500 transition-colors"
            />
            {submitted && !isEmailValid && email && (
              <span className="flex text-red-500 text-xs gap-2 items-center mt-3">
                <IoIosInformationCircleOutline className="w-4 h-4" />
                Please enter a valid email address
              </span>
            )}
          </div>

          <div>
            <label className="block text-xl mb-2">GitHub Username</label>
            <input
              type="text"
              value={git}
              required
              placeholder="@yourusername"
              onChange={(e) => setGit(e.target.value)}
              className="w-full text-lg bg-neutral-700/20 border border-neutral-500 rounded-lg px-4 py-3 text-neutral-0 placeholder-neutral-500 focus:outline-none  focus:ring-1 focus:ring-offset-1 focus:ring-neutral-500 focus:ring-offset-neutral-500 transition-colors"
            />
          </div>

          <GenerateButton />
        </form>
      </div>
    </div>
  );
}

export default Form;
