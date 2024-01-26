import {EventoEvent} from "@/lib/types";
import EventCard from "./eventCard";
import PaginationControls from "@/components/pagination-controls";
import {getEventsByCity} from "@/lib/server-utils";

type EventsListProps = {
    city: string;
    page: number;
};

export default async function EventsList({city, page = 1} : EventsListProps) {
    const  {events, totalCount} =  await getEventsByCity(city, page);
    const previousPath = page > 1 ? `/events/${city}?page=${+page - 1}` : "";
    const nextPath =
        totalCount > 6 * page ? `/events/${city}?page=${+page + 1}` : "";

    return (
        <section className={"flex max-w-[1100px] flex-wrap gap-10 justify-center px-[20]"}>
            {events.map((event) => <EventCard key={event.id} event={event}/>)}
            <PaginationControls previousPath={previousPath} nextPath={nextPath}/>
        </section>);
}