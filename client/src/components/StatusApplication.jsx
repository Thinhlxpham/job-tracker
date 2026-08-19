export default function StatusApplication() {
  return (
    <div className="flex gap-1 mb-6 ">
      <Button text={"All"} />
      <Button text={"Applied"} />
      <Button text={"Interview"} />
      <Button text={"Reject"} />
      <Button text={"Offer"} />
    </div>
  );
}

function Button({ text }) {
  return (
    <button className="px-4 py-2.5 text-sm font-medium transition-colors relative text-foreground cursor-pointer">
      {text}

      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#737373] rounded-full"></span>
    </button>
  );
}
