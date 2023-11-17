"use client";

import { Plus, SendHorizontal } from "lucide-react";
import Image from "next/image";

export function Chat() {
  function sendMessage() {}

  return (
    <section className="flex rounded-lg shadow-main">
      <div className="flex flex-col gap-4 w-64 p-6 border-r border-[#E5EAEF]">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="relative h-11 w-11 rounded-full bg-[#E5EAEF]">
            <Image src={"/img/plataforma/bot.png"} alt="" height={44} width={44} />

            <div className="absolute bottom-1 right-1 h-2 w-2 bg-green-500 rounded-full animate-ping" />
            <div className="absolute bottom-1 right-1 h-2 w-2 bg-green-500 rounded-full" />
          </div>
          
          <span>Assistente NexMind</span>
        </div>

        <div className="h-[2px] w-full bg-[#E5EAEF]" />

        <div className="flex flex-col items-center gap-4 h-full">
          <h3 className="mb-1">Suas conversas</h3>

          <div className="flex justify-center items-center h-10 w-full border border-[#E5EAEF] rounded-lg text-sm font-medium">
            Conversa sobre tal...
          </div>
        </div>

        <button className="flex justify-center items-center gap-2 py-[10px] bg-[#123359] rounded-lg text-sm text-white font-medium">
          <Plus size={20} />
          Nova conversa
        </button>
      </div>

      <div className="grid grid-rows-[1fr_56px] w-full">
        <div className="flex flex-col gap-6 py-10 px-6">
          <div className="relative flex items-center px-4 h-16 border border-[#E5EAEF] rounded-lg">
            <div className="absolute -top-[11px] flex justify-center items-center px-3 h-5 bg-[#123359] rounded-full text-xs text-white font-medium">
              Você
            </div>

            <p className="w-full">Como faz miojo?</p>
          </div>

          <div className="relative flex items-center px-4 h-16 bg-[#E5EAEF] rounded-lg">
            <div className="absolute -top-[11px] flex justify-center items-center px-3 h-5 bg-white border border-[#E5EAEF] rounded-full text-xs text-black font-medium">
              Assistente
            </div>

            <p className="w-full">Eu também não sei.</p>
          </div>
        </div>

        <div className="flex items-center gap-6 px-6 border-t border-[#E5EAEF]">
          <input
            type="text"
            id="message"
            name="message"
            className="w-full outline-none"
            placeholder="Digite sua pergunta..."
            autoComplete="off"
          />

          <button onClick={sendMessage} className="flex justify-center items-center h-8 w-8 rounded-lg border border-[#E5EAEF]">
            <SendHorizontal size={20} strokeWidth={1.5} className="text-[#E5EAEF]" />
          </button>
        </div>
      </div>
    </section>
  );
}
