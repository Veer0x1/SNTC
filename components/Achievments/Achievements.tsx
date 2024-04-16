import AchievementCard from "../cards/AchievementsCard";

const goldAnimation =
  "https://lottie.host/fa9ce34a-f92e-401a-8ce6-0862941394fe/MhTkiixIXR.json";
const silverAnimation =
  "https://lottie.host/a141709b-c57c-42c9-9eaa-3cc55280ae13/SV2bPqESR2.json";
const bronzeAnimation =
  "https://lottie.host/d152d84e-059d-43c6-9cd6-39f40f62a106/l5lgH7DotG.json";
const AchievmentsData = [
  {
    title: "Gold Medal",
    description: "Inter-IIT Tech-Meet 9.0",
    info: "Product Folks' Case Study Challenge",
    animation: goldAnimation,
  },
  {
    title: "Gold Medal",
    description: "Inter-IIT Tech-Meet 9.0",
    info: "Product Management and Business Strategy Event",
    animation: goldAnimation,
  },
  {
    title: "Gold Medal",
    description: "Grow Simplee",
    animation: goldAnimation,
  },
  {
    title: "Silver Medal",
    description: "CloudPhysician",
    animation: silverAnimation,
  },
  {
    title: "Bronze Medal",
    description: "Silicon Lab Entrepreneurship Challenge",
    animation: bronzeAnimation,
  },
  {
    title: "Bronze Medal",
    description: "Paradime.io",
    animation: bronzeAnimation,
  },
  {
    title: "Bronze Medal",
    description: "Saptang Labs",
    animation: bronzeAnimation,
  },

  {
    title: "Silver Medal",
    description: "Consensys",
    animation: bronzeAnimation,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="flex justify-center px-4">
      <div className="container px-6 py-6">
        <header className="text-center m-4 mb-8">
          <h2 className="font-semibold md:text-6xl">Achievements</h2>
        </header>
        <div className="place-items-center flex flex-wrap flex-row content-center justify-center items-center my-0 mx-auto relative touch-none gap-[32px]">
          {AchievmentsData.map((data, index) => (
            <AchievementCard
              key={index}
              title={data.title}
              description={data.description}
              animation={data.animation}
              info={data.info}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
