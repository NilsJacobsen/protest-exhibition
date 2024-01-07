import { useRouter } from "next/router"
import * as m from "../../paraglide/messages"

const ContentPage = () => {
    const router = useRouter()
    const contentId = router.query.id

    const markdown = m.hello_world()
    console.log(markdown)

    return <div>
        <p>Content: {contentId}</p>
        <p>Markdown: {markdown}</p>
    </div>
}

export default ContentPage