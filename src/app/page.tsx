import Contact from "./components/Contact/Contact";
import Creations from "./components/Creations/Creations";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className="flex justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-0">
      <main className="flex flex-col row-start-2 items-center sm:items-start">
      <Hero/>
      <Contact/>
      <Creations/>
      </main>
    </div>
  );
}
