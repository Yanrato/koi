"use client";

import { useState } from "react";

type Task = {
  nome: string;
  data: string;
  urgencia: string;
  participantes: string;
};

export function NewTask({ onCreate }: { onCreate: (task: Task) => void }) {
  const [open, setOpen] = useState(false);

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [participantes, setParticipantes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onCreate({
      nome,
      data,
      urgencia,
      participantes,
    });

    setNome("");
    setData("");
    setUrgencia("");
    setParticipantes("");
    setOpen(false);
  }

  return (
    <>
      {/* Botão fixo */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white px-6 py-3 rounded-full shadow-lg
                   transition hover:scale-105 hover:opacity-90"
      >
        + Criar tarefa
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-paper p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Nova tarefa</h2>

            <form onSubmit={handleSubmit} className="space-y-4 text-text">
              <input
                type="text"
                placeholder="Nome da tarefa"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full p-2 rounded border"
                required
              />

              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full p-2 rounded border"
                required
              />

              <select
                value={urgencia}
                onChange={(e) => setUrgencia(e.target.value)}
                className="w-full p-2 rounded border"
                required
              >
                <option value="">Selecione a urgência</option>
                <option>Muito urgente</option>
                <option>Urgente</option>
                <option>Pouco urgente</option>
              </select>

              <textarea
                placeholder="Participantes"
                value={participantes}
                onChange={(e) => setParticipantes(e.target.value)}
                className="w-full p-2 rounded border"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
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
      )}
    </>
  );
}
