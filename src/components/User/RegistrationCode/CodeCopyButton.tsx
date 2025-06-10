'use client'

import toast from "react-hot-toast"





export default function CodeCopyButton({ code }: { code: string }) {

    function copy() {
        toast.promise(async () => {
            await navigator.clipboard.writeText(`${location.origin}/user/new/${code}`)
        }, {
            loading: 'Copying...',
            success: <b>Copied URL</b>,
            error: <b>Error Copying URL...</b>,
        })
    }

    return (<button onClick={copy} className="primary-button h-fit">Copy</button>)
}