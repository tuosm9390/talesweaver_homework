import HomeworkList from "./HomeworkList";

const page = () => {
  return (
    <div className="text-4xl font-semibold">
      <div className="mb-10">
        숙제현황
        <HomeworkList />
      </div>
    </div>
  );
}

export default page;