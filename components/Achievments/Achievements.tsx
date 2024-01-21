import AchievementCard from "../cards/AchievementsCard"

const Achievments = () =>{
    return (
        <div className="w-screen min-h-screen bg-[#0C0A1A] place-items-center text-[#C3C3D5] flex flex-wrap flex-row content-center justify-center items-center px-[2rem] pb-[2rem] pt-[70px] my-0 mx-auto relative touch-none gap-[32px]">
        <AchievementCard/>
        <AchievementCard/>
        <AchievementCard/>
        <AchievementCard/>
        </div>
    )
}
export default Achievments;