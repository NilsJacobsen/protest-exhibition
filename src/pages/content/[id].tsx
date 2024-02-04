import ContentHeader from '@/components/ContentHeader'
import { useRouter } from 'next/router'
import { getHtmlFromMarkdown } from '@/helper/getHtmlFromMarkdown';
import Head from 'next/head';
import * as m from "./../../paraglide/messages"
import { parseToUnderscoreSeparated } from '@/helper/urlParser';
 
const ContentPage = () => {
  const router = useRouter()
  const { id } = router.query
  const parsedId = id ? parseToUnderscoreSeparated(id as string) : undefined
  // if the id is not in m then we should redirect to 404
  // @ts-ignore
  if (!m[parsedId]) {
    return <div className="w-screen h-screen flex justify-center items-center">404 - Page not found</div>
  }


  
  const contentData = getHtmlFromMarkdown(id as string)

  return <>
    <Head >
      <title>
        {`Auf die Straße | Ausstellung Dortmund`}
      </title>
      <meta
        name="description"
        content="Setze ein Statement für Veränderung. Wir gestalten aktiv eine nachhaltige Zukunft. Sei dabei!"
        key="desc"
      />
    </Head>
    <div className="max-w-4xl mx-auto px-4 font-rubik">
      <ContentHeader />
      <div id="remark" className="font-rubik">
        <div dangerouslySetInnerHTML={{ __html: contentData }} />
      </div>
    </div>
  </>
}

export default ContentPage