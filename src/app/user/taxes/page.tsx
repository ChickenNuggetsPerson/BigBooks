import TaxesEditor, { TaxesEditor_Loading } from "@/components/taxes/TaxesEditor";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";



export default function SYSTaxPage() {

    return (
        <div className="py-5 px-20">
            <Link href={`/user`}>
                <MoveLeft color="black" />
            </Link>

            <div className="h-1"></div>

            <Suspense fallback={<TaxesEditor_Loading />}>
                <TaxesEditor sysTaxes />
            </Suspense>
        </div>
    )
}