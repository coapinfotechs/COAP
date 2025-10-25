import { useEffect, useState } from "react";

export function useDados() {
  const [dados, setDados] = useState({
    notebooks: [],
    redesSociais: {},
    avaliacoes: [],
  });
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // ✅ Caminho correto para GitHub Pages (usa o domínio atual automaticamente)
    fetch(`${process.env.PUBLIC_URL || ""}/data/data.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao carregar dados");
        return res.json();
      })
      .then((data) => {
        setDados(data);
        setLoading(false);
      })
      .catch((err) => {
        setErro(err.message);
        setLoading(false);
      });
  }, []);

  return { ...dados, loading, erro };
}
