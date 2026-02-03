"use client";

export default function Cadastro() {
  return (
    <main>
      <div className="flex items-center justify-center z-50">
        <div className="bg-paper p-6 rounded-xl w-full max-w-md">
          <h2 className="text-xl font-bold mb-4">Cadastro</h2>

          <form className="space-y-4 text-text">
            <input
              type="text"
              placeholder="Nome de usuário"
              className="w-full p-2 rounded border"
              required
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded border"
              required
            />

            <input
              type="password"
              placeholder="Senha"
              className="w-full p-2 rounded border"
              required
            />

            <input
              type="password"
              placeholder="Confirme a senha"
              className="w-full p-2 rounded border"
              required
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                className="hover:text-primary hover:underline"
              >
                Cancelar
              </button>

              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded
                           hover:opacity-90 hover:scale-105"
              >
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
