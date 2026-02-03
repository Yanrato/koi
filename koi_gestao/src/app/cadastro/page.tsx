import Cadastro from "@/components/cadastro";


export default function CadastroPage() 

{
  return (
  
    <main className="p-10">
       <div className="bg-slate-500 p-6 text-center rounded-xl">
        <h2 className="text-2xl font-bold">Cadastro de Usuário</h2>
      </div>
      <br />
      <Cadastro />
      
    </main>
  );
}
