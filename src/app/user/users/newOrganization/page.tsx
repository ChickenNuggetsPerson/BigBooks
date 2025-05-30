import OrganizationForm from "@/components/Organization/OrganizationForm";




export default async function NewOrganizationPage() {
    return (
        <div className="w-200 overflow-scroll pt-30">
            <OrganizationForm orgUUID={"new"} />
        </div>
    )
}