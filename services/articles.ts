import { Article } from "~/models/Article"

export const getArticles = async () => {
    let articles: Article[] = [] 
    
    try {
        const config = useRuntimeConfig()
         articles = await $fetch(config.public.apiBase + '/posts');
    } catch (error) {
        console.error('getArtciles error: ', error)
    }

    return articles
}