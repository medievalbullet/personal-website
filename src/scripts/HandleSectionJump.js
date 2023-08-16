import React, { useEffect, useState } from 'react'

export default function HandleSectionJump(section) {
    setTimeout(
        document.getElementById(section).scrollIntoView({behavior: 'smooth'})
        ,1000 )
}