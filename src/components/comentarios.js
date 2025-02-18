import React, { useState } from "react";



const Comentarios = () => {
  const [comentarios, setComentarios] = useState([]);
  const [comentario, setComentario] = useState("");

  const adicionarComentario = () => {
    if (comentario) {
      setComentarios([...comentarios, comentario]);
      setComentario("");
    }
  };

  return (
    <div>
      <h2>Comentários</h2>
      <input
        data-testid="comentario-input"
        type="text"
        value={comentario}
        onChange={(e) => setComentario(e.target.value)}
      />
      <button data-testid="comentario-submit" onClick={adicionarComentario}>
        Adicionar Comentário
      </button>
      <ul data-testid="comentarios-list">
        {comentarios.map((comentario, index) => (
          <li key={index} data-testid={`comentario-${index}`}>
            {comentario}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comentarios;
