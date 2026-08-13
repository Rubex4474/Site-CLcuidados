export const aboutHeadline =
  "Nascemos da união de duas vocações: cuidar com excelência e transformar isso em um propósito de vida.";

interface AboutTextSegment {
  text: string;
  emphasis?: boolean;
}

export const aboutParagraphs: AboutTextSegment[][] = [
  [
    {
      text: "Caio tem mais de 15 anos de experiência na enfermagem, com ampla atuação em setores como UTI, UTI COVID, Pronto-Socorro e Emergência. Depois de uma vida dedicada ao cuidado hospitalar, decidiu voltar seu olhar para o ",
    },
    { text: "atendimento domiciliar", emphasis: true },
    {
      text: " e à terceira idade. Hoje, leva todo esse conhecimento técnico e sensível diretamente para dentro do lar dos pacientes.",
    },
  ],
  [
    {
      text: "Leonardo atua há mais de 4 anos na área da enfermagem. Natural de São Paulo, mudou-se para ",
    },
    { text: "Indaiatuba", emphasis: true },
    {
      text: " em busca de novas oportunidades para desenvolver sua carreira e entregar um atendimento mais próximo e humano. Ao perceber a grande demanda por cuidados especializados e o reconhecimento pelo seu trabalho, viu no empreendedorismo uma chance de oferecer algo além do convencional — um ",
    },
    { text: "cuidado", emphasis: true },
    { text: " verdadeiramente diferenciado." },
  ],
  [
    {
      text: "Juntos, entenderam que abrir uma clínica exigiria um investimento que ainda não era possível — mas o desejo de fazer a diferença falou mais alto. Assim, surgiu a ",
    },
    { text: "CL Cuidados Domiciliares", emphasis: true },
    {
      text: ": uma empresa que une profissionalismo, empatia e experiência para entregar o melhor cuidado no lugar onde a vida acontece — ",
    },
    { text: "em casa", emphasis: true },
    { text: "." },
  ],
];
