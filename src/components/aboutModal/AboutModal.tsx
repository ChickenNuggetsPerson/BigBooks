import { appVersion } from "@/functions/version"








export default async function AboutModal() {

    const version = appVersion
    
    return (
        <div>

            {appVersion}

        </div>
    )
}