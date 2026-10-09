import type { Dictionary } from "../types";
import { site } from "./site";
import { home } from "./home";
import { services } from "./services";
import { industries } from "./industries";

export const th: Dictionary = { ...site, home, services, industries };
