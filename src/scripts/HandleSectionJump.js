
export default function HandleSectionJump(section) {
    setTimeout(
        document.getElementById(section).scrollIntoView({behavior: 'smooth'})
        ,1000 )
}