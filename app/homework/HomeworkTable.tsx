import UserHomework from "./UserHomework";

const HomeworkTable = () => {
  return (
    <table className="calculate-table">
      <thead className="text-lg">
        <tr>
          <th></th>
          <th></th>
          <th colSpan={7} className="px-1 text-center border-x-[1px]">일간 숙제</th>
          <th colSpan={3} className="px-1 text-center border-x-[1px]">주간 숙제</th>
          <th colSpan={3} className="px-1 text-center">어벤던로드</th>
        </tr>
        <tr>
          <th className="px-1 text-center w-36">캐릭명</th>
          <th className="px-1 text-center w-28 border-x-[1px]">캐릭</th>
          <th className="px-1 text-center w-20 border-x-[1px]">머루</th>
          <th className="px-1 text-center w-20 border-x-[1px]">클보</th>
          <th className="px-1 text-center w-20 border-x-[1px]">심틈</th>
          <th className="px-1 text-center w-20 border-x-[1px]">근원</th>
          <th className="px-1 text-center w-20 border-x-[1px]">허상</th>
          <th className="px-1 text-center w-20 border-x-[1px]">렐릭</th>
          <th className="px-1 text-center w-20 border-x-[1px]">발굴지</th>
          <th className="px-1 text-center w-20 border-x-[1px]">어비스</th>
          <th className="px-1 text-center w-20 border-x-[1px]">신조</th>
          <th className="px-1 text-center w-20 border-x-[1px]">카타콤</th>
          <th className="px-1 text-center w-20 border-x-[1px]">필멸</th>
          <th className="px-1 text-center w-20 border-x-[1px]">카디프</th>
          <th className="px-1 text-center w-20">오를란느</th>
        </tr>
      </thead>
      <tbody>
        <UserHomework
          userName={'호링v'}
          charType={'클로에'}
        /> 
        <UserHomework
          userName={'이랑♀'}
          charType={'클로에'}
        />
        <UserHomework
          userName={'계피D티치'}
          charType={'티치엘'}
        />
        <UserHomework
          userName={'짱찬v'}
          charType={'티치엘'}
        />
      </tbody>
    </table>
  );
}

export default HomeworkTable;