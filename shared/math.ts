import { config } from "../shared/config";
import { v2, Vec2 } from "./v2";

export function clamp(x: number, min: number, max: number): number {
    return Math.min(Math.max(x, min), max);
}