import { useEffect, useState } from 'react';

function TypewriterText() {
  const fullText = 'Oi, eu sou a Taiane!';
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText.charAt(index));
        setIndex(index + 1);
      }, 100); // velocidade da digitação (100ms por letra)

      return () => clearTimeout(timeout); // limpa o timeout
    }
  }, [index, fullText]);

  return (
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-purple-800 mb-4">
      {text}
      <span className="animate-pulse">|</span> {/* cursor piscando */}
    </h1>
  );
}
export default  TypewriterText;