import ContentHeader from "@/components/ContentHeader"
import { getHtmlFromMarkdown } from "@/helper/getHtmlFromMarkdown"

const ContentOverview = () => {
    const contentData = getHtmlFromMarkdown("")
    return <div className="max-w-4xl mx-auto px-4 font-rubik">
        <ContentHeader />
        
    </div>
}

export default ContentOverview