// src/data/skills.js

const skills = [
  {
    name: "React",
    icon: "devicon-react-original colored",
    description: "Biblioteca JavaScript moderna para construir interfaces de usuário dinâmicas e reativas.",
  },
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
    description: "Linguagem de programação essencial para tornar páginas web interativas e dinâmicas.",
  },
  {
    name: "HTML5",
    icon: "devicon-html5-plain colored",
    description: "Linguagem de marcação que estrutura e organiza o conteúdo de páginas web.",
  },
  {
    name: "CSS3",
    icon: "devicon-css3-plain colored",
    description: "Linguagem de estilos para criar layouts modernos, responsivos e visuais agradáveis.",
  },
  {
    name: "Tailwind CSS",
    icon: "devicon-tailwindcss-original colored",
    description: "Framework utilitário que permite criar designs customizados de forma rápida e responsiva.",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
    description: "Superset do JavaScript que adiciona tipagem estática, melhorando a escalabilidade do código.",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
    description: "Ambiente de execução JavaScript que permite criar aplicações backend com alta performance.",
  },
  {
    name: "Java",
    icon: "devicon-java-plain colored",
    description: "Linguagem robusta e orientada a objetos, amplamente utilizada em aplicações corporativas.",
  },
  {
    name: "PHP",
    icon: "devicon-php-plain colored",
    description: "Linguagem de programação popular para desenvolvimento web e back-end com foco em dinamismo.",
  },
  {
    name: "SQL",
    icon: "devicon-mysql-plain colored",
    description: "Linguagem para gerenciamento e consulta de bancos de dados relacionais como MySQL e PostgreSQL.",
  }
]

export default function Habilidades() {
   return (
    <section className="py-16 bg-[#FFF8FB] text-center">
      <h2 className="text-3xl font-bold text-purple-700 mb-10">Habilidades</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative flex flex-col items-center"
          >
            {/* Ícone */}
            <i className={`${skill.icon} text-5xl mb-2 group-hover:scale-125 group-hover:drop-shadow-lg transition-all duration-300`}></i>
            
            {/* Nome */}
            <span className="text-purple-800 font-medium">{skill.name}</span>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-3 w-52 px-4 py-2 bg-purple-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none z-10">
              {skill.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}