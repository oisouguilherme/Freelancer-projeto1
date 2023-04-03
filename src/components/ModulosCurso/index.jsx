import { Modulo } from './Modulo'
import './ModulosCurso.css'
import ImageUlisses from '../../assets/image-ulises.jpg'
import { ItemLista } from './Modulo/Itemlista';

export function ModulosCurso(){
  return (
    <div className="modulo-geral-container">
      <div className="modulo-title">
        <p>Conteúdo do Curso</p>
        <h2>O que você irá aprender?</h2>
      </div>

      <div className="modulo-curso-container">
        <img src={ImageUlisses} alt="" />

        <div className="modulo-curso">
          <Modulo modulo={"Módulo 1"}
            title={"Aula de boas vindas"}
            children={
              <ItemLista
                aula={"Aula 1 –"}
                text={"Introdução ao curso"}
              />
            }
          />
          <Modulo modulo={"Módulo 2"}
            title={"Vendas"}
            children={
              <ItemLista
                aula={"Aula 1 –"}
                text={"Panorama geral sobre vendas"}
              />
            }
            children2={
              <ItemLista
                aula={"Aula 2 –"}
                text={"Vendas modernas e as redes sociais"}
              />
            }
            children3={
              <ItemLista
                aula={"Aula 3 –"}
                text={"Canais de vendas"}
              />
            }
          />
          <Modulo modulo={"Módulo 3"}
            title={"Funil de vendas na prática"}
            children={
              <ItemLista
                aula={"Aula 1 –"}
                text={"O que é funil de vendas? "}
              />
            }
            children2={
              <ItemLista
                aula={"Aula 2 –"}
                text={"Funil de vendas na prática"}
              />
            }
          />
          <Modulo modulo={"Módulo 4"}
            title={"Aula de boas vindas"}
            children={
              <ItemLista
                aula={"Aula 1 –"}
                text={"Aprenda sobre WhatsApp e WhatsApp Business"}
              />
            }
            children2={
              <ItemLista
                aula={"Aula 2 –"}
                text={"Como construir uma base de clientes"}
              />
            }
            children3={
              <ItemLista
                aula={"Aula 3 –"}
                text={"Lista de transmissão, Grupos e Comunidades"}
              />
            }
          />
          <Modulo modulo={"Módulo 5"}
            title={"Campanha de vendas no WhatsApp"}
            children={
              <ItemLista
                aula={"Aula 1 –"}
                text={"Criando uma campanha de vendas"}
              />
            }
            children2={
              <ItemLista
                aula={"Aula 2 –"}
                text={"Estratégias para vender mais durante a campanha"}
              />
            }
            children3={
              <ItemLista
                aula={"Aula 3 –"}
                text={"Erros comuns nas vendas pelo WhatsApp"}
              />
            }
            children4={
              <ItemLista
                aula={"Aula 3 –"}
                text={"Uma campanha na prática"}
              />
            }
          />
          <Modulo modulo={"Módulo 6"}
            title={"Tipos de criativos para vender mais"}
            children={
              <ItemLista
                aula={"Aula 1 –"}
                text={"Como devem ser os criativos em vídeo e banner"}
              />
            }
            children2={
              <ItemLista
                aula={"Aula 2 –"}
                text={"Como devem ser os criativos em imagem, texto e áudio"}
              />
            }
          />
          <Modulo modulo={"Módulo 7"}
            title={"Atalhos da mente para vender mais"}
            children={
              <ItemLista
                aula={"Aula 1 –"}
                text={"Gatilhos mentais: contraste, reciprocidade, compromisso e coerência"}
              />
            }
            children2={
              <ItemLista
                aula={"Aula 2 –"}
                text={"Gatilhos mentais: aprovação social, afeição e autoridade"}
              />
            }
            children3={
              <ItemLista
                aula={"Aula 3 –"}
                text={"Gatilhos mentais: escassez e novidade"}
              />
            }
          />
        </div>
      </div>
    </div>
  );
}