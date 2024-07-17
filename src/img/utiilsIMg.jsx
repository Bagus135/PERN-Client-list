
export function getIMG(path){
    return new URL(path, import.meta.url).href
}

