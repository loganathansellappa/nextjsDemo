import {EventoEvent} from "@/lib/types";
import EventCard from "./eventCard";
import {getEventsByCity} from "@/lib/utils";

type EventsListProps = {
    city: string;
};

export default async function EventsList({city} : EventsListProps) {
    const events: EventoEvent[] = await getEventsByCity(city);

    return (
        <section className={"flex max-w-[1100px] flex-wrap gap-10 justify-center px-[20]"}>
            {events.map((event) => <EventCard key={event.id} event={event}/>)}
        </section>);
}