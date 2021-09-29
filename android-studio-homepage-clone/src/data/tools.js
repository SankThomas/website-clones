// At this point I realized I could just place all my data arrays in one file...you live you learn
import React from "react"
import { FaStackOverflow, FaTwitter } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { v4 as uuidv4 } from "uuid"

export const tools = [
  {
    id: uuidv4(),
    tag: "Studio blog",
    title: "Android Studio Bumblebee Canary 12 available",
    excerpt:
      "Android Studio - Bumblebee | 2021.1.1 Canary 12 is now available in the Canary and Dev channels. If you already have an Android Studio build on the Canary or Dev channel, you can get the update by clicking Help > Check for Update (or Android Studio >",
  },
  {
    id: uuidv4(),
    tag: "Studio blog",
    title: "Android Studio Bumblebee Canary 11 available",
    excerpt:
      "Android Studio - Bumblebee | 2021.1.1 Canary 11 is now available in the Canary and Dev channels. If you already have an Android Studio build on the Canary or Dev channel, you can get the update by clicking Help > Check for Update (or Android Studio >",
  },
]

export const exploreMore = [
  {
    id: uuidv4(),
    title: "Developer Guides",
    desc: "Find training classes that describe how to accomplish a specific task with code samples you can re-use in your app.",
  },
  {
    id: uuidv4(),
    title: "Sample Code",
    desc: "Jump start your development using these sample projects.",
  },
  {
    id: uuidv4(),
    title: "Quality guidelines",
    desc: "Build a high quality app with these design and behavior guidelines.",
  },
  {
    id: uuidv4(),
    title: "Distribute Your App",
    desc: "Learn how to launch and distribute your apps and games successfully.",
  },
]

export const news = [
  {
    id: uuidv4(),
    tag: "Medium",
    title: "Now in Android #47",
    date: "September 24, 2021",
    image: "./news/image-4.png",
  },
  {
    id: uuidv4(),
    tag: "Medium",
    title: "Diversify app revenue with hybrid monetization",
    date: "September 22, 2021",
    image: "./news/image-1.png",
  },
  {
    id: uuidv4(),
    tag: "Blog",
    title:
      "Improved Google Play Console user management: access requests, permission groups, and more",
    date: "September 21, 2021",
    image: "./news/image-2.png",
  },
  {
    id: uuidv4(),
    tag: "Blog",
    title: "Making permissions auto-reset available to billions more devices",
    date: "September 17, 2021",
    image: "./news/image-3.png",
  },
]

export const videos = [
  {
    id: uuidv4(),
    tag: "Youtube",
    title: "Introduction to Paging - MAD Skills",
    date: "September 27, 2021",
    image: "./videos/image-1.jpg",
  },
  {
    id: uuidv4(),
    tag: "Youtube",
    title: "Paging - MAD Skills",
    date: "September 27, 2021",
    image: "./videos/image-2.jpg",
  },
]

export const community = [
  {
    id: uuidv4(),
    title: "Stack Overflow Android Community",
    desc: "Ask questions and get help and tips from Android developers in our Stack Overflow community",
    link: "Learn more",
    icon: <FaStackOverflow className="text-yellow-500" />,
  },
  {
    id: uuidv4(),
    title: "Twitter for Android Developers",
    desc: "Follow our Twitter and get real-time updates and announcements related to Android development",
    link: "Learn more",
    icon: <FaTwitter className="text-blue-600" />,
  },
  {
    id: uuidv4(),
    title: "Google Developers Community",
    desc: "Connect with fellow developers and startups in your area, hear from industry experts, share your skills, and learn",
    link: "Learn more",
    icon: <FcGoogle />,
  },
]

export const footer = [
  {
    id: uuidv4(),
    title: "More Android",
    links: [
      "Android",
      "Android for Enterprise",
      "Security",
      "Source",
      "News",
      "Blog",
      "Podcasts",
    ],
  },
  {
    id: uuidv4(),
    title: "Discover",
    links: ["Gaming", "Machine Learning", "Privacy", "5G"],
  },
  {
    id: uuidv4(),
    title: "Android Devices",
    links: [
      "Large Screens",
      "Wear OS",
      "Android TV",
      "Android for cards",
      "Android Things",
      "Chrome OS devices",
    ],
  },
  {
    id: uuidv4(),
    title: "Releases",
    links: [
      "Android 11",
      "Android 10",
      "Pie",
      "Oreo",
      "Nougat",
      "Marshmallow",
      "Lollipop",
      "KitKat",
    ],
  },
  {
    id: uuidv4(),
    title: "Documentation and downloads",
    links: [
      "Android Studio guide",
      "Developers guides",
      "API reference",
      "Download Studio",
      "Android NDK",
    ],
  },
  {
    id: uuidv4(),
    title: "Support",
    links: [
      "Report platform bug",
      "Report documentation bug",
      "Google Play support",
      "Join research studies",
    ],
  },
]

export const developers = [
  {
    id: uuidv4(),
    title: "Android",
  },
  {
    id: uuidv4(),
    title: "Chrome",
  },
  {
    id: uuidv4(),
    title: "Firebase",
  },
  {
    id: uuidv4(),
    title: "Google Cloud Platform",
  },
  {
    id: uuidv4(),
    title: "All Products",
  },
]
