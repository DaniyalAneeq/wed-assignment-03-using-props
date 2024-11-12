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