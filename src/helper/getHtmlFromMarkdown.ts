import matter from "gray-matter";
import { remark } from "remark";
import html from 'remark-html';
import * as m from "../paraglide/messages"
import { GetStaticPaths } from "next";

export const getHtmlFromMarkdown = async (id: string) => {
    // @ts-ignore
    const markdown = m[id]()
    if(markdown === undefined || markdown === "") return undefined

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(markdown);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    
    return {
        id,
        contentHtml,
        ...matterResult.data,
      };
}