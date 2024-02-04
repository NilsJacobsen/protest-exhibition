import ContentHeader from "@/components/ContentHeader"
import { contentPaths } from "@/helper/contentPaths"
import { getHtmlFromMarkdown } from "@/helper/getHtmlFromMarkdown"
import { languageTag } from "@/paraglide/runtime"
import Link from "next/link"

const ContentOverview = () => {
    const contentData = getHtmlFromMarkdown("content_intro")
    return <div className="max-w-4xl mx-auto px-4 font-rubik">
        <ContentHeader />
        
        <div id="remark" className="font-rubik !min-h-fit">
            <div dangerouslySetInnerHTML={{ __html: contentData }} />
        </div>
        <h2 className="text-lg font-bold py-2">Übersicht</h2>
        {Object.keys(contentPaths).map((path) => (
            <div
                className="flex w-full px-4 py-3 z-50 cursor-pointer"
                key={path}
            >
                <Link href={`/content/${path}`} locale={languageTag()}>
                    {
                        // @ts-ignore 
                        contentPaths[path]
                    }
                </Link>
            </div>
            
        ))}
        
    </div>
}

export default ContentOverview