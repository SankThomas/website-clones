import { v4 as uuidv4 } from "uuid"

export const updates = [
  {
    id: uuidv4(),
    tag: "Blog",
    title: "What's new for Android developers at Google I/O",
    excerpt:
      "As Android developers, we are all driven by building experiences that delight people around the world. And with people depending on your apps more than ever, expectations are higher and your jobs as developers aren’t getting easier.",
    image: "./blog.png",
  },
  {
    id: uuidv4(),
    tag: "Blog",
    title: "What's new in Jetpack",
    excerpt:
      "Android Jetpack is a suite of libraries, tools, and guidance to help developers follow best practices, reduce boilerplate code, and write code that works consistently across Android versions and devices. Today, 84% of the top 1000 apps on Google Play",
    image: "./blog-2.png",
  },
  {
    id: uuidv4(),
    tag: "Blog",
    title: "What's new in foldables, tablets, and large screens",
    excerpt:
      "Users are seeing more value in larger screens, and the benefits of doing more with a single device. Apps designed for large screen devices increase those benefits even further. The ability to fold a screen offers better ergonomics for large devices.",
    image: "./blog-3.png",
  },
  {
    id: uuidv4(),
    tag: "Blog",
    title: "What's new in Android Privacy",
    excerpt:
      "People want an OS and apps that they can trust with their most personal and sensitive information. Privacy is core to Android’s product principles. As shared in the “ What’s new in Android Privacy ” session, Android 12 continues to expand on this",
    image: "./blog-4.png",
  },
]
