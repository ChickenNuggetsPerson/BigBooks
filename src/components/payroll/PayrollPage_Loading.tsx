import LoadingBlock from "../Decorative/LoadingBlock";
import DraftPageSelector from "./draftsystem/DraftPageSelector";
import { PayrollPathName } from "./draftsystem/DraftPaths";






export default async function PayrollPage_Loading({ path }: { path: PayrollPathName }) {
    return (
        <>
            <DraftPageSelector path={path} />
            <div className="flex flex-col gap-4 w-full mt-4">
                <LoadingBlock w={'full'}/>
                <LoadingBlock w={'full'}/>
                <LoadingBlock w={'full'}/>
                <LoadingBlock w={'full'}/>
            </div>
        </>
    )
}