import path from "path";
import fs from "fs"
import ChangeLogList from "./ChangeLogList";




export const dynamic = 'force-static';

export default function ChangelogPage() {

    const filePath = path.join(process.cwd(), 'CHANGELOG.md');
    const changelog = fs.readFileSync(filePath, 'utf8');

    const versions = [] as string[];
    
    changelog.split("## [").forEach((str, i) => {
        if (i == 0) {
            // versions.push(str) Don't add the first changelog item 
        } else {
            versions.push("## [" + str)
        }
    })

    return (
        <div className="flex flex-row justify-center">
            <div className="mt-10">
                <ChangeLogList items={versions}/>
            </div>
        </div>
    )
}