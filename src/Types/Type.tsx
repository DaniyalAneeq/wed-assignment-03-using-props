export type HeadingType = {
    title: string;
    className?: string; 
}
export type ParaType = {
    para: string
    className?: string; 
}
export type ButtonType = {
    title: string
    style?:{}
    className?: string
}

export type BoxType = {
     style?: React.CSSProperties; 
     className?: string; 
}

export type CommonType = {
    classNameh2?:string
    classNamepara?:string
    classNamebutton?:string
    classNamebox?:string
    firstDiv: string
    secondDiv: string
    thirdDiv: string
    forthDiv?: string
    headingTitle?:string
    paraTitle?:string
    buttonTitle?:string
}