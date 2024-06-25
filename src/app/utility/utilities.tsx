export const headshotUrl = "/headshot.gif";

export function decodeEntities(text: string) {
    return text.replace(/&#(\d+);/g, (match, decimal) => {
        return String.fromCharCode(decimal);
    });
};

export const rmQuoteMarks = (str: string) => str.replace(/(&quot\;)/g,"\"");
