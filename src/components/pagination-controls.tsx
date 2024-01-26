import Link from "next/link";
import {ArrowLeftIcon, ArrowRightIcon} from "@radix-ui/react-icons";

export default async function PaginationControls({previousPath, nextPath} : { previousPath: string, nextPath: string}) {

    return (
        <section className={"flex items-center justify-between gap-x-10"}>
            { previousPath ? <Link href={previousPath} className={"flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm"}>
                <ArrowLeftIcon className={"w-5 h-5"}/>
                Previous
            </Link> : null }
            { nextPath ? <Link href={nextPath} className={"flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm "}>
                Next
                <ArrowRightIcon className={"w-5 h-5"}/>
            </Link> : null}
        </section>);
}