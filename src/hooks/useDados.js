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
    fetch(process.env.PUBLIC_URL + "/data/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar dados");
        }
        return response.json();
      })
      .then((data) => {
        setDados(data);
        setLoading(false);
      })
      .catch((error) => {
        setErro(error.message);
        setLoading(false);
      });
  }, []);

  return { ...dados, loading, erro };
}
