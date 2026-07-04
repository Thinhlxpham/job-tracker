export default function StatusApplication() {
  return (
    <div className="flex gap-1 mb-6 ">
      <Button text={"All"} number={4} />
      <Button text={"Applied"} number={2} />
      <Button text={"Interview"} number={1} />
      <Button text={"Reject"} number={1} />
      <Button text={"Offer"} number={1} />
    </div>
  );
}

function Button({ text, number }) {
  return (
    <button className="px-4 py-2.5 text-sm font-medium transition-colors relative text-foreground cursor-pointer">
      {text}
      <span className="ml-1.5 text-xs text-[#737373]">{number}</span>
      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#737373] rounded-full"></span>
    </button>
  );
}
