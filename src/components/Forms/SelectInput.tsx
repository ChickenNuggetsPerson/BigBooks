'use client'

import { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Autocomplete, TextField } from "@mui/material";



function getOption(options: { label: string, id: string }[], id: string) {
    const option = options.find((e) => { return e.id === id })
    if (option) {
        return option
    } else {
        return { label: "", id: "" }
    }
}

interface SelectInputProps {
    id?: string,
    label?: string,
    val?: string,
    disabled?: boolean,
    options?: { label: string, id: string }[],
    changeCB?: (val: string) => void,
    searchable?: boolean
}
export default function SelectInput({
    id = "",
    label = "",
    val = "",
    disabled = false,
    options = [],
    changeCB = () => { },
    searchable = false
}: SelectInputProps) {

    const [selected, setSelected] = useState(getOption(options, ""))
    const [ops, setOptions] = useState([] as { label: string, id: string }[])

    useEffect(() => {
        setOptions(options)
    }, [options])

    useEffect(() => {
        setSelected(getOption(ops, val))
    }, [ops, val])

    function onPress(v: string) {
        setSelected(getOption(ops, v))
        changeCB(v)
    }

    if (searchable) {
        return (
            <Autocomplete
                disablePortal
                options={ops}
                sx={{ minWidth: 150 }}

                id={id}
                value={selected}
                onChange={(e, v) => { onPress(v?.id ?? "") }}
                disabled={disabled}
                disableClearable
                renderInput={(params) => <TextField {...params} label={label} />}
            />
        )
    }

    return (
        <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="">{label}</InputLabel>
            <Select
                labelId=""
                id={id}
                value={selected.id}
                label={label}
                onChange={(e) => { onPress(e.target.value) }}
                autoWidth
                disabled={disabled}
            >
                {ops.map((o) => (
                    <MenuItem key={o.id} value={o.id}>{o.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}