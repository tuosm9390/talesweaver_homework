'use client'

import axios from "axios";
import { useState } from "react";
import { toast } from 'react-hot-toast';
import HomeworkTable from "./HomeworkTable";

const HomeworkList = () => {
  const [name, setName] = useState('')
  const [char, setChar] = useState('루시안')
  const [dailyHomework, setDailyHomework] = useState([false, false, false, false, false, false, false])
  const [homeworkList, setHomeworkList] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = () => {
    setIsLoading(true);
    const data = { name, char }

    axios.post('/api/register', data)
      .then(() => {
        toast.success("Registered successfully.")
      })
      .catch((error) => {
        toast.error("Something went wrong.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="py-6 px-4 flex flex-col border-[1px] border-gray-700 w-full rounded-lg mt-4 items-center justify-center">
      <div className="flex flex-col text-xl font-bold pb-4 items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center pb-6">
          캐릭터를 등록하세요
          <div className="flex items-center justify-center">
            <label className="pr-2">
              캐릭명 :
            </label>
            <input
              type="text"
              className="mx-2 w-36 bg-transparent border-[1px] border-slate-600 rounded-lg"
              placeholder="캐릭명"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="px-2">
              캐릭 :
            </label>
            <select
              defaultValue={'루시안'}
              className="mx-2 bg-transparent border-[1px] border-slate-600 rounded-lg"
              onChange={(e) => setChar(e.target.value)}
            >
              <option value={'루시안'}>루시안</option>
              <option value={'보리스'}>보리스</option>
              <option value={'막시민'}>막시민</option>
              <option value={'시벨린'}>시벨린</option>
              <option value={'조슈아'}>조슈아</option>
              <option value={'란지에'}>란지에</option>
              <option value={'이자크'}>이자크</option>
              <option value={'밀라'}>밀라</option>
              <option value={'티치엘'}>티치엘</option>
              <option value={'이스핀'}>이스핀</option>
              <option value={'나야'}>나야</option>
              <option value={'아나이스'}>아나이스</option>
              <option value={'클로에'}>클로에</option>
              <option value={'벤야'}>벤야</option>
              <option value={'이솔렛'}>이솔렛</option>
              <option value={'로아미니'}>로아미니</option>
              <option value={'녹턴'}>녹턴</option>
              <option value={'리체'}>리체</option>
            </select>
            <button
              className="px-2 bg-slate-600 rounded-lg hover:bg-slate-300 hover:text-slate-900"
              onClick={onSubmit}
            >
              등록
            </button>
          </div>
        </div>
        <hr className="w-full" />
        <div className="text-xl font-bold pt-4">
          <HomeworkTable />
        </div>
      </div>
    </div>
  );
}

export default HomeworkList;