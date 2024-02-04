import { availableLanguageTags, languageTag } from "../paraglide/runtime"
import { useRouter } from "next/router"
import Link from "next/link"
import { useState } from "react"
import Arrow from "./Arrow"

export function LanguagePicker() {
    const router = useRouter()

    const languageNames = {
		de: "Deutsch",
        en: "English",
        es: "Español",
        fr: "Français",
        ru: "Русский",
        tr: "Türkçe",
	}

    const [menuOpen, setMenuOpen] = useState(false)

	return (
        <div
            className="block text-black relative cursor-pointer"
        >
            <div onClick={() => setMenuOpen(!menuOpen)} className="flex gap-2">
                {languageNames[languageTag()]}
                <Arrow />
            </div>
            {menuOpen && <div className="absolute top-8 right-0 flex flex-col w-[180px] text-zinc-700 rounded-lg overflow-hidden border border-zinc-300 shadow-lg" onClick={() => setMenuOpen(false)}>
                {availableLanguageTags.map((lang) => (
                    <Link 
                        onClick={() => { 
                            // TODO: fix workaround 
                            setTimeout(() => router.push(router.asPath, router.asPath, { locale: lang }), 200)
                            setTimeout(() => router.push(router.asPath, router.asPath, { locale: lang }), 500)
                            setTimeout(() => router.push(router.asPath, router.asPath, { locale: lang }), 1000)
                        }} 
                        href={router.asPath} 
                        locale={lang} 
                        key={lang}
                    >
                        <div className={(languageTag() === lang ? "bg-zinc-200 hover:bg-zinc-300 " : "bg-white hover:bg-zinc-100 ") + " relative flex w-full px-4 py-3 z-50 cursor-pointer"}>
                            <p className="flex-1">{languageNames[lang]}</p>
                            <p className="text-zinc-500">{lang}</p>
                        </div>
                    </Link>
                ))}
            </div>}
        </div>
	)
}
