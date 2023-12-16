
export default function ApplyAnim(animatedElements, animationClass) {

    // SLIDE-IN ANIMATION
    const animatedElementsGroup = document.querySelectorAll(animatedElements)

    const animatedElementsFunc = new IntersectionObserver(elements => {
        elements.forEach(element => {
            if (element.isIntersecting) {element.target.classList.add(animationClass)}
            
            //DEV: Uncomment to play the replay animation everytime
            //else {element.target.classList.remove(animationClass)}
        });
    })

    animatedElementsGroup.forEach(element => {animatedElementsFunc.observe(element)});
}