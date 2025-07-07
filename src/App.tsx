import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (

    <div className="w-[1440px] mx-auto h-screen py-8 px-10 ">
     <Header />
     <Hero />
     <AboutUs/>
    </div>
  );
}

export default App;
