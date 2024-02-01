import { getHtmlFromMarkdown } from '@/helper/getHtmlFromMarkdown'
import type {
  GetStaticPaths,
} from 'next'

const contentPaths = [
  "test",
  "klimakrise_101",
  "protest_in_deutschland",
  "eine_kurze_zeitreise",
  "im_diskurs",
  "ziviler_ungehorsam",
  "gewalt_und_repression",
  "soziale_kipppunkte",
  "fridays_for_future",
  "letzte_generation",
  "extinction_rebellion",
  "ende_gelände",
  "gruene_jugend"
]

const getContentPaths = () => {
  const newPaths: Array<{params: {id: string}}> = contentPaths.map((contentPath) => {
    return {
      params: {
        id: contentPath
      }
    }
  })
  return newPaths
}
 
export const getStaticPaths = (async () => {
  return {
    paths: getContentPaths(),
    fallback: false,
  }
}) satisfies GetStaticPaths
 
export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:
  const contentData = await getHtmlFromMarkdown(params.id);
  
  return {
    props: {
      contentData,
    },
  };  
}
 
const ContentPage = ({ contentData }: any) => {
  console.log(contentData)
  return <div id="remark" className="max-w-4xl mx-auto font-rubik">
    {/* @ts-ignore */}
    {contentData && contentData.contentHtml && <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />}
  </div>
}

export default ContentPage