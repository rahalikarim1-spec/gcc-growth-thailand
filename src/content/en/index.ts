import type { Dictionary } from "../types";
import { site } from "./site";
import { home } from "./home";
import { about } from "./about";
import { services } from "./services";
import { industries } from "./industries";

export const en: Dictionary = { ...site, home, about, services, industries };
