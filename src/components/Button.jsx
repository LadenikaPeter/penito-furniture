export default function Button({ text }) {
  return (
    <div className="text-center flex justify-center pt-10 cursor-pointer">
      <h3 className="bg-[#1C333B] text-white w-[10%]- px-[20px] py-[11px] rounded-[72px] capitalize">
        {text}
      </h3>
    </div>
  );
}
