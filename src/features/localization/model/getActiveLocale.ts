import { ParaglideLocale } from "../types";
import { languageTag } from "./paraglide/runtime";

export const getActiveLocale = (): ParaglideLocale => languageTag()