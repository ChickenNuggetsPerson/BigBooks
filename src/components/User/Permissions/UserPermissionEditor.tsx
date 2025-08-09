'use client'

import { useEffect, useState } from "react"
import { Divider } from "../../Forms/Divider"
import getUserPerms from "@/actions/user/permissions/getUserPerms"
import UserPermissionsTree from "./UserPermissionsTree";
import toast from "react-hot-toast";
import editUserPerms from "@/actions/user/permissions/editUserPerms";
import { promptUser } from "@/components/Decorative/Modals/promptUser";
import { useModalManager } from "@/components/Decorative/Modal/ModalContext";
import deleteUserPerms from "@/actions/user/permissions/deleteUserPerms";
import makeOrgAdmin from "@/actions/user/permissions/makeOrgAdmin";




export default function UserPermissionEditor({ userUUID, orgUUID, cb, isOrgAdmin = false }: { userUUID: string; orgUUID: string; cb?: () => void, isOrgAdmin?: boolean }) {

    const { addModal } = useModalManager()

    const [data, setData] = useState<{
        name: string
        orgName: string
        perms: string[],
        orgAdmin: boolean
    } | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    async function load() {
        setData(null)
        setLoading(true)
        setError(null)

        try {
            const info = await getUserPerms(userUUID, orgUUID)
            setData(info)
            setLoading(false)
        } catch (error: unknown) {
            setLoading(false)
            if (error instanceof Error) {
                setError(error)
            } else {
                setError(new Error(String(error)))
            }
        }
    }

    useEffect(() => {
        load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function save() {
        if (!data) { return }

        await toast.promise(editUserPerms(userUUID, orgUUID, data.perms), {
            loading: "Saving Permissions",
            success: "Permissions Saved",
            error: "Error Saving Permissions"
        })

        if (cb) {
            cb()
        }
    }

    async function remove() {
        if (!data) { return }
        const result = await promptUser({
            addModal,
            title: "Are You Sure?",
            message: "Are you sure you want to remove this user from the organization?",
            trueButton: {
                title: "Yes",
                type: "danger"
            },
            falseButton: {
                title: "Cancel",
                type: "primary"
            }
        })

        if (!result) { return }

        await toast.promise(deleteUserPerms(userUUID, orgUUID), {
            loading: "Removing User Permissions",
            success: `Removed ${data.name}`,
            error: "Error Removing User"
        })

        if (cb) {
            cb()
        }
    }

    async function orgAdmin() {
        if (!data) { return }
        const result = await promptUser({
            addModal,
            title: "Are You Sure?",
            message: "Are you sure you want to make this user the organization admin? This will replace the current org admin.",
            trueButton: {
                title: "Yes",
                type: "danger"
            },
            falseButton: {
                title: "Cancel",
                type: "primary"
            }
        })

        if (!result) { return }

        await toast.promise(makeOrgAdmin(orgUUID, userUUID), {
            loading: "Updating Org Admin",
            success: `Made ${data.name} Org Admin`,
            error: "Error Updated Org Admin"
        })

        if (cb) {
            cb()
        }
    }

    return (
        <div className="">
            <h1 className="font-semibold text-xl">User Permission Editor: {data?.name}</h1>
            <Divider />

            {loading && <UserPermissionsTree />}
            {error && <h1>Error: {error.message}</h1>}
            {data && <div className="flex flex-col gap-2">

                {(isOrgAdmin && !data.orgAdmin) &&
                    <button type="submit" className={`accent-button w-full`} onClick={orgAdmin}>Make Org Admin</button>
                }

                <div className="smallCard" style={{ paddingBottom: 13 }}>
                    <UserPermissionsTree activePerms={data.perms} changeCB={(perms) => setData({ ...data, perms: perms })} />
                </div>

                <div className="flex gap-4">
                    <button type="submit" className={`danger-button w-full`} onClick={remove}>Remove From Organization</button>
                    <button type="submit" className={`primary-button w-full`} onClick={save}>Save</button>
                </div>
            </div>}
        </div>
    )

}