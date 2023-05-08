import Timer from "./Timer";

const NextBoss = () => {

  return (
    <div className="py-3 px-3 flex flex-col border-[1px] bg-gray-700 border-gray-700 h-full w-full rounded-lg mt-4 items-center justify-center">
      <div className="border-[1px] w-full h-full">
        <Timer />
      </div>
    </div>
  );
}

export default NextBoss;