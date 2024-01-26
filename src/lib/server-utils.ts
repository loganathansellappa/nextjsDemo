
import "server-only";
import prisma from "@/lib/db";
import {notFound} from "next/navigation";
import {unstable_cache} from "next/cache";
export const getEventsByCity=  unstable_cache(async (city: string, page: number = 1) => {
    const formattedCity: string | undefined = city == 'all' ? undefined : city;
    const events = await prisma.eventoEvent.findMany({
        where: {
            city: formattedCity
        },
        orderBy: {createdAt: 'asc'},
        take: 6,
        skip: (page - 1) * 6
    });
    const totalCount = await getEventCountByCity(formattedCity);
    // const req = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
    // const events: EventoEvent[] = await req.json();
    return {
        events,
        totalCount
    };
});

export const getEventCountByCity=  unstable_cache(async (city: string | undefined) => {
    const count = await prisma.eventoEvent.count({
        where: {
            city: city
        }
    });
    // const req = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
    // const events: EventoEvent[] = await req.json();
    return count;
});

export async function getEventsBySlug(slug: string) {
    const event = await prisma.eventoEvent.findUnique({
        where: {
            slug: slug
        }
    });
    if (!event) {
        notFound();
    }
    // const req = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
    // const event: EventoEvent = await req.json();
    return event;
}