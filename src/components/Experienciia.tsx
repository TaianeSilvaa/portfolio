import { useState } from 'react';

const experiencias = [
{
    empresa: 'Qintess',
    cargo: 'Analista Desenvolvedor 2',
    periodo: 'Abr 2025 – O momento',
    descricao:
      `Atuação como Desenvolvedora na Praxio, com foco em melhorias e correção de bugs em sistemas corporativos.
        Principais atividades e tecnologias utilizadas:
        Desenvolvimento em PL/SQL e linguagem Latromi

        Criação de scripts, tabelas e consultas otimizadas em PostgreSQL

        Metodologia ágil Scrum, participando ativamente dos rituais e entregas

        Utilização da ferramenta Azure DevOps para controle de versionamento e demandas

        Elaboração de documentos técnicos para envio à QA

        Execução de testes unitários para validação das implementações`,
  },
  {
    empresa: 'Praxio',
    cargo: 'Desenvolvedor Jr',
    periodo: 'Set 2020 – Jun 2023',
    descricao:
      `Atuação como Desenvolvedora na Praxio, com foco em melhorias e correção de bugs em sistemas corporativos.
        Principais atividades e tecnologias utilizadas:
        Desenvolvimento em PL/SQL e linguagem Latromi

        Criação de scripts, tabelas e consultas otimizadas em PostgreSQL

        Metodologia ágil Scrum, participando ativamente dos rituais e entregas

        Utilização da ferramenta Azure DevOps para controle de versionamento e demandas

        Elaboração de documentos técnicos para envio à QA

        Execução de testes unitários para validação das implementações`,
  },
  {
    empresa: 'Praxio',
    cargo: 'Analista de teste Jr',
    periodo: 'Fev 2020 – Set 2020',
    descricao:
      'Atuação como Analista de Testes Júnior em sistema ERP Avacorp-I, utilizando a metodologia ágil Scrum. Responsável pela execução de testes funcionais nos módulos do sistema, garantindo a qualidade e conformidade das entregas. Também atuei na elaboração de manuais para a wiki, produção de documentos de evidência de testes e registro detalhado de bugs encontrados durante os sprints.',
  },
  {
    empresa: 'Praxio',
    cargo: 'Analista de atendimento',
    periodo: 'Jun 2018 – Fev 2020',
    descricao:
      'Atuação como Analista de Atendimento, prestando suporte aos usuários do sistema ERP Avacorp-I, com foco no módulo financeiro. Realizava atendimentos via telefone e sistema de chamados, auxiliando clientes em rotinas como emissão de notas fiscais, contas a pagar e receber, conciliação bancária e geração de arquivos CNAB. Responsável por esclarecer dúvidas, identificar falhas operacionais e orientar sobre o uso correto da plataforma.',
  },
  // Você pode adicionar mais aqui...
];

export default function Experiencia() {
  const [selecionado, setSelecionado] = useState(0);

  return (
    <section className="bg-[#fef6ff] py-20 px-6 text-center sm:text-left" id="experiencias">
      <div className='max-w-4xl mx-auto'>
            <h2 className="text-3xl font-bold text-purple-700 mb-4">Experiências</h2>

            <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
        {/* Menu lateral */}
        <div className="md:w-1/3">
          <ul className="space-y-4 border-l-4 border-purple-500 pl-4">
            {experiencias.map((exp, index) => (
              <li
                key={exp.empresa}
                className={`cursor-pointer transition-all ${
                  selecionado === index ? 'text-purple-700 font-semibold' : 'text-gray-400'
                }`}
                onClick={() => setSelecionado(index)}
              >
                {exp.empresa}
              </li>
            ))}
          </ul>
        </div>

        {/* Conteúdo */}
        <div className="md:w-2/3">
          <h3 className="text-xl md:text-2xl font-semibold text-purple-400 mb-1">
            {experiencias[selecionado].cargo}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{experiencias[selecionado].periodo}</p>
          <h4 className="text-purple-700 font-medium mb-2">
            {experiencias[selecionado].empresa}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {experiencias[selecionado].descricao}
          </p>
        </div>
      </div>
      </div>
      
    </section>
  );
}
