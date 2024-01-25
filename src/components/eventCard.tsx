"use client";

import {EventoEvent} from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

type EventCardProps = {
    event: EventoEvent;
};

const MotionLink = motion(Link)
export default function EventCard({ event }: EventCardProps) {
    const date = new Date(event.date) ? new Date(event.date).toLocaleString('en-US',{day: "2-digit"}) : 0;
    const month = new Date(event.date) ? new Date(event.date).toLocaleString('en-US',{month: "short"}) : 0;
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.5 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const scaleOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    return (
        <MotionLink href={`/event/${event.slug}`} className={"flex-1 h-[380px] basis-80"} ref={ref} style={{
            // @ts-ignore
            scale: scaleProgress,
            // @ts-ignore
            opacity: scaleOpacity,
        }} initial={{
            opacity: 0,
            scale: 0.8
        }}>
            <section key={event.id}
                     className={"w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects"}>
                <Image src={event.imageUrl} alt={event.name} width={500} height={280}
                       className={"h-[60%] object-cover"}/>
                <div className={"flex flex-col flex-1 justify-center items-center"}>
                    <h2 className={"text-2xl font-semibold"}>{event.name}</h2>
                    <p className={"italic text-white/75"}>{event.organizerName}</p>
                    <p className={"tex-sm text-white/50 mt-4"}>{event.location}</p>
                </div>
                <section
                    className={"absolute flex justify-center items-center flex-col top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md"}>
                    <p className={"text-xl font-bold -mb-[5px]"}>
                        {date}

                    </p>
                    <p className={"text-xs uppercase text-accent"}>{month}</p>
                </section>
            </section>
        </MotionLink>
    );
}