import AchievementCard from "../cards/AchievementsCard";
import GoldMedal from "@/public/medals/gold.svg";
import BronzeMedal from "@/public/medals/bronze.svg";

const AchievmentsData = [
  {
    title: "Gold Medal Inter-IIT Tech-Meet 9.0",
    description:
      "Product Folks' Case Study Challenge.",
    icon:GoldMedal,
  },
  {
    title: "Gold Medal Inter-IIT Tech-Meet 9.0",
    description:
    "Product Management and Business Strategy Event",
    icon: GoldMedal,
  },
  {
    title: "Bronze Medal",
    description:
      "Silicon Lab Entrepreneurship Challenge",
    icon: BronzeMedal,
  },
];

const Achievments = () => {
  return (
    <section className="flex justify-center px-4">
      <div className="container px-6 py-6">
        <header className="text-center m-4 mb-8">
          <h2 className="font-semibold text-6xl">Achievements</h2>
        </header>
        <div className="place-items-center flex flex-wrap flex-row content-center justify-center items-center my-0 mx-auto relative touch-none gap-[32px]">
          {AchievmentsData.map((data, index) => (
            <AchievementCard
                key={index}
                title={data.title}
                description={data.description}
                icon={data.icon}
            />
            ))}
        </div>
      </div>
    </section>
  );
};
export default Achievments;
