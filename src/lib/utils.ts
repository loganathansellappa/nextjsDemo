import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {EventoEvent} from "@/lib/types";

export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(classes))
}

export async function getEventsByCity(city: string) {
    const req = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`);
    const events: EventoEvent[] = await req.json();
    return events;
}

export async function getEventsBySlug(slug: string) {
    const req = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
    const event: EventoEvent = await req.json();
    return event;
}