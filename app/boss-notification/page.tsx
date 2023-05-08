import BossList from "./BossList";
import NextBoss from "./NextBoss";
import Timer from "./Timer";

const BossNotificationPage = () => {
  return (
    <div className="text-4xl font-semibold">
      <div className="boss-notification mb-10">
        보스 알리미
        <Timer />
      </div>
      <div className="next-boss-notification text-2xl font-medium mb-10">
        다음 필드보스
        <NextBoss />
      </div>
      <div className="boss-time text-2xl font-medium mb-10">
        필드보스 시간표
        <BossList />
      </div>
    </div>
  );
}

export default BossNotificationPage;