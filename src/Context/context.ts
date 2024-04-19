import { createContext } from "react";
import { IActiveContext } from "../types/types";

export const TitleContext= createContext('')

export const ActiveContext=createContext<IActiveContext|undefined>(undefined)