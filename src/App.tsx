import { useEffect, useState } from 'react';
import avatar from './assets/fundo.png';
import flor from './assets/flor.png';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Experiencia from './components/Experienciia';
import Habilidades from './components/Habilidades';

function TypewriterText() {
  const fullText = 'Oi, eu sou a Taiane!';
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-purple-800">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}

function App() {
  const [showFlowers, setShowFlowers] = useState(false);

  const handleShowFlowers = () => {
    setShowFlowers(false);
    setTimeout(() => setShowFlowers(true), 50);
    setTimeout(() => setShowFlowers(false), 9000);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 bg-[#FFF8FB] shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <span className="text-purple-700 font-bold text-xl">Taiane.dev</span>
        <ul className="flex gap-6 text-purple-700 font-medium" data-aos="fade-left">
          <li><a href="#sobre" className="hover:underline">Sobre</a></li>
          <li><a href="#projetos" className="hover:underline">Projetos</a></li>
          <li><a href="#contato" className="hover:underline">Contato</a></li>
        </ul>
      </nav>

      {/* FLORES - FIXADAS NO TOPO, PARA COBRIR TODA A PÁGINA */}
      {showFlowers && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
          {[...Array(20)].map((_, i) => (
            <img
              key={i}
              src={flor}
              alt="Flor"
              className="absolute w-6 h-6 animate-flower-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* HERO SECTION */}
      <section className="h-screen bg-[#FFF8FB] flex flex-col items-center justify-center text-center pt-16 px-6 relative">
        <img
          src={avatar}
          alt="Avatar Taiane"
          className="w-[180px] sm:w-[240px] md:w-[300px] rounded-full shadow-xl select-none pointer-events-none mb-6"
        />
        <TypewriterText />
        <p className="text-base sm:text-lg md:text-xl text-purple-600 mt-4" data-aos="fade-up">
          Desenvolvedora Front-End, graduada em Análise e Desenvolvimento de Sistemas pelo IFRS.
        </p>
        <div className="absolute bottom-10 animate-bounce">
          <a href="#sobre" className="text-sm text-purple-600 hover:text-purple-800">
            ↓ Role para saber mais
          </a> 
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="h-screen bg-white py-20 px-6 text-center sm:text-left" data-aos="fade-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">Sobre mim</h2>
          <p className="text-base sm:text-lg md:text-xl text-purple-600 mb-4">
            Desenvolvedora Front-End, graduada em Análise e Desenvolvimento de Sistemas pelo IFRS.
          </p>
          <p className="text-gray-700 text-lg">
            Oi, eu sou a Taiane! Comecei minha jornada como dev de SQL lá em 2020 e hoje já atuo como full stack, mexendo com Java, C#, JavaScript e SQL.
Mas, vou te contar, minha paixão mesmo é o front-end — adoro pegar uma ideia ou um layout e transformar tudo em código que funciona (e fica bonito!).
No final das contas, o que eu preciso é só de um computador, umas boas ideias e, claro, muito café pra manter o ritmo! ☕💻
          </p>
        </div>
      </section>

      {/* Experiencia */}
      <section className="h-screen" data-aos="fade-up">
        <Experiencia />
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="h-screen bg-white py-20 px-6 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">Projetos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Projeto 1</h3>
            <p className="text-gray-600 text-sm">Descrição do projeto aqui.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Projeto 2</h3>
            <p className="text-gray-600 text-sm">Outro projeto legal aqui.</p>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="h-screen" data-aos="fade-up">
        <Habilidades />
      </section>

      {/* CONTATO */}
      <section id="contato" className="bg-[#fef6ff] py-20 px-6 text-center relative shadow-md" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Contato</h2>
        <p className="text-gray-700 mb-4">
          Quer conversar sobre projetos, oportunidades ou tecnologia? Estou por aqui! 👩‍💻 </p>
        <button onClick={handleShowFlowers}>
          <a
            href="mailto:taiane@email.com"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Fale comigo
          </a>
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-white text-center py-6 text-sm text-purple-600">
        © 2025 Taiane Silva — Feito com 💜
      </footer>
    </>
  );
}

export default App;
