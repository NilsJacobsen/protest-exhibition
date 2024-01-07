import { useRouter } from "next/router"

const ContentPage = () => {
    const router = useRouter()
    const contentId = router.query.id
    
    return <p>Content: {contentId}</p>
}

export default ContentPage