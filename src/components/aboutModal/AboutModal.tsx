import { appVersion } from "@/utils/functions/version"








export default async function AboutModal() {
    
    return (
        <div>

            Version: {appVersion}

        </div>
    )
}