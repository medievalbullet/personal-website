import { useLog } from "./useLog"

export const useJumpTo = (elementId) => {
  
  const element = document.getElementById(elementId)
  if (element) {
    useLog("Element found! Scrolling...", "lightgreen")
    element.scrollIntoView()
  } else {
    useLog("Element not found!", "#ff8080")
  }

}
