import TaxesEditor, { TaxesEditor_Loading } from "@/components/taxes/TaxesEditor";
import { Suspense } from "react";


export default function OrgTaxPage() {


    return (
        <Suspense fallback={<TaxesEditor_Loading/>}>
            <TaxesEditor />
        </Suspense>
    )
}