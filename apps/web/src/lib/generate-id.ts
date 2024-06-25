import ShortUniqueId from "short-unique-id";

export const uuid = new ShortUniqueId({ length: 4, dictionary: "number" });
