import { Locale } from "../types";
import { languageTag } from "./paraglide/runtime";

export const getActiveLocale = (): Locale => languageTag()