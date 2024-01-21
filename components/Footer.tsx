import React, { FunctionComponent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Instagram,Linkedin,Facebook,Youtube } from "lucide-react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import Image from "next/image";

const links = [
    { icon: <Instagram color="#cd486b" />, href: "https://www.instagram.com/sntc.iitbhu/?hl=en" },
    { icon: <Linkedin color="#0077b5" />, href: "https://www.linkedin.com/company/science-and-technology-council-iit-bhu-varanasi/?originalSubdomain=in" },
    { icon: <Facebook color="#1877F2" />, href: "https://www.facebook.com/sntc.iitbhu/" },
    { icon: <Youtube color="#CD201F" />, href: "https://www.youtube.com/@scienceandtechnologycounci2602" },
];
interface OwnProps {}

type Props = OwnProps;

const Footer: FunctionComponent<Props> = (props) => {
    return (
        <footer className="flex justify-center px-4">
            <div className="container px-6 py-6">
                <h1 className="text-lg font-bold text-center lg:text-2xl">
                    Join 31,000+ other and never miss <br /> out on new tips, tutorials,
                    and more.
                </h1>
                <div className="flex justify-center items-center m-1">
                    <div className="flex max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Email" className="md:w-[16rem]" />
                        <Button type="submit">Subscribe</Button>
                    </div>
                </div>

                <hr className="h-px bg-primary border-none my-7 dark:bg-gray-700" />

                <div className="flex flex-col items-center justify-between md:flex-row">
                    <a href="#">
                        <Image
                            className="w-auto h-7"
                            width={150}
                            height={150}
                            src={logo}
                            alt="Science and technology council IIT BHU Varanasi logo"
                        />
                    </a>

                    <div className="flex mt-4 md:m-0">
                        <div className="-mx-4 flex justify-between items-center">
                            {links.map((link, index) => (
                                <Link
                                    key={index}
                                    href={link.href}
                                    className="hover:scale-125 transition ease-in-out mr-4 ml-4"
                                    target="_blank"
                                >
                                    {link.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;