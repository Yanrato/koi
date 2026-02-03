import Link from "next/link";

export default function Calendario() {
  return (
    <main className="space-y-6">
      <div className="bg-slate-500 p-6 text-center">
        <h2 className="text-2xl font-extrabold">Gestão de Tarefas</h2>
      </div>

        <nav className="max-w-4xl mx-auto bg-paper p-6 grid grid-cols-3 gap-6 text-center rounded-xl shadow">
  
  <Link
    href="/tarefas"
    className="flex items-center justify-center rounded-lg px-4 py-2 font-semibold
               transition-all duration-200
               hover:bg-primary hover:opacity-90 hover:scale-105"
  >
    Quadro Principal
  </Link>

  <Link
    href="/tarefas/calendario"
    className="flex items-center justify-center rounded-lg px-4 py-2 font-semibold
               transition-all duration-200
               hover:bg-primary hover:opacity-90 hover:scale-105"
  >
    Calendário
  </Link>

  <Link
    href="/tarefas/kanban"
    className="flex items-center justify-center rounded-lg px-4 py-2 font-semibold
               transition-all duration-200
               hover:bg-primary hover:opacity-90 hover:scale-105"
  >
    Kanban
  </Link>

</nav>
    </main>
  );
}