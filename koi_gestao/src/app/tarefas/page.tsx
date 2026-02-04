"use client";

import NavTarefas from "@/components/navtarefas";
import Modal from "@/components/modal";
import { Vazio } from "@/components/vazio";

export default function Tarefas() {
  return (
    <main className="space-y-6 p-6">
      <NavTarefas />
    <Vazio />
      
      </main>
  );
}
