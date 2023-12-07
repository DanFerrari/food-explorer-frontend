import { Container } from "./styles";
import { useState } from "react";

export function ButtonCount(){
const [valueCount, setValue] = useState(1);
function decreaseValueCount(){
    if (valueCount == 1) return;
    const decreaseValue = valueCount - 1;
    setValue(decreaseValue);
}
function increaseValueCount(){
    const increaseValue = valueCount + 1;
    setValue(increaseValue);
}

let valueWith0 = '0' + valueCount; 

valueWith0 > 9 ? valueWith0 = valueCount : valueWith0 = '0'+ valueCount;


return(
<Container>
    <button id="decrease" onClick={decreaseValueCount}>-</button>
        <span>{valueWith0}</span>
    <button id="increase" onClick={increaseValueCount}>+</button>
</Container>
);


};