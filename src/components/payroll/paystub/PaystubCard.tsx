import { DispPaystub } from "@/database/models/DisplayModels";






export default function PaystubCard({ stub } : { stub: DispPaystub }) {
    return (
    <div>

        {stub.employeeUUID  }

    </div>
    )
}

