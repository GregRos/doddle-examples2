import {Seq} from "doddle"
export function print<T>(s: Seq<T>) {
    return s.join(", ").pull()
}

export function printDictionary(dict: Record<string, Seq<any>>) {
    return Object.entries(dict).map(([key, val]) => [key, print(val)])
        .map(([key, val]) => `${key}: ${val}`)
        .join("\n")
}