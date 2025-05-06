import { createContext } from "react";
import type { UseCat } from "../../../entities/model/types";

export default createContext<UseCat | null>(null);