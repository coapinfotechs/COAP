import { useParams, useNavigate } from "react-router-dom";
import { notebooks } from "../data/notebooks";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageGalleryCarousel from "../components/ImageGalleryCarousel";
import { ArrowLeft } from "lucide-react";

function NotebookPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const notebook = notebooks.find((n) => n.id === Number(id));

  if (!notebook) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container-main">
          <div className="text-center p-4">
            <h1 className="text-3xl font-bold mb-4">Notebook não encontrado</h1>
            <p className="mb-8">
              O notebook que você está procurando não está disponível.
            </p>
            <button onClick={() => navigate("/")} className="btn btn-gradient">
              Voltar para a página inicial
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const precoFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(notebook.preco);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container-main">
        <button onClick={() => navigate("/")} className="btn-voltar">
          <ArrowLeft size={20} />
          Voltar para a lista
        </button>

        <section className="product-section">
          <ImageGalleryCarousel imagens={notebook.imagens} />

          {/* Informações do Produto */}
          <div className="product-info info-container">
            <h1 className="text-3xl">{notebook.titulo}</h1>
            <p className="text-gray-500">
              {notebook.marca} {notebook.modelo}
            </p>

            <h2 className="text-2xl text-blue-600">{precoFormatado}</h2>

            <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded w-fit">
              {notebook.estado}
            </span>

            <p>{notebook.descricao}</p>

            <div className="mt-6">
              <a
                href={`https://wa.me/555535998428761?text=${encodeURIComponent(
                  `Olá, tenho interesse no notebook "${notebook.titulo}". Poderia me passar mais informações?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gradient w-full text-center"
              >
                Comprar via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Especificações Técnicas */}
        <section className="card-spec mt-12">
          <h3 className="section-title">Especificações Técnicas</h3>
          <div className="specs-grid">
            <div>
              <strong>Processador</strong>
            </div>
            <div>{notebook.processador}</div>
            <div>
              <strong>Memória</strong>
            </div>
            <div>{notebook.memoria}</div>
            <div>
              <strong>Armazenamento</strong>
            </div>
            <div>{notebook.armazenamento}</div>
            <div>
              <strong>Placa de Vídeo</strong>
            </div>
            <div>{notebook.placaVideo}</div>
            <div>
              <strong>Tela</strong>
            </div>
            <div>{notebook.tela}</div>
            <div>
              <strong>Estado</strong>
            </div>
            <div>{notebook.estado}</div>
          </div>
        </section>

        <section className="info-section">
          <h3 className="section-title">Garantia e Política de Devolução</h3>
          <p className="mb-4">
            Todos os nossos notebooks seminovos possuem garantia de 3 meses para
            defeitos funcionais. Realizamos testes rigorosos em todos os
            equipamentos antes da venda para garantir o melhor estado de
            funcionamento possível.
          </p>
          <p>
            Caso o produto apresente algum problema nos primeiros 7 dias após a
            compra, oferecemos a possibilidade de troca ou devolução do valor
            pago. Entre em contato conosco imediatamente caso identifique
            qualquer problema com seu equipamento.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default NotebookPage;
