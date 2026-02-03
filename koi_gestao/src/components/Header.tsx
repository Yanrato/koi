import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <nav className="bg-secondary w-full">
      <div className="grid grid-cols-3 items-center p-3 max-w-7xl mx-auto">
        
        {/* ESQUERDA */}
        <ul className="hidden md:flex gap-6 justify-start">
          <li className=" rounded-full px-3 py-1 text-text text-2xl font-bold
          transition 
          hover:scale-105 hover:text-primary hover:underline hover:bg-blue-400/80">
            <Link href="/">Home</Link>
          </li>
        </ul>

        {/* CENTRO */}
        <div className="flex justify-center transition 
        hover:text-primary hover:underline hover:scale-105">
          <Image
            src="/logo_koi.png"
            alt="Logo Koi Gestão"
            width={120}
            height={48}
            priority
          />
        </div>

        {/* DIREITA */}
        <ul className="flex gap-4 justify-end">
          <li className="rounded-full px-3 py-1 text-text text-2xl font-bold
          transition 
          hover:scale-105 hover:text-primary hover:underline hover:bg-blue-400/80">
            <Link href="/login">Login</Link>
          </li>

          <li className="rounded-full px-3 py-1 text-text text-2xl font-bold
          transition 
          hover:scale-105 hover:text-primary hover:underline hover:bg-blue-400/80">
            <Link href="/cadastro">Cadastro</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
};
