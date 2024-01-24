import React, {Suspense} from "react";
import H1 from "@/components/h1";
import EventsList from "@/components/eventsList";
import Loading from "@/app/events/loading";

type EventsPageProps = {
    params: {
        city: string;
    };
};
export default async function EventsPage({ params: {city} }: EventsPageProps)    {
    return (<main className={"flex flex-col items-center py-24 px-[20px] min-h-[110vh]"}>
            <H1 className={"mb-28"}>
                {city === 'all' && `Events ${city.toUpperCase()}`}
                {city !== 'all' && `Events ${city.charAt(0).toUpperCase() + city.slice(1)}`}
            </H1>
        <Suspense fallback={<Loading />}>
            <EventsList city={city}/>
        </Suspense>

    </main>);
}