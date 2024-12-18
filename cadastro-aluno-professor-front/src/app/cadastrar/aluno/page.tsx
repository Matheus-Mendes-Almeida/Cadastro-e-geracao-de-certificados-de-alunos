'use client'
import { useState } from "react";

export default function Home() {
const [aluno, setAluno] = useState<any>();

  async function cadaluno(){
    const response = await fetch("http://localhost:3300/aluno", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "aluno@gmail.com",
        nome: "Aluno",
        senha: "12345",
        dataNascimento: new Date("2000-05-05"),
        idAluno: "4231",
      }),
    });

    if (!response.ok) return;

    const data = await response.json();
    setAluno(data)
  }
  
    return <div >{aluno?.email} <button onClick={cadaluno} >Cadastrar aluno</button>
    </div>
}