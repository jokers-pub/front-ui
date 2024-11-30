import path from "node:path";
import os from "node:os";

export const isWindows = os.platform() === "win32";

export function normalizePath(strPath: string): string {
    return path.posix.normalize(isWindows ? slash(strPath) : strPath);
}

export function slash(p: string): string {
    return p.replace(/\\/g, "/");
}
