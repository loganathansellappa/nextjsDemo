import Image from "next/image";
import {EventoEvent} from "@/lib/types";
import H1 from "@/components/h1";

type EventsPageProps = {
    params: {
        slug: string;
    }

}
export default async function  EventsPage({params: {slug}}: EventsPageProps) {
    const req = await fetch(`https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`);
    const event: EventoEvent = await req.json();
    return (<main>
            <section className={"relative overflow-hidden flex justify-center items-center py-14 md:py-20"}>
                <Image src={event.imageUrl}
                       className="object-cover blur-2xl overflow-hidden z-0"
                       alt={event.name}
                       quality={50}
                       priority
                       fill sizes="(max-width: 1280) 100vw, 1280px"/>
                <div className={"z-1 relative flex-col flex gap-6 lg:gap-16 lg:flex-row "}>
                    <Image
                        className={"rounded-xl border-2/[50%] object-cover"}
                        src={event.imageUrl} alt={event.name} width={300} height={201}/>
                    <div className={"flex flex-col"}>
                        {
                            new Date(event.date)
                                .toLocaleString('en-US',
                                    {weekday: "long", month: "long", day: "numeric"}
                                )
                        }
                        <H1 className={"mb-2 mt-1 whitespace-nowrap lg:text-5xl"}>{event.name}</H1>
                        <p className={"whitespace-nowrap text-xl text-white/75"}> Organized by <span className={'italic'}>{event.organizerName}</span></p>
                        <button
                            className={'bg-white/10 text-lg capitalize bg-blur mt-5 ' +
                                'lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects'}
                        >Get Tickets</button>
                    </div>
                </div>
            </section>
        <div className={"text-center px-5 py-16"}>

            <Section >
                <SectionHeading>About this event</SectionHeading>
                <SectionContent>{event.description}</SectionContent>
            </Section>
            <Section >
                <SectionHeading>Location</SectionHeading>
                <SectionContent>{event.location}</SectionContent>
            </Section>
        </div>
    </main>);
}

function Section({children }: {children: React.ReactNode}) {
    return <section className={"mb-12"}>{children}</section>
}

function SectionHeading({children }: {children: React.ReactNode}) {
    return <h2 className={"text-2xl m-b-8"}>{children}</h2>
}

function SectionContent({children }: {children: React.ReactNode}) {
    return <h2 className={"max-w-4xl mx-auto text-lg leading-8 text-white/75"}>{children}</h2>
}