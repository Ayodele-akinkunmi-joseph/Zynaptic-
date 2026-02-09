import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import About from "./components/About";
import Build from "./components/Build";
import Stack from "./components/Stack";
import Ping from "./components/Ping";




export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // loader shows for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative">
      <Navbar /> 
      <Hero />
      <About />
      <Build />
      <Stack />
      <Ping />
    </div>
  );
}
