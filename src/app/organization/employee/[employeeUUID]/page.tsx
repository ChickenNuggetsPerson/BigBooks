import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import EmployeeView, { EmployeeView_Loading } from "@/components/Employee/EmployeePage/EmployeeView";


export default async function EmployeePage({
    params,
}: {
    params: Promise<{ employeeUUID: string }>
}) {

    const empUUID = (await params).employeeUUID

    return (
        <div>
            <Link href={`/organization/employee`}>
                <MoveLeft />
            </Link>

            <div className="w-full flex flex-row justify-center">
                <Suspense fallback={<EmployeeView_Loading />}>
                    <EmployeeView empUUID={empUUID} />
                </Suspense>
            </div>

        </div>
    );

}


