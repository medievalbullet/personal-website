
export const useLog = (message, color = "white", additionalMessage = " ") => {

  console.log("%c "+message+" ", "color: "+color+"; font-weight: bold; background-color: #0a0a0a; border: 2px solid "+color+";", additionalMessage)

}
