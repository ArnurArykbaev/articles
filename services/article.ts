import { Article } from "~/models/Article";

export const getArticle = async (id: string) => {
    try {
        const config = useRuntimeConfig()
        const article: Article = await $fetch(config.public.apiBase + '/posts/' + id);
        return article
    } catch (error) {
        console.error('getArtciles error: ', error)
    }
}