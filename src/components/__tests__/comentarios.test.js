import { render, screen, fireEvent } from "@testing-library/react";
import Comentarios from "../Comentarios"; 




test("deve inserir dois comentários", () => {
  render(<Comentarios />);

  // Referência aos elementos
  const input = screen.getByTestId("comentario-input");
  const button = screen.getByTestId("comentario-submit");

  // Inserir o primeiro comentário
  fireEvent.change(input, { target: { value: "Primeiro comentário" } });
  fireEvent.click(button);

  // Inserir o segundo comentário
  fireEvent.change(input, { target: { value: "Segundo comentário" } });
  fireEvent.click(button);

  // Verificar se os comentários aparecem na lista
  const comentario1 = screen.getByTestId("comentario-0");
  const comentario2 = screen.getByTestId("comentario-1");

  expect(comentario1).toHaveTextContent("Primeiro comentário");
  expect(comentario2).toHaveTextContent("Segundo comentário");
});
