import {cn} from "@/lib/utils";
import Skeleton from "@/components/skeleton";

export default function SkeletonCard({className}: {className?: string}) {
    return (<div className={"space-y-4"}>
        <Skeleton className={"h-12 w-12 rounded-full"} />
        <Skeleton className={"h-4 w-[250px]"} />
        <Skeleton className={"h-4 w-[200px]"} />
    </div>);
}