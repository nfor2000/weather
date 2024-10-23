import React from "react";
import cn from "../lib/utils";

const Button = ({
     icon,
     title,
     className,
     onPress,
}: {
     icon?: React.ReactNode;
     title?: string;
     className?: string;
     onPress?: () => void;
}) => {
     return (
          <button
               className={cn("text-clr-muted bg-light", className)}
               onClick={onPress}
          >
               {icon && icon}
               {title && <span>{title}</span>}
          </button>
     );
};

export default Button;
