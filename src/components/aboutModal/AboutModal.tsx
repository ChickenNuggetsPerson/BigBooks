import { appVersion } from "@/functions/version"








export default async function AboutModal() {
    
    return (
        <div>

            Version: {appVersion}

        </div>
    )
}