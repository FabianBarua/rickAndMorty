import React, { type ReactNode } from 'react';



const ALL_SIZES = {
    "sm": 'h-7 p-1 text-sm',
    "md": 'h-9 p-2 text-base',
    "lg": 'h-11 p-3 text-lg',
};
// Definir el tipo ButtonActionProps
type ButtonActionProps = {
    children: ReactNode;
    href?: string;
    size?: 'sm' | 'md' | 'lg';
    border?: boolean;
};

export const ButtonAction: React.FC<ButtonActionProps> = ({ children, href, size, border, ...props }) => {

    const buttonSize = ALL_SIZES[size] || ALL_SIZES.md; 
    
    const buttonClass = `transition-all ${border &&  'border '} border-default-300  text-default-900 ${buttonSize} flex justify-center items-center gap-2 bg-default-100 hover:bg-rickBlue rounded-full`;


    if (href) {
        return (
            <a
                {...props}
                href={href}
                className={buttonClass}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            {...props}
            className={buttonClass}>
            {children}
        </button>
    );
}