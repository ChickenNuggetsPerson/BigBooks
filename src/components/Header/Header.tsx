import HeaderOrgOptions from "./HeaderOrgOptions"






export default function Header() {
    return (
        <div className="h-12 fixed top-0 left-65 right-0 z-60 px-5 pt-1">
            <div className="flex flex-row justify-between">
                <HeaderOrgOptions />
                
                

            </div>
        </div>
    )
}