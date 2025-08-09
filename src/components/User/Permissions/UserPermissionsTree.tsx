'use client'

import { Permissions } from "@/auth/permissions/PermissionsDef"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { Check } from "lucide-react"
import { useState } from "react"




type Branch = {
    name: string
    path: string,
    branches: Branch[]
    leafs: string[]
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GenTree(obj: any, name: string, path: string): Branch {
    const branches = [] as Branch[]
    const leafs = [] as string[]

    const keys = Object.keys(obj)
    keys.forEach(key => {
        const d = obj[key]

        if (typeof d === "string") { // Ends
            leafs.push(key)
        } else { // Has Branches
            branches.push(GenTree(d, key, (path.trim() == "" ? "" : (path + ".")) + key))
        }
    })

    return { branches: branches, leafs: leafs, name: name, path: path }
}
const Tree = GenTree(Permissions, "tree", "")


export default function UserPermissionsTree({
    activePerms,
    changeCB
}: {
    activePerms?: string[]
    changeCB?: (perms: string[]) => void,
}) {

    activePerms = activePerms ?? []

    const [selection, setSelection] = useState("")
    const selectionKeys = selection.split(".")

    function branchFromSelection(sel: string): Branch {
        if (sel.trim() === "") {
            return Tree
        }

        let t = structuredClone(Tree)
        const keys = sel.split(".")
        keys.forEach(key => {
            const index = t.branches.findIndex(v => v.name == key)
            if (index == -1) { throw new Error("Can't Find Index") }
            t = t.branches[index]
        })
        return t
    }

    function RenderBranch({ branch }: { branch: Branch }) {

        return (
            <div className="flex flex-col w-fit border-r-2 last:border-0 border-gray-200 pr-2 h-fit smallCard">
                {branch.branches.map((b, i) => (
                    <ClickableDiv
                        key={`${b.name}-${i}`}
                        className={`hover:bg-primary/20 p-1 rounded-xl select-none px-4 w-full mb-1 last:mb-0 ${selection.startsWith(b.path) ? "bg-primary/50 hover:bg-primary/50" : ""}`}
                        onClick={() => {
                            setSelection(b.path)
                        }}
                    >
                        {b.name.toLocaleUpperCase()}
                    </ClickableDiv>
                ))}
                {branch.leafs.map((l, i) => {
                    const itemPath = branch.path + "." + l
                    const included = activePerms?.includes(itemPath)

                    return (
                        <ClickableDiv
                            key={`${l}-${i}`}
                            className={`flex hover:bg-primary/20 p-1 rounded-xl select-none px-4 w-full mb-1 last:mb-0`}
                            onClick={() => {
                                if (!changeCB) { return }
                                if (!activePerms) { return }

                                if (included) {
                                    changeCB(activePerms.filter(p => p !== itemPath))
                                } else {
                                    changeCB([...activePerms, itemPath])
                                }
                            }}
                        >
                            {activePerms &&
                                <div className={`icon ${included ? "bg-primary/80" : ""}`}>
                                    <Check color={included ? "white" : ""} strokeWidth={5} />
                                </div>
                            }
                            <h1 className={activePerms ? "pt-1 pl-2" : ""}>{(activePerms ? "" : "- ") + l.toLocaleUpperCase()}</h1>
                        </ClickableDiv>
                    )
                })}
            </div>
        )
    }

    return (
        <div className="h-70" style={{ width: 590 }}>
            <div className="flex flex-row gap-4 w-full h-full font-mono">

                <RenderBranch branch={Tree} />

                {selectionKeys.map(((key, i, arr) => {
                    if (key === "") {
                        return (<div key={`${key}-${i}`}></div>)
                    }

                    const path = arr.slice(0, i + 1).join(".")
                    return (
                        <RenderBranch key={`${key}-${i}`} branch={branchFromSelection(path)} />
                    )
                }))}

            </div>
        </div>
    )
}