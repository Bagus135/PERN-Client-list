
function getIMG(path){
    return new URL(path, import.meta.url).href
}
export const Img = {
    foto : getIMG("./Ayanokouji.jpg"),
    facebook : getIMG("./facebook.png"),
    ig : getIMG("./instagram.png"),
    github : getIMG("./github.png")
} 

