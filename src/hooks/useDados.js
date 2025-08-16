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
    fetch("https://raw.githubusercontent.com/coapinfotechs/COAP/blob/main/public/data/data.json")
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
