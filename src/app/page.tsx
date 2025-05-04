import createDevOrg from "@/actions/createDevOrg";
import OrganizationList from "@/components/Organization/OrganizationList";



export default function Home() {

  return (
    <div className="grid justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div>
        <OrganizationList />
      </div>
      <button style={{position: 'absolute', left: 60}} className="secondary-button" onClick={createDevOrg} >Create</button>
    </div>
  );
}
