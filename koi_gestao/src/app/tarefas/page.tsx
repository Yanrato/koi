"use client";

import { useState } from "react";
import Link from "next/link";
import { NewTask } from "@/components/newtask";

type Task = {
  nome: string;
  data: string;
  urgencia: string;
  participantes: string;
};

export default function Tarefas() {
  const [tarefas, setTarefas] = useState<Task[]>([]);

  function adicionarTarefa(tarefa: Task) {
    setTarefas((prev) => [...prev, tarefa]);
  }

  return (
    <main className="space-y-6 p-6">
      {/* Título */}
      <div className="bg-slate-500 p-6 text-center rounded-xl">
        <h2 className="text-2xl font-bold">Gestão de Tarefas</h2>
      </div>

      {/* Navegação */}
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

      {/* Lista de tarefas */}
      <section className="max-w-4xl mx-auto grid gap-4">
        {tarefas.length === 0 && (
          <p className="text-center opacity-60">
            Nenhuma tarefa criada ainda
          </p>
        )}

        {tarefas.map((tarefa, index) => (
          <div
            key={index}
            className="bg-paper p-4 rounded-xl shadow space-y-1"
          >
            <h3 className="font-bold text-lg">{tarefa.nome}</h3>
            <p>📅 Entrega: {tarefa.data}</p>
            <p>⚡ Urgência: {tarefa.urgencia}</p>
            <p>👥 Participantes: {tarefa.participantes}</p>
          </div>
        ))}
      </section>

      {/* Botão / Modal */}
      <NewTask onCreate={adicionarTarefa} />
    </main>
  );
}
