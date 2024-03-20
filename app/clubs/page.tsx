import { TracingBeamDemo } from "@/components/clubs/clubs"
import { TypewriterEffectSmooth } from "@/components/ui/text-generate-effect";

export default function Clubs() {
    const words = [
        {
            text: "Clubs",
        },
        {
            text: "under",
        },
        {
            text: "SNTC",
            className: "text-yellow-400 dark:text-yellow-400",
        },
    ];
  return (
    <>
      <div className="container py-6 px-6">
        <div className="flex justify-center align-middle m-4 p-4">
        <TypewriterEffectSmooth words={words}/>
        </div>
        <TracingBeamDemo />
      </div>
    </>
  )
}
