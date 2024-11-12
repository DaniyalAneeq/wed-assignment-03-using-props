import { ParaType } from "@/Types/Type"

export default function Paragraph(props:ParaType){
  return (
    <p className={`${props.className}`}>
      {props.para}
    </p>
  )
}