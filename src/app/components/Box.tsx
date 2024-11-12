import { BoxType } from "@/Types/Type"; 


export default function Box(props: BoxType) { 
    return ( 
    <> 
    <div className={` bg-[#C4DEFD] ${props.className}`} 
    style={props.style}>
    </div> 
    </> 
        ) 
    }