import { TracingBeamDemo, TracingBeamDemoOrg } from "@/components/clubs/clubs";
import { TypewriterEffectSmooth } from "@/components/ui/text-generate-effect";

export default function Clubs() {
  const words = [
    {
      text: "Clubs",
      className: "text-3xl sm:text-6xl",
    },
    {
      text: "under",
      className: "text-3xl sm:text-6xl",
    },
    {
      text: "SNTC",
      className: "text-primary text-3xl sm:text-6xl",
    },
  ];
  const words1 = [
    {
      text: "Organizations",
      className: "text-3xl sm:text-6xl",
    },
    {
      text: "under",
      className: "text-3xl sm:text-6xl",
    },
    {
      text: "SNTC",
      className: "text-primary text-3xl sm:text-6xl",
    },
  ];

  return (
    <>
      <div className="container py-6 px-6">
        <div className="flex justify-center align-middle sm:mt-12 m-4 p-4">
          <TypewriterEffectSmooth words={words} />
        </div>
        <TracingBeamDemo clubsData={clubsData} />
        <div className="flex justify-center align-middle sm:mt-12 m-4 p-4">
          <TypewriterEffectSmooth words={words1} />
        </div>
        <TracingBeamDemoOrg orgsData={orgsData} />
      </div>
      <div className="h-28"></div>
    </>
  );
}

const clubsData = [
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
    title: "Robotics Club",
    people: [
      {
        id: 1,
        name: "Dhruv Jain",
        designation: "Secretary",
        image: "/clubs/Robotics/Dhruv_Jain_Joint_Secretary.jpg",
      },
      {
        id: 2,
        name: "Hemanth Patel",
        designation: "Joint Secretary",
        image: "/clubs/Robotics/Hemanth_Patel_Secy.jpeg",
      },
      {
        id: 3,
        name: "Vaibhav Gupta",
        designation: "Joint Secretary",
        image: "/clubs/Robotics/Vaibhav_Gupta_Jt.Secy.jpg",
      },
    ],
    description: (
      <>
        <p>
          Our club is dedicated to empowering students with the knowledge and
          skills necessary to thrive in the rapidly-evolving field of robotics.
          Whether you are a seasoned robotics enthusiast or just starting out,
          you all will find a wealth of opportunities for learning and growth
          within our club. From participating in hands-on projects and
          workshops, to learning from industry experts through guest lectures,
          to competing in coding competitions, the Robotics Club at IIT BHU is
          your launchpad for a successful career in robotics.
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/Robotics/RoboLogo.jpg",
  },
  {
    title: "Business Club",
    people: [
      {
        id: 1,
        name: "Dnyanada Deshpande",
        designation: "Joint Secretary",
        image: "/clubs/Biz/Helm/Dnyanada_Deshpande.jpg",
      },
      {
        id: 2,
        name: "Prateek Ray",
        designation: "Joint Secretary",
        image: "/clubs/Biz/Helm/PrateekRay.jpg",
      },
      {
        id: 3,
        name: "Vedant Bhoruka",
        designation: "Secretary",
        image: "/clubs/Biz/Helm/VedantBhoruka.jpg",
      },
    ],
    description: (
      <>
        <p>
          Empower yourself with the knowledge and skills to succeed in the
          business world through the Business Club at IIT BHU. Our club is
          dedicated to promoting an understanding of the business landscape and
          providing students with the tools necessary to succeed in the
          competitive and rapidly-changing world of business. From guest
          lectures by industry leaders to hands-on projects and workshops,
          students can gain a well-rounded understanding of the business world
          and develop the skills necessary to thrive in the workplace.Join us in
          our mission to equip the next generation of business leaders with the
          knowledge and skills necessary to succeed in the global marketplace.
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/Biz/bizzLogo.svg",
  },
  {
    title: "Club Of Sustainability and Innovation",
    people: [
      {
        id: 1,
        name: "Reethu Jahnavi",
        designation: "Joint Secretary",
        image: "/clubs/CSI/Reethu Jahnavi_CSI_Jt_Secretary.jpeg",
      },
      {
        id: 2,
        name: "Aditya Aryaman",
        designation: "Secretary",
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
    image: "/clubs/CSI/CSILogo.JPG",
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
    image: "/clubs/AMC/LOGO.png",
  },
  {
    title: "Society Of Automotive Engineering (SAE)",
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
          The Society of Automotive Engineering at the Indian Institute of
          Technology (BHU), Varanasi, is a dynamic community passionate about
          exploring the cutting-edge technologies and innovations in the
          automotive industry. Our mission is to delve into the science,
          engineering, and design aspects of automobiles, ranging from
          conventional vehicles to electric and autonomous systems. Through
          workshops, seminars, and hands-on projects, we aim to deepen our
          understanding of automotive engineering principles and applications.
          Whether you&apos;re interested in vehicle dynamics, powertrain
          systems, or automotive electronics, the Society of Automotive
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
        image: "/clubs/Astro/yuvraj Singh_Joint Secretary.jpg",
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
];

const orgsData = [
  {
    title: "180 Degrees Consulting",
    people: [],
    description: (
      <>
        <p>
          180DC Consulting (IIT-BHU), the world&apos;s largest student-run
          consultancy, stands as a powerhouse for positive change. Empowered by
          the closely-knit team, they tackle challenges faced by
          socially-focussed organisations and startups by crafting innovative
          solutions that unlock their potential and maximise their impact. Why
          is it called 180 Degrees? It&apos;s because they work to turn good
          organisations into great organisations, challenges into opportunities
          and ideas into reality! Get ready to boost your elite consulting
          skills with hands-on industry experience. You&apos;ll be part of a
          passionate and driven team that celebrates its successes, both inside
          and outside the boardroom!
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/180DC/180DCLogo.png",
  },

  {
    title: "Future Leaders",
    people: [],
    description: (
      <>
        <p>
          Future Leaders Program is a students-led leadership organisation at
          IIT BHU that cultivates leaders who understand that success is not
          just about profit, but about creating positive change. Their mission
          is to empower students to balance ambition with social good, building
          a future where business and social impact go hand in hand. Through
          training modules and various resources, Future Leaders Program
          empowers students to achieve excellence while creating a ripple effect
          for good. Consulting is all about networking, and at IIT BHU, this is
          where you start.
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/share/share.jpeg",
  },
  {
    title: "The Product Folks",
    people: [],
    description: (
      <>
        <p>
          The Product Folks is Asia&apos;s largest volunteer-driven community of
          product leaders and founders who are passionate about building global
          products and helping everyone grow together. At the TPF X IIT (BHU)
          Chapter, we are nurturing the product leaders of tomorrow. We strive
          to spread awareness about product management and promote learning by
          doing. Through our initiatives our goal is to help every PM enthusiast
          on campus become better, whether they are seasoned or are just
          beginning their journey. Connect with us on our socials and join us to
          ignite your product sense and start building inspiring products for
          the world.
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/TPF/TPF_logo.png",
  },
  {
    title: "Finshots",
    people: [],
    description: (
      <>
        <p>
          Finshots is a financial news media company that publishes daily
          newsletter on the most Important Financial and Business News in simple
          words. The collaboration of Finshots X Business Club IIT- BHU brings
          the College Weekly Newsletter exclusive for the students of IIT-BHU
          including Current Business and Financial News Breakdown, Money Tips
          and Jagron of the Week to educate the students.
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/finshots/finshots.png",
  },
  {
    title: "HULT Prize",
    people: [],
    description: (
      <>
        <p>
          The Hult Prize is a beacon of opportunity for aspiring social
          entrepreneurs worldwide. With its grand prize of 1 million US dollars
          and a vast network spanning over 3000 campuses globally, it encourages
          innovation and impact. The OnCampus team oversees publicity, organizes
          campus rounds like at IIT (BHU) Varanasi, and facilitates local
          programs. A new problem statement is released yearly, motivating teams
          to devise solutions around critical issues such as food security,
          water access, energy, the environment, and education. Students tackle
          global challenges through participation and gain invaluable insights,
          connections, and personal growth opportunities within a diverse
          entrepreneurial community.
        </p>
      </>
    ),
    badge: "",
    image: "/clubs/HULT/hult.png",
  },
];
