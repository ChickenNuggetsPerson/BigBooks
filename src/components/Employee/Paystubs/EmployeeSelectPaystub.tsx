'use server'


import getEmployeePaystubs from "@/actions/paystub/getEmployeePaystubs";
import { deserializeData, serializeData } from "@/utils/serialization";
import { Divider } from "../../Forms/Divider";
import StubSelector from "./StubSelector";



export async function EmployeeSelectPaystub({ empUUID }: { empUUID: string }) {


    const stubs = deserializeData(await getEmployeePaystubs(empUUID))

    const submitted = serializeData(stubs.filter(s => s.locked))
    const active = serializeData(stubs.filter(s => !s.locked))

    return (
        <div className="w-xs h-fit">
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Paystubs</h5>
            <Divider />

            <div className="h-2"></div>

            <StubSelector paystubs={active} action={"Edit"} />
            <div className="h-4"></div>
            <StubSelector paystubs={submitted} action={"View"} />

        </div>
    )
}