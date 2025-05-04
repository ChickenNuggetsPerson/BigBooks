'use client'

import EmployeeList from "@/components/Employee/EmployeeList";

export default function Employee() {


    
    return (
        <div>

            {/* <Sidebar name={name} uuid={orgUUID} page={Page.Employee}></Sidebar> */}

            <EmployeeList employeePage={true} selectCB={() => {}} preSelected={[]}/>
        </div>
    );
}