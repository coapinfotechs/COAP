import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../index.css";
import { useDados } from "../hooks/useDados";

export default function AvaliacaoCarousel() {
  const { avaliacoes, loading, erro } = useDados();
  const [index, setIndex] = useState(0);

  if (loading) {
    return <p className="text-center">Carregando avaliações...</p>;
  }

  if (erro) {
    return <p className="text-center text-red-500">Erro ao carregar avaliações: {erro}</p>;
  }

  if (!avaliacoes || avaliacoes.length === 0) {
    return <p className="text-center">Nenhuma avaliação disponível.</p>;
  }

  const total = avaliacoes.length;

  const handleNext = () => {
    if (index < total - 1) setIndex(index + 1);
  };

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="avaliacao-carousel-container">
      <h2 className="text-2xl font-semibold mb-6 some-text">Avaliações de Clientes</h2>

      <div className="relative flex items-center justify-center w-full">
        {/* Seta Esquerda */}
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="carousel-arrow absolute left-0 z-10"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Imagem central com animação */}
        <div className="avaliacao-carousel-single flex justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="avaliacao-card"
            >
              <img
                src={avaliacoes[index]}
                alt={`Avaliação ${index + 1}`}
                className="avaliacao-img"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Seta Direita */}
        <button
          onClick={handleNext}
          disabled={index === total - 1}
          className="carousel-arrow absolute right-0 z-10"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators mt-6">
        {avaliacoes.map((_, i) => (
          <button
            key={i}
            aria-label={`Ir para avaliação ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`carousel-indicator ${index === i ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
