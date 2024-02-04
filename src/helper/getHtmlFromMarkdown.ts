import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';
import * as m from "../paraglide/messages"
import { parseToUnderscoreSeparated } from "./urlParser";

export const getHtmlFromMarkdown = (id: string) => {
    if(!id) return `<></>`
    // @ts-ignore
    const markdown = m[parseToUnderscoreSeparated(id)]()
  
    if(markdown === undefined || markdown === "") return `<>404</>`
    const matterResult = matter(markdown);
  
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content);
  
    const contentHtml = processedContent.toString();
  
    return contentHtml
}