function GenerateButton() {
  return (
    <button
      type="submit"
      className="w-full bg-orange-500 hover:bg-orange-700 text-neutral-900 font-bold text-lg rounded-lg py-4 mt-4 shadow-[0_0_20px_rgba(255,111,92,0.4)] transition-colors duration-200"
    >
      Generate My Ticket
    </button>
  );
}

export default GenerateButton;