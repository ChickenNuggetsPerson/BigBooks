import { Suspense } from "react"
import InteractiveUserIcon from "../User/InteractiveUserIcon"
import HeaderOrgOptions from "./HeaderOrgOptions"
import Loading from "@/app/Loading"






export default function Header() {
    return (
        <div className="h-12 fixed top-0 left-65 right-0 z-60 bg-white border-b border-gray-200 px-5 pt-1">
            <div className="flex flex-row justify-between">
                <HeaderOrgOptions />
                
                <Suspense fallback={<Loading />}>
                    <InteractiveUserIcon />
                </Suspense>

            </div>
        </div>
    )
}