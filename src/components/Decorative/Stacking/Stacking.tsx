import "./stacking.css"



export function HStack({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex hstack">
            {children}
        </div>
    );
}

export function VStack({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex vstack">
            {children}
        </div>
    );
}

export function Spacer() {
    return (
        <div className="spacer"></div>
    );
}