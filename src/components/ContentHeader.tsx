import { useState } from "react";
import Arrow from "./Arrow";
import { LanguagePicker } from "./LanguagePicker";
import Link from "next/link";
import { languageTag } from "@/paraglide/runtime";
import { contentPaths } from "@/helper/contentPaths";
import * as m from "../paraglide/messages"
import { useRouter } from "next/router";


const ContentHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const router = useRouter()
    const { id } = router.query as { id: string }

    return (
        <div className="flex items-center py-4">
            <div className="flex-1 flex items-center">
                <p className="hidden sm:block text-zinc-500">{m.content_header_title()}</p>
                <p className="hidden sm:block text-zinc-500 mx-2">/</p>
                <div
                    className="block text-black relative cursor-pointer"
                >
                    <div onClick={() => setMenuOpen(!menuOpen)} className="flex gap-2">
                        {/* @ts-ignore */}
                        {contentPaths[id]}
                        <Arrow />
                    </div>
                    {menuOpen && <div className="absolute top-8 flex flex-col text-zinc-700 w-[320px] rounded-lg overflow-hidden border border-zinc-300 shadow-lg" onClick={() => setMenuOpen(false)}>
                        {Object.keys(contentPaths).map((path) => (
                            <Link  href={`/content/${path}`} locale={languageTag()} key={languageTag()}>
                                <div className={(id === path ? "bg-zinc-200 hover:bg-zinc-300 " : "bg-white hover:bg-zinc-100 ") + " relative flex w-full px-4 py-3 z-50 cursor-pointer"}>
                                     {/* @ts-ignore */}
                                    {contentPaths[path]}
                                </div>
                            </Link>
                        ))}
                    </div>}
                    
                </div>
            </div>
            <LanguagePicker />
        </div>
    );
}

export default ContentHeader;