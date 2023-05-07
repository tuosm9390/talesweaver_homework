import CalculateTable from "./CalculateTable";

const Calculate = () => {

  return (
    <div className="py-6 px-4 flex flex-col border-[1px] border-gray-700 w-full rounded-lg mt-4 items-center justify-center">
      <div className="text-xl font-bold pb-4">
        <span>각 종류의 갯수를 입력하세요.</span> <br />
        <span className="text-sm font-light text-yellow-200">우즈 : 방랑상인 거래가 * 1.6(60%)</span> <br />
        <span className="text-sm font-light text-yellow-200">플링 : 우즈 거래가 * 1.125(12.5%) - 방랑상인 1.8배(80%)</span>
      </div>
      <hr className="w-full" />
      <div className="text-xl font-bold pt-4">
        <table className="calculate-table">
          <thead className="text-lg">
            <tr>
              <th className="px-1 text-center">품목</th>
              <th className="px-1 text-center border-x-[1px]">개수</th>
              <th className="px-1 text-center border-x-[1px]">방랑상인</th>
              <th className="px-1 text-center border-x-[1px]">우즈</th>
              <th className="px-1 text-center">플링</th>
            </tr>
          </thead>
          <tbody>
            <CalculateTable price={4500} name='무스켈의 파편' />
            <CalculateTable price={4500} name='카타콤 석화 조각' />
            <CalculateTable price={4500} name='악마의 흔적' />
            <CalculateTable price={4875} name='프시키의 잔해' />
            <CalculateTable price={18750} name='저주받은 언데드의 심장' />
            <CalculateTable price={625000} name='키메라의 잔해' />
            <CalculateTable price={625000} name='아크론 요새의 잔해' />
            <CalculateTable price={6337} name='신조의 가루' />
            <CalculateTable price={6250000} name='마력 결정 조각' />
            <CalculateTable price={787500} name='아카드 아티팩트' />
            <CalculateTable price={1443750} name='엔키라 장비' />
            <CalculateTable price={1968750} name='엔키라 칼라그 장비' />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Calculate;