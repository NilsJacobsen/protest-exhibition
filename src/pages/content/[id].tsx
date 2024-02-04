import ContentHeader from '@/components/ContentHeader'
import { useRouter } from 'next/router'
import { getHtmlFromMarkdown } from '@/helper/getHtmlFromMarkdown';
 
const ContentPage = () => {
  const router = useRouter()
  const { id } = router.query
  const contentData = getHtmlFromMarkdown(id as string)

  return <div className="max-w-4xl mx-auto px-4 font-rubik">
    <ContentHeader />
    <div id="remark" className="font-rubik">
      <div dangerouslySetInnerHTML={{ __html: contentData }} />
    </div>
  </div>
}

export default ContentPage