import Navbar from "../components/Navbar";
import Card from "./components/Card";

const cardData = [
  {
    title: "Komponen 1",
    description: "Ini adalah komponen pertama",
    name: "Alice Johnson",
    role: "UI Designer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    title: "Komponen 2",
    description: "Ini adalah komponen kedua",
    name: "Bob Williams",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    title: "Komponen 3",
    description: "Ini adalah komponen ketiga",
    name: "Charlie Smith",
    role: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    title: "Komponen 4",
    description: "Ini adalah komponen keempat",
    name: "Diana Prince",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            name={card.name}
            role={card.role}
            image={card.image}
          />
        ))}
      </div>
    </>
  );
}
