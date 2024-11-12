import { HeadingType } from "@/Types/Type"

export default function Heading(props:HeadingType){
  return (
    <h2 className={`${props.className}`}>
      {props.title}
    </h2>

  )
}
