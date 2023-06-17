// import { ButtonHTMLAttributes, FC, ReactNode, } from 'react'

import {useButton} from 'react-aria';
import {useRef} from 'react';

/*
type Props = {
    // click: () => void;
    // children: ReactNode;
    // text: string;
    color?: string;
    // props: ButtonHTMLAttributes<HTMLButtonElement>
    props: AriaButtonProps<ElementType>
}
*/

// export const CustomButton: FC<Props> = ({props, color}) => {
//   const ref = useRef<HTMLButtonElement>(null);
//   const { buttonProps } = useButton(props, ref);
//   const { children } = props;
//   const bgColor = color|| "white"
//     console.log(color)

export const CustomButton = (props:any ) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children } = props;
//   const bgColor = props.color || "white"
//   const position = props.position || "inherit"
//   const direction = props.direction || ""

//   const custom = props.custom || "bg-white"

  return (
    <button {...buttonProps} ref={ref}
    // style={{background: bgColor}}
    className={`rounded-lg 
    transition-all  duration-700
    hover:scale-110  hover:bg-blue-400 
    px-4 py-2 ${props.custom} `} 
    >
      {children}
    </button>
  );
}
