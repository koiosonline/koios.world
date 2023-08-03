import { compiler } from "markdown-to-jsx";

export const generateTableOfContents = (content: string) => {
  const tableOfContents = [];
  const regex = /<h([1-6]) id="([^"]+)">([^<]+)<\/h[1-6]>/g;
  let match;

  while ((match = regex.exec(content))) {
    const headingLevel = match[1];
    const headingId = match[2];
    const headingText = match[3];
    tableOfContents.push({
      level: headingLevel,
      id: headingId,
      text: headingText
    });
  }
  return tableOfContents;
};
