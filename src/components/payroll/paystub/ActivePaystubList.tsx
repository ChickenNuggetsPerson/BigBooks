'use client'

import getActivePaystubs from "@/actions/paystub/getActivePaystubs"
import { Divider } from "@/components/Forms/Divider"
import { useEffect, useState } from "react"
import { PaystubCard } from "./PaystubCard"
import toast from "react-hot-toast"
import submitPaystub from "@/actions/paystub/submitPaystub"
import { PaystubUUIDWithEmployee } from "@/actions/paystub/types"
import DeleteDraftButton from "../draftsystem/DeleteDraftButton"
import ClickableDiv from "@/components/Decorative/ClickableDiv"
import { useRouter } from "next/navigation"
import { clientNewPayrollDraft } from "../draftsystem/newDraftFunction"





export default function ActivePaystubList({ editStub, draftUUID }: { editStub?: (empUUID: string) => void, draftUUID?: string }) {

    const router = useRouter()
    const [paystubs, setPaystubs] = useState([] as PaystubUUIDWithEmployee[])
    const [index, setIndex] = useState(undefined as number | undefined)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        load()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    async function load() {
        setLoading(true)
        setPaystubs(await getActivePaystubs(draftUUID !== undefined))
        setLoading(false)
    }

    function saveStub() {
        if (index === undefined) { return }
        if (index < 0 || index >= paystubs.length) { return }
        const uuid = paystubs[index].uuid

        toast.promise(
            async () => {
                await submitPaystub(uuid)
                setTimeout(() => {
                    load()
                }, 1000);
            },
            {
                loading: "Submitting Paystub",
                success: "Paystub Submitted",
                error: "Error Submitting Paystub"
            }
        )
    }

    function editStubBtn() {
        if (index === undefined) { return }
        if (index < 0 || index >= paystubs.length) { return }
        const uuid = paystubs[index].employee.uuid
        if (editStub) {
            editStub(uuid)
        }
    }

    function newDraft() {
        clientNewPayrollDraft(router)
    }

    return (
        <div className="flex flex-row gap-5 select-none">

            <div className="card w-3xs h-fit">
                {draftUUID && <p className="font-semibold">Draft Paystubs:</p>}
                {!draftUUID && <p className="font-semibold">All Active Paystubs:</p>}
                <Divider />

                {loading &&
                    <div>
                        <div className="icon bg-primary/50 text-white font-bold mb-2 h-8 animate-pulse"></div>
                        <div className="icon bg-primary/50 text-white font-bold mb-2 h-8 animate-pulse"></div>
                        <div className="icon bg-primary/50 text-white font-bold mb-2 h-8 animate-pulse"></div>
                    </div>
                }
                {!loading &&
                    <div>
                        {paystubs.map((stub, i) => (
                            <ClickableDiv key={stub.uuid} className="icon bg-primary/70 text-white font-bold mb-2" onClick={() => setIndex(i)}>
                                {`${stub.employee.firstName} ${stub.employee.lastName}`}
                            </ClickableDiv>
                        ))}

                        {paystubs.length === 0 &&
                            <ClickableDiv className="text-gray-400 font-bold mb-2 text-center">
                                {`No Paystubs...`}
                            </ClickableDiv>
                        }


                        {!draftUUID &&
                            <div>
                                <Divider />
                                <ClickableDiv className="primary-button w-full text-center font-bold" onClick={newDraft}>
                                    New Draft
                                </ClickableDiv>
                            </div>
                        }


                    </div>
                }
            </div>

            <div className="w-full">

                {(index !== undefined) && (index < paystubs.length) &&
                    <div className="smallCard mb-5 flex flex-row w-full justify-between">
                        <p className="font-semibold text-lg my-auto ml-3">Review Paystub:</p>

                        <div className="flex flex-row gap-4">
                            {editStub &&
                                <button style={{ borderRadius: 12 }} className="accent-button" onClick={editStubBtn} >Make Changes</button>
                            }
                            <button style={{ borderRadius: 12 }} className="primary-button" onClick={saveStub} >Save and Lock</button>
                        </div>
                    </div>
                }

                {(index !== undefined) && (index < paystubs.length) &&
                    <PaystubCard stubUUID={paystubs[index].uuid} editable />
                }

                {(paystubs.length === 0 && draftUUID) &&
                    <div className="">
                        <DeleteDraftButton draftUUID={draftUUID} />
                    </div>
                }
            </div>

        </div>
    )
}