import Image from "next/image";
import React from "react";
import {Button} from "./ui/button" 
import { Link } from "lucide-react";

export default function Hero() {    
return (
    <main className="relative  flex items-center justify-center  p-6 overflow-hidden rounded-md">
            <div className="hero" >
            <div className="hero--content">
                <h1 className="h1--hero">A platarforma mais eficaz para seus projetos </h1>
                <h3 className="h3--hero">Organize suas tarefas de forma eficiente</h3>
                    
                <Button>Comece Agora</Button>
                    
                
            </div>   
       
        <Image 
        src="/grafico.png" 
        alt="background img"
        fill={true}
        className="bg-img rounded-md"
        />
        </div>
    </main>
    
);

}
