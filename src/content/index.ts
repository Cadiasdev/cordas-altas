import { copyPt } from "./copy-pt";
import { copyDemo } from "./copy-demo";

// Trocar para false para repor a copy real em português.
export const MODO_DEMO = true;

export const copy = MODO_DEMO ? copyDemo : copyPt;

export type { Copy } from "./copy-pt";
