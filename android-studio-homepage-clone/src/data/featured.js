import React from "react"
import BtnWhite from "../utils/BtnWhite"
import BtnGreen from "../utils/BtnGreen"
import { v4 as uuidv4 } from "uuid"

export const featured = [
  {
    id: uuidv4(),
    title: "Jetpack Compose 1.0 is here!",
    desc: "Jetpack compose 1.0 is here, Android's modern, native UI toolkit to help you build better apps faster. Learn how Compose makes teams more productive and write higher quality UIs with the resources available.",
    tag: "Featured",
    button: <BtnWhite />,
  },
  {
    id: uuidv4(),
    title: "Attend the Indie Games Festival",
    desc: "Sign up now to join Google Play's Indie Games Festival virtual events on September 4th. You can explore the finalist games from Europe, Japan and South Korea, meet the developers who made them, be the first to find our the winners, hang out with players and have fun.",
    tag: "Featured",
    button: <BtnGreen />,
  },
]
