import { Link } from "react-router-dom";

const PaginaConstrucao = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">🚧 Página em Construção</h1>
        <p className="mb-4 text-xl text-gray-600">
          Esta página ainda está sendo desenvolvida. Em breve teremos novidades por aqui!
        </p>
        <Link
          to="/"
          className="inline-block rounded bg-blue-800 px-6 py-2 text-white hover:bg-blue-900 transition-colors"
        >
          Retorne para Página Inicial
        </Link>
      </div>
    </div>
  );
};

export default PaginaConstrucao;
