import {EventoEvent} from "@/lib/types";
import EventCard from "./eventCard";

type EventsListProps = {
    city: string;
};

export default async function EventsList({city} : EventsListProps) {
    const req = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
    const events: EventoEvent[] = await req.json();

    return (
        <section className={"flex max-w-[1100px] flex-wrap gap-10 justify-center px-[20]"}>
            {events.map((event) => <EventCard key={event.id} event={event}/>)}
        </section>);
}