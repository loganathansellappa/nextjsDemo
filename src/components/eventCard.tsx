import {EventoEvent} from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

type EventCardProps = {
    event: EventoEvent;
};

export default function EventCard({ event }: EventCardProps) {
    const date = new Date(event.date) ? new Date(event.date).toLocaleString('en-US',{day: "2-digit"}) : 0;
    const month = new Date(event.date) ? new Date(event.date).toLocaleString('en-US',{month: "short"}) : 0;

    return (
        <Link href={`/event/${event.slug}`} className={"flex-1 h-[380px] basis-80"}>
            <section key={event.id} className={"w-full h-full flex flex-col bg-white/[3%] rounded-xl overflow-hidden relative state-effects"}>
                <Image src={event.imageUrl} alt={event.name} width={500} height={280} className={"h-[60%] object-cover"} />
                <div className={"flex flex-col flex-1 justify-center items-center"}>
                    <h2 className={"text-2xl font-semibold"}>{event.name}</h2>
                    <p className={"italic text-white/75"}>{event.organizerName}</p>
                    <p className={"tex-sm text-white/50 mt-4"}>{event.location}</p>
                </div>
                <section className={"absolute flex justify-center items-center flex-col top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md"}>
                    <p className={"text-xl font-bold -mb-[5px]"}>
                        {date }

                    </p>
                    <p className={"text-xs uppercase text-accent"}>{month}</p>
                </section>
            </section>
        </Link>
    );
}