import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { AppsBanner } from "./components/AppsBanner"
import { Banner } from "./components/Banner"
import { Merchant } from "./components/Merchant"
import { Promo } from "./components/Promo"
import { Rewards } from "./components/Rewards"

const DATA_MERCHANT = [
  { id: "1", title: "Pizza Hut", imageUrl: "/images/pizzaHut.png" },
  { id: "2", title: "Starbucks", imageUrl: "/images/starbucks.png" },
  { id: "3", title: "McDonalds", imageUrl: "/images/mcDonald.png" },
  { id: "4", title: "Dominos Pizza", imageUrl: "/images/dominosPizza.png" },
  { id: "5", title: "KFC", imageUrl: "/images/kfc.png" },
  { id: "6", title: "HokBen", imageUrl: "/images/hokBen.png" },
]

const DATA_TAB = [
  { id: "1", title: "All", icon: "" },
  { id: "2", title: "Food", icon: "/icons/burger.svg" },
  { id: "3", title: "Groceries", icon: "/icons/groceries.svg" },
  { id: "4", title: "Beverages", icon: "/icons/drink.svg" },
  { id: "5", title: "Beverages", icon: "/icons/drink.svg" },
  { id: "6", title: "Beverages", icon: "/icons/drink.svg" },
]

const DATA_CARD = [
  {
    id: "1",
    imageCard: "/images/starbucksCard.png",
    imageCompany: "/images/starbucks.png",
    companyName: "Starbucks",
    Title: "Monday Mood Booster Starbucks",
    point: 250,
  },
  {
    id: "2",
    imageCard: "/images/kfcCard.png",
    imageCompany: "/images/kfc.png",
    companyName: "KFC",
    Title: "KFC Value Serbu",
    point: 172,
  },
  {
    id: "3",
    imageCard: "/images/segariCard.png",
    imageCompany: "/images/segari.png",
    companyName: "Segari",
    Title: "Poromo PASTISEGAR",
    point: 104,
  },
  {
    id: "4",
    imageCard: "/images/dominosCard.png",
    imageCompany: "/images/dominosPizza.png",
    companyName: "Domino’s Pizza",
    Title: "Domino’s: All i want for Christmas",
    point: 52,
  },
  {
    id: "5",
    imageCard: "/images/hokBenCard.png",
    imageCompany: "/images/hokBen.png",
    companyName: "HokBen",
    Title: "HokBen: Pay Day",
    point: 147,
  },
  {
    id: "6",
    imageCard: "/images/paperLunchCard.png",
    imageCompany: "/images/paperLunch.png",
    companyName: "Paper Lunch",
    Title: "SENIN HEMAT",
    point: 104,
  },
  {
    id: "7",
    imageCard: "/images/matahariCard.png",
    imageCompany: "/images/matahari.png",
    companyName: "Matahari",
    Title: "Weekend SALE!",
    point: 74,
  },
  {
    id: "8",
    imageCard: "/images/kopiKenanganCard.png",
    imageCompany: "/images/kopiKenangan.png",
    companyName: "Kopi Kenangan",
    Title: "HARMANAS",
    point: 87,
  },
]

export default function Home() {
  return (
    <div
      className="relative bg-repeat"
      style={{
        backgroundImage: `url(/images/background.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Header />
      <Banner />
      <Promo />
      <Merchant data={DATA_MERCHANT} />
      <Rewards tabList={DATA_TAB} dataCard={DATA_CARD} />
      <AppsBanner />
      <Footer />
    </div>
  )
}
