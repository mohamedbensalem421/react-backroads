import img1 from "./images/tour-1.jpeg";
import img2 from "./images/tour-2.jpeg";
import img3 from "./images/tour-3.jpeg";
import img4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {id: 1, href: "#home", text: "Home"},
  {id: 2, href: "#about", text: "About"},
  {id: 3, href: "#services", text: "Services"},
  {id: 4, href: "#tours", text: "Tours"},
]

export const featuredTours = [
  {id: 1, img: img1, date: "August 26th, 2020", title: "Tibet Adventure", place: "China", price: "2100" , days: 6},
  {id: 2, img: img2, date: "October 1th, 2020", title: "Best Of Java", place: "Indonesia", price: "1400" , days: 11},
  {id: 3, img: img3, date: "September 15th, 2020", title: "Explore Hong Kong", place: "Hong Kong", price: "5000" , days: 8},
  {id: 4, img: img4, date: "December 5th, 2019", title: "Kenya Highlights", place: "Kenya", price: "3300" , days: 20},
]
export const services = [
  {id: 1, services: "Saving Money", icon: "fa-solid fa-wallet"},
  {id: 2, services: "Endless Hiking", icon: "fa-solid fa-tree"},
  {id: 3, services: "Amazing Comfort", icon: "fa-solid fa-socks"},
]