export const EMPTY_PRODUCT = Object.freeze({
    id: "",
    title: "",
    imageSource: "",      
    price: 0,
    isAvailable: true,
    isPublicised: false,
  })

  export const IMAGE_COMING_SOON = "../../public/images/coming-soon.png"
  export const IMAGE_NO_STOCK = "../../public/images/stock-epuise.png"

  export const BASKET_MESSAGE = {
    EMPTY : "Votre commande est vide.",
    LOADING : "Chargement en cours ...", 
    NOT_AVAILABLE: "Non disponible",
  }