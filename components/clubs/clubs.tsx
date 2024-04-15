"use client";
import React from "react";
// import { calsans } from "@/fonts/calsans";
import Image from "next/legacy/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
export function TracingBeamDemo() {
  return (
    <TracingBeam className="">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
            <p className={twMerge("text-xl mb-4")}>{item.title}</p>
            <div className="text-sm text-muted-foreground p-4 prose prose-sm dark:prose-invert flex justify-center flex-col items-center">
              {item?.image && (
                <div className="w-full flex m-4 items-center justify-center relative h-80 overflow-hidden rounded-xl mix-blend-difference">
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    style={{ objectFit: "contain" }}
                    objectFit="contain"
                  />
                </div>
              )}
              {item.description}
            </div>
            <div className="flex flex-col justify-center items-center gap-2 m-2">
              <div className="text-2xl">Secretaries</div>
              <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={item.people} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Club of Programmers (COPS)",
    people: [
      {
        id: 1,
        name: "Eshaan Aggarwal",
        designation: "Secretary",
        image: "/clubs/COPS/Helm/SECYCOPS.jpeg",
      },
      {
        id: 2,
        name: "Aakash Sharma",
        designation: "Joint Secretary",
        image: "/clubs/COPS/Helm/Jt.secyCOPS.jpeg",
      },
      {
        id: 3,
        name: "Anshiv Singla",
        designation: "Joint Secretary",
        image: "/clubs/COPS/Helm/JTSECY2.jpeg",
      },
    ],
    description: (
      <>
        <p>
          COPS is a thriving community at the Indian Institute of Technology
          (BHU), Varanasi, dedicated to fostering programming excellence. Our
          mission is to empower members with skills, knowledge, and
          opportunities in programming and software development. Through
          workshops, competitions, hackathons, and collaborative projects, we
          nurture creativity, problem-solving, and lifelong learning. Whether
          you&apos;re a beginner or seasoned coder, join us to grow, connect,
          and excel in the dynamic world of technology. Connect with us on
          social media and email to get involved and unlock your programming
          potential!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/COPS/COPSLOGO.jpg",
  },
  {
    title: "The Quant Club",
    people: [
      {
        id: 1,
        name: "Yashwini Bansal",
        designation: "Secretary",
        image: "/clubs/QuantClub/Helm/QuantClub1.jpeg",
      },
      {
        id: 2,
        name: "Kinshuk Bansal",
        designation: "Joint Secretary",
        image: "/clubs/QuantClub/Helm/QuantClub2.jpeg",
      },
      {
        id: 3,
        name: "Shrey Gupta",
        designation: "Joint Secretary",
        image: "/clubs/QuantClub/Helm/QuantClub3.jpeg",
      },
    ],
    description: (
      <>
        <p>
          The Quant Club at the Indian Institute of Technology (BHU), Varanasi,
          is a dynamic community dedicated to advancing quantitative finance and
          analytics. Our mission is to provide members with the knowledge,
          skills, and resources needed to excel in the field of quantitative
          analysis and financial modeling. Through workshops, seminars,
          competitions, and collaborative projects, we aim to foster a culture
          of innovation, critical thinking, and problem-solving. Whether
          you&apos;re interested in algorithmic trading, risk management, or
          data analytics, the Quant Club offers a platform for learning,
          networking, and hands-on experience. Join us to explore the exciting
          world of quantitative finance and analytics, connect with like-minded
          peers, and prepare for a successful career in this rapidly evolving
          field. Connect with us on social media and email to get involved and
          unleash your potential in quantitative finance and analytics!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/QuantClub/QuantLogo.png",
  },
  {
    title: "Astronomy Club",
    people: [
      {
        id: 1,
        name: "Manash Kumar",
        designation: "Secretary",
        image: "/clubs/Astro/Manash Kumar_Secretary_Astro.jpg",
      },
      {
        id: 2,
        name: "Prayash Dash",
        designation: "Joint Secretary",
        image: "/clubs/Astro/Prayash-Dash_Joint-Secretary-Astro.jpg",
      },
      {
        id: 3,
        name: "Yuvraj Singh",
        designation: "Joint Secretary",
        image: "/clubs/Astro/Yuvraj Singh_Joint Secretary.jpg",
      },
    ],
    description: (
      <>
        <p>
          The Astronomy Club at the Indian Institute of Technology (BHU),
          Varanasi, is a stellar community passionate about exploring the
          mysteries of the cosmos. Our mission is to ignite curiosity, inspire
          awe, and promote scientific inquiry through stargazing sessions,
          workshops, and educational outreach programs. Whether you&apos;re
          fascinated by celestial phenomena, astrophotography, or space
          exploration, the Astronomy Club offers a gateway to the wonders of the
          universe. Join us to gaze at distant galaxies, witness cosmic events,
          and deepen your understanding of the cosmos. Connect with us on social
          media and email to get involved and embark on an astronomical journey
          of discovery!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/Astro/astro-logo-white.png",
  },
  {
    title: "180 Degrees Consulting",
    people: [
      {
        id: 1,
        name: "John Doe",
        designation: "Software Engineer",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Product Manager",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "Data Scientist",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
    ],
    description: (
      <>
        <p>
          180 Degrees Consulting at the Indian Institute of Technology (BHU),
          Varanasi, is a dynamic organization dedicated to making a difference
          through consulting projects. Our mission is to leverage the skills and
          talents of our members to provide high-impact consulting services to
          non-profits, social enterprises, and community organizations. Through
          hands-on projects, workshops, and mentorship programs, we aim to
          empower our members with real-world consulting experience and
          leadership opportunities. Whether you&apos;re passionate about social
          impact, business strategy, or project management, 180 Degrees
          Consulting offers a platform to apply your skills, drive positive
          change, and make a meaningful impact in the world. Join us to become
          part of a global network of changemakers and contribute to building a
          better future. Connect with us on social media and email to get
          involved and unleash your potential in consulting for social good!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/180DC/180DCLogo.png",
  },
  {
    title: "Club Of Sustainability and Innovation",
    people: [
      {
        id: 1,
        name: "Pragya Singh",
        designation: "Secretary",
        image: "/clubs/CSI/PragyaSingh_CSI_Secretary.jpg",
      },
      {
        id: 2,
        name: "Reethu Jahnavi",
        designation: "Joint Secretary",
        image: "/clubs/CSI/Reethu Jahnavi_CSI_Jt_Secretary.jpeg",
      },
      {
        id: 3,
        name: "Aditya Aryaman",
        designation: "Joint Secretary",
        image: "/clubs/CSI/Aditya_Aryaman_Das_CSI-Jt_Secretary.png",
      },
    ],
    description: (
      <>
        <p>
          The Club Of Sustainability and Innovation at the Indian Institute of
          Technology (BHU), Varanasi, is a forward-thinking community committed
          to driving positive change through sustainable practices and
          innovative solutions. Our mission is to raise awareness, foster
          collaboration, and implement projects that promote environmental
          conservation, social responsibility, and technological innovation.
          Through workshops, campaigns, and hands-on initiatives, we aim to
          empower our members to become leaders in sustainability and
          innovation. Whether you&apos;re passionate about renewable energy,
          waste management, or eco-friendly technology, the Club Of
          Sustainability and Innovation provides a platform to turn your ideas
          into action. Join us to make a difference, inspire others, and create
          a greener, more sustainable future for all. Connect with us on social
          media and email to get involved and unleash your potential in
          sustainability and innovation!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/CSI/CSILogo.jpg",
  },
  {
    title: "Aeromodelling Club",
    people: [
      {
        id: 1,
        name: "Devyan Mishra",
        designation: "Secretary",
        image: "/clubs/AMC/Devyan Mishra_Secretary_AMC.jpeg",
      },
      {
        id: 2,
        name: "Aryan Kumar",
        designation: "Joint Secretary",
        image: "/clubs/AMC/Aryan Kumar_Joint Secy_AMC.jpg",
      },
      {
        id: 3,
        name: "Harsh Panchal",
        designation: "Joint Secretary",
        image: "/clubs/AMC/HARSH_PANCHAL_JOINT SECRETARY_AMC.jpg",
      },
    ],
    description: (
      <>
        <p>
          The Aeromodelling Club at the Indian Institute of Technology (BHU),
          Varanasi, is a high-flying community dedicated to the art and science
          of aviation. Our mission is to inspire creativity, foster innovation,
          and provide hands-on experience in designing, building, and flying
          model aircraft. Through workshops, competitions, and flight
          demonstrations, we aim to cultivate a passion for aeromodelling and
          aerospace engineering. Whether you&apos;re interested in
          remote-controlled planes, drones, or rocketry, the Aeromodelling Club
          offers a platform to soar to new heights. Join us to learn, create,
          and explore the thrilling world of flight. Connect with us on social
          media and email to get involved and unleash your potential in
          aeromodelling!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/AMC/Logo.png",
  },
  {
    title: "Science Of Automotive Engineering (SAE)",
    people: [
      {
        id: 1,
        name: "Aman Srivastava",
        designation: "Joint Secretary",
        image: "/clubs/SAE/Aman_Srivastava_JointSecretary.png",
      },
      {
        id: 2,
        name: "Anshuman Chaurasia",
        designation: "Joint Secretary",
        image: "/clubs/SAE/Anshuman_Chaurasia_Jt.secy.jpg",
      },
      {
        id: 3,
        name: "Shruti Jha",
        designation: "Secretary",
        image: "/clubs/SAE/Shruti_Jha_Secretary.jpg",
      },
    ],
    description: (
      <>
        <p>
          The Science of Automotive Engineering at the Indian Institute of
          Technology (BHU), Varanasi, is a dynamic community passionate about
          exploring the cutting-edge technologies and innovations in the
          automotive industry. Our mission is to delve into the science,
          engineering, and design aspects of automobiles, ranging from
          conventional vehicles to electric and autonomous systems. Through
          workshops, seminars, and hands-on projects, we aim to deepen our
          understanding of automotive engineering principles and applications.
          Whether you&apos;re interested in vehicle dynamics, powertrain
          systems, or automotive electronics, the Science of Automotive
          Engineering club offers a platform to delve into the fascinating world
          of automobiles. Join us to learn, collaborate, and innovate in the
          realm of automotive technology. Connect with us on social media and
          email to get involved and drive forward the future of mobility!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/SAE/SAELogo.png",
  },
];
