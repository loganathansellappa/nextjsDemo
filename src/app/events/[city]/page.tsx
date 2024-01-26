import React, {Suspense} from "react";
import H1 from "@/components/h1";
import EventsList from "@/components/eventsList";
import Loading from "@/app/events/loading";
import {z} from "zod";

type EventsPageProps = {
    params: {
        city: string;
    },
    searchParams: { [key: string]: string | string[] | undefined},
};

const pageNumberSchema = z.coerce.number().int().positive().optional();


export async function generateMetadata({ params: {city} }: EventsPageProps) {
    return {
        title: `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
        description: `Browse events in ${city.charAt(0).toUpperCase() + city.slice(1)}`,
    };
};

export default async function EventsPage({ params: {city}, searchParams }: EventsPageProps)    {
    const parsedPage = pageNumberSchema.safeParse(searchParams.page);
    if (!parsedPage.success) {
        throw new Error("Invalid page number");
    }
    return (<main className={"flex flex-col items-center py-24 px-[20px] min-h-[110vh]"}>
            <H1 className={"mb-28"}>
                {city === 'all' && `Events ${city.toUpperCase()}`}
                {city !== 'all' && `Events ${city.charAt(0).toUpperCase() + city.slice(1)}`}
            </H1>
        <Suspense fallback={<Loading />} key={city+parsedPage.data}>
            <EventsList city={city} page={parsedPage.data as number} />
        </Suspense>
    </main>);
}