import ContentHeader from '@/components/ContentHeader'
import { contentPaths } from '@/helper/contentPaths'
import { getHtmlFromMarkdown } from '@/helper/getHtmlFromMarkdown'
import { availableLanguageTags } from '@/paraglide/runtime'
import type {
  GetStaticPaths,
} from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const getContentPaths = () => {
  const newPaths: Array<{params: {id: string}}> = Object.keys(contentPaths).map((contentPath) => {
    return {
      params: {
        id: contentPath
      }
    }
  })
  return newPaths
}
 
export const getStaticPaths = (async () => {
  let paths = [];

  for (const path of getContentPaths()) {
    for (const locale of availableLanguageTags) {
      paths.push({
        params: path.params,
        locale,
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths
 
export async function getStaticProps({ params }: any) {
  // Add the "await" keyword like this:

  let contentData = await getHtmlFromMarkdown(params.id);
  return {
    props: {
      contentData,
    },
    revalidate: 1
  };  
}
 
const ContentPage = ({ contentData }: any) => {

  useEffect(() => {
    console.log(contentData)
  },[contentData])

  return <div className="max-w-4xl mx-auto px-4 font-rubik">
    <ContentHeader />
     <div id="remark" className="font-rubik">
      {/* @ts-ignore */}
      {contentData && contentData.contentHtml && <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />}
    </div>
  </div>
 
}

export default ContentPage