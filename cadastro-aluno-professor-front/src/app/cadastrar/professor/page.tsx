'use client'
import { useState } from "react";

export default function Home() {
const [professor, setProfessor] = useState<any>();

  async function cadprofessor(){
    const response = await fetch("http://localhost:3300/professor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "professor@gmail.com",
        nome: "Professor",
        senha: "professor",
        dataNascimento: new Date("1999-05-05"),
        idProfessor: "123",
      }),
    });

    if (!response.ok) return;

    const data = await response.json();
    setProfessor(data)
  }
  
    return <div >{professor?.email} <button onClick={cadprofessor} >Cadastrar professor</button>
    </div>
}