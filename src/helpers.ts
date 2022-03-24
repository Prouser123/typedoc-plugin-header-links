export interface HeaderLinks {
  [linkText: string]: string;
}

/**
 * Appends links to the header of the generated docs page
 * @param pageContent a string containing the rendered html for the docs page
 * @param links the links to add to the docs page
 */
export function addLinksToHeader(
  pageContent: string,
  links: HeaderLinks,
  root: string
) {
  // find the header link
  let headerLinkRegex = /(?<homelink><a\s+.*?class="title".*?<\/a>)/;

  let linksString = "";

  for (let linkText of Object.keys(links)) {
    let linkHref = links[linkText];
    linkHref = linkHref.replace("$ROOT", root);

    linksString += `<span style="margin:0 1em">|</span><a href="${linkHref}" class="title">${linkText}</a>`;
  }

  // wrap in a span that contains all the links
  let result = `<span class="title">$<homelink>${linksString}</span>`;

  return pageContent.replace(headerLinkRegex, result);
}
