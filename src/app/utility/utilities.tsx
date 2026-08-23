export const headshotUrl = "/headshot.png";

// Named entities the trivia API returns alongside the numeric ones; without
// these, questions render as "Science &amp; Nature".
const namedEntities: Record<string, string> = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&apos;": "'",
    "&nbsp;": " ",
    "&eacute;": "\u00e9",
    "&egrave;": "\u00e8",
    "&uuml;": "\u00fc",
    "&ouml;": "\u00f6",
    "&auml;": "\u00e4",
    "&ntilde;": "\u00f1",
    "&hellip;": "\u2026",
    "&mdash;": "\u2014",
    "&ndash;": "\u2013",
    "&rsquo;": "\u2019",
    "&lsquo;": "\u2018",
    "&ldquo;": "\u201c",
    "&rdquo;": "\u201d",
};

export function decodeEntities(text: string) {
    if (!text) return "";

    return text
        .replace(/&#(\d+);/g, (_match, decimal) => String.fromCharCode(decimal))
        .replace(/&#x([0-9a-f]+);/gi, (_match, hex) => String.fromCharCode(parseInt(hex, 16)))
        .replace(/&[a-z]+;/gi, (entity) => namedEntities[entity.toLowerCase()] ?? entity);
};

export const rmQuoteMarks = (str: string) => str.replace(/(&quot\;)/g,"\"");
