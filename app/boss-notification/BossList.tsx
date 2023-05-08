import BossItem from "./bossItem/BossItem";

const BossList = () => {
  return (
    <div className="py-3 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <BossItem
        imageSrc={'/images/gorlon.webp'}
        title={'골론'}
        field={'베리넨 루미'}
        dropItemLink={'https://tales.nexon.com/News/DevNote/668'}
        time={['00:00', '06:00', '12:00', '18:00']}
      />
      <BossItem
        imageSrc={'/images/gormodap.webp'}
        title={'골모답'}
        field={'베리넨 루미'}
        dropItemLink={'https://tales.nexon.com/News/DevNote/668'}
        time={['05:00', '13:00', '21:00']}
      />
      <BossItem
        imageSrc={'/images/akan.webp'}
        title={'아칸'}
        field={'아크론 요새'}
        dropItemLink={'https://tales.nexon.com/News/DevNote/708'}
        time={['14:30', '21:30']}
      />
      <BossItem
        imageSrc={'/images/sperchend.webp'}
        title={'스페르첸드'}
        field={'아크론 지하 요새'}
        dropItemLink={'https://tales.nexon.com/News/DevNote/682'}
        time={['01:00', '04:00', '08:00', '16:00', '19:00', '23:00']}
      />
      <BossItem
        imageSrc={'/images/originofruin.webp'}
        title={'파멸의 기원'}
        field={'중앙 군영'}
        dropItemLink={'https://tales.nexon.com/News/DevNote/723'}
        time={['00:30', '11:00', '20:00']}
      />
    </div>
  );
}

export default BossList;