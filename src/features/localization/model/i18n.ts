// file generated by the Paraglide-Next init command
import { Middleware, DetectionStrategy } from "@inlang/paraglide-next"
import { AvailableLanguageTag } from "./paraglide/runtime";

const strategy = DetectionStrategy<AvailableLanguageTag>();

export const paraglideMiddleware = Middleware({ strategy });
