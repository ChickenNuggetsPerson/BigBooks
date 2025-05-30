import path from "path";
import fs from "fs"
import { MarkdownAsync } from "react-markdown";

import "github-markdown-css"




export const dynamic = 'force-static';

export default function ChangelogPage() {

    const filePath = path.join(process.cwd(), './changelogs/CHANGELOG.md');
    const changelog = fs.readFileSync(filePath, 'utf8');

    const versionRegex = /##\s+([0-9]+\.[0-9]+\.[0-9]+)([\s\S]*?)(?=^##\s+[0-9]+\.[0-9]+\.[0-9]+|\z)/gm;

    const versions = [];
    let match;

    while ((match = versionRegex.exec(changelog)) !== null) {
        const version = match[1];
        const content = match[2].trim();
        versions.push({ version, content });
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="w-xl mt-10">
                {versions.map((version) => (
                    <div className="markdown-body card" key={version.version}>
                        <MarkdownAsync>{`### Version ${version.version} \n\n ${version.content}`}</MarkdownAsync>
                    </div>
                ))}
            </div>
        </div>
    )
}