"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Player, Controls } from '@lottiefiles/react-lottie-player';

type AchievementCardProps = {
    title?: string;
    description?: string;
    info?: string;
    animation: string;
};

const AchievementCard: React.FC<AchievementCardProps> = (props) => {
    return (
        <Card className={'w-[300px] h-[250px]'}>
            <CardHeader>
                <CardTitle className={'md:text-sm text-center font-medium text-secondary-foreground text-xs'}>{props.title?.toUpperCase()}</CardTitle>
                <Player
                    autoplay
                    loop
                    src={props.animation}
                    style={{ height: '100px', width: '100px' }}
                >
                </Player>
            </CardHeader>
            <CardContent>
                <CardDescription className={'text-center sm:text-sm text-[10px]'}>{props.description}</CardDescription>
                <CardDescription className={'text-center sm:text-xs text-[8px] sm:p-2'}>{props.info}</CardDescription>
            </CardContent>
        </Card>
    );
};
export default AchievementCard;
