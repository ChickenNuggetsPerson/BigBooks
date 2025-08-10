import EditableDiv from "../../Decorative/EditableDiv";
import { Divider } from "../../Forms/Divider";
import { CardProp } from "@/components/Forms/CardProp";
import { Employee } from "@/database/generated/prisma";



export function EmployeeTaxCard_Loading() {

    return (
        <div className="w-xs h-fit">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Tax Details</h5>

            <Divider />

            <CardProp label="Residence:" loading/>
            <Divider />
            
            <CardProp label="Status:" loading/>
            <CardProp label="Dependants:" loading/>

        </div>
    )
}


export default function EmployeeTaxCard({ employee }: { employee: Employee }) {

    return (

        <EditableDiv url={`/organization/employee/${employee.uuid}/editTaxes`} className="w-xs h-fit">

            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">Tax Details</h5>

            <Divider />

            <CardProp label="Residence:" val={employee.residence}/>
            <Divider />
            
            <CardProp label="Status:" val={employee.filingStatus}/>
            <CardProp label="Dependants:" val={String(employee.dependants)}/>

        </EditableDiv>


    );
}

