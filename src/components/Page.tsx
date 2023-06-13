import { FC, ReactNode } from 'react'

type Props= {
    children: ReactNode;
    custom?: string;
    customInner?: string;
}

export const Page: FC<Props> = ({children, custom, customInner}) => {
  return (
    <div className={`transition-colors w-screen flex justify-center ${custom}`}> 
        <div className={`max-w-3xl flex flex-col justify-center align-middle m-auto relative ${customInner}`}>
            {children}
        </div>
    </div>
  )
}
