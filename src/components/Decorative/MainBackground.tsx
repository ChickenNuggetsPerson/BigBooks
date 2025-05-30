








export default function MainBackground() {
    return (
        <div
            style={{ 
                zIndex: -500, 
                position: "absolute", 
                width: "100dvw", 
                height: "30dvh", 
                top: 0,
                boxShadow: "0px -9px 10px 10px gray"
            }}
            className="bg-primary"
        >
        </div>
    )
}