

const colors = [
    "text",
    "background",
    "primary",
    "secondary",
    "accent",
    
    "text-up",
    "background-up",
    "primary-up",
    "secondary-up",
    "accent-up",

    "text-down",
    "background-down",
    "primary-down",
    "secondary-down",
    "accent-down",

    "dark_text",
    "dark_background",
    "dark_primary",
    "dark_secondary",
    "dark_accent",

    "dark_text-up",
    "dark_background-up",
    "dark_primary-up",
    "dark_secondary-up",
    "dark_accent-up",

    "dark_text-down",
    "dark_background-down",
    "dark_primary-down",
    "dark_secondary-down",
    "dark_accent-down",
];

export default function TestPage() {
    return (

        <div className="grid grid-cols-5 gap-4 m-10">
            {colors.map((c) => (
                <Card name={c} key={c} />
            ))}
        </div>
    )
}


function Card({ name }: { name: string }) {
    return (
        <div className={`bg-${name} p-10 rounded-xl text-center`}>
            {name}
        </div>
    )
}