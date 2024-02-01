import { getHtmlFromMarkdown } from '@/helper/getHtmlFromMarkdown'
import type {
  GetStaticPaths,
} from 'next'

const contentPaths = [
  "00_test",
  "01_klimakrise_101",
  "02_protest_in_deutschland",
  "03_eine_kurze_zeitreise",
  "04_im_diskurs",
  "05_ziviler_ungehorsam",
  "06_gewalt_und_repression",
  "07_soziale_kipppunkte",
  "a_fridays_for_future",
  "b_letzte_generation",
  "c_extinction_rebellion",
  "d_ende_gelände",
  "e_gruene_jugend"
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
  return <div id="remark" className="max-w-4xl mx-auto font-rubik">
    {/* @ts-ignore */}
    {contentData && contentData.contentHtml && <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />}
  </div>
}

export default ContentPage