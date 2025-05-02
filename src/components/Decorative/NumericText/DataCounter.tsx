import { HStack, Spacer } from "../Stacking/stacking";
import Counter from "./numericText";




export default function DataCounter( data : Readonly<{ count: number, max: number }> ) {
    return (
        <HStack>
            <Spacer></Spacer>

            <Counter val={data.count} animDelta={100}></Counter>

            <h1 className="numeric-text" style={{
                paddingLeft: "10px",
                paddingRight: "10px"
            }}> / </h1>

            <Counter val={data.max} animDelta={100}></Counter>
            
            <Spacer></Spacer>
        </HStack>
    )
}