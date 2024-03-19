import { ReactNode } from "react";

export interface CallButtonProps {
    children: ReactNode; 
    appearance: 'white' | 'black'; 
    arrow: ReactNode;
}