import { SVGProps } from "react";

export interface Props {
    color?: string,
    size?: number,
    disabled?: boolean,
    icon?: string,
    character?: string,
    text?: string,
    styling?: string,
    value?: any,
    handleClick: Function
}