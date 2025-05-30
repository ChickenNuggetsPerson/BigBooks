import path from "path";
import fs from "fs"
import { MarkdownAsync } from "react-markdown";

import "github-markdown-css"




export const dynamic = 'force-static';

export default function ChangelogPage() {

    const filePath = path.join(process.cwd(), 'CHANGELOG.md');
    const changelog = fs.readFileSync(filePath, 'utf8');

    const versionRegex = /## \[(\d+\.\d+\.\d+)]\([^)]+\) \((\d{4}-\d{2}-\d{2})\)([\s\S]*?)(?=^## |\z)/gm;

    const versions: { version: string; date: string; content: string }[] = [];
    let match;

    while ((match = versionRegex.exec(changelog)) !== null) {
        const version = match[1];
        const date = match[2];
        const content = match[3].trim();
        versions.push({ version, date, content });
    }

    return (
        <div className="flex flex-row justify-center">
            <div className="w-xl mt-10">
                {versions.map((version) => (
                    <div className="markdown-body card" key={version.version} style={{ marginBottom: 20 }}>
                        <MarkdownAsync>{`### Version ${version.version} \n\n ${version.content}`}</MarkdownAsync>
                    </div>
                ))}
            </div>
        </div>
    )
}