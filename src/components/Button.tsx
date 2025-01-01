import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<'button'> {
   
    title: string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
}

const Button = ({ title, prefixIcon, suffixIcon, className, ...props }: ButtonProps) => {
    return (
        <button className={clsx('group relative w-fit py-3 px-7 text-black bg-violet-50 rounded-full overflow-hidden z-10 cursor-pointer',className)} {...props}>
            {prefixIcon && <span className="mr-2">{prefixIcon}</span>} 
            <span className="relative inline-flex font-general text-xs uppercase overflow-hidden">{title}</span>
            {suffixIcon && <span className="ml-2">{suffixIcon}</span>} 
        </button>
    );
};

export default Button;
