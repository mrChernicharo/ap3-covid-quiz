const urlImages = [
  "https://www.telessaude.unifesp.br/images/noticias/tele---coronavirussite.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Novel_Coronavirus_SARS-CoV-2.jpg/1200px-Novel_Coronavirus_SARS-CoV-2.jpg",
  "https://www.aovivodebrasilia.com.br/wp-content/uploads/2020/07/vacina-covid-19-coronavirus-vaccine.jpeg",
];

export const questions = [
  {
    question:
      "Qual o nome da província chinesa onde surgiram os primeiros casos de COVID-19 ?",
    imgUrl: urlImages[2],
    answers: [
      { isCorrect: true, content: "Hubei", message: "Correto! Você acertou" },
      {
        isCorrect: false,
        content: "Wuhan",
        message: "Errado! Wuhan é a capital da província de Hubei",
      },
      {
        isCorrect: false,
        content: "Hong Kong",
        message:
          "Errado! Hong Kong não tem nada a ver com o começo da pandemia! kkkk",
      },
      {
        isCorrect: false,
        content: "Pequim",
        message: "Errado! Pequim é a capital da China",
      },
    ],
  },
  {
    question:
      "Com o planos de dominar o mundo, quem foi o responsável pela conspiração que deu origem ao COVID-19 ?",
    imgUrl: urlImages[0],

    answers: [
      {
        isCorrect: true,
        content: "Ninguém",
        message:
          "Correto! Você acertou. Há uma infinidade de teorias conpiratórias sobre o COVID. Não entre nessa!",
      },
      {
        isCorrect: false,
        content: "Os comunistas chineses",
        message:
          "Errado! Teoria idiota inventada pelas direitas contemporâneas",
      },
      {
        isCorrect: false,
        content: "Os comunistas Russos",
        message:
          "Errado! Teoria idiota inventada pelas direitas contemporâneas",
      },
      {
        isCorrect: false,
        content: "Elon Musk",
        message: "Errado! Claro...",
      },
    ],
  },

  {
    question:
      "Qual é o total de mortos por COVID-19 no Brasil contabilizados até meados de novembro de 2020 ?",
    imgUrl: urlImages[1],
    answers: [
      {
        isCorrect: true,
        content: "164 mil",
        message: "Correto! Você acertou. Tá por dentro hein!",
      },
      {
        isCorrect: false,
        content: "736 mil",
        message: "Errado! Também não foi tanta gente assim, calma!",
      },
      {
        isCorrect: false,
        content: "70 mil",
        message: "Errado! Não vem subdimenisonar os dados não, tá bom?",
      },
      {
        isCorrect: false,
        content: "213 mil",
        message: "Errado! É menos...",
      },
    ],
  },

  {
    question:
      "Qual foi o record de mortos no mesmo dia por COVID-19 no Brasil ?",
    imgUrl: urlImages[0],
    answers: [
      {
        isCorrect: true,
        content: "1595 mortos",
        message:
          "Correto! Você acertou. O dia 31 de Julho de 2020 é o dono desse triste record",
      },
      {
        isCorrect: false,
        content: "3420 mortos",
        message: "Errado! Também não foi tanta gente assim não, calma!",
      },
      {
        isCorrect: false,
        content: "24 mortos",
        message: "Errado! Não vem subdimenisonar os dados não, tá bom?",
      },
      {
        isCorrect: false,
        content: "892 mortos",
        message: "Errado! nosso record infelizmente foi maior...",
      },
    ],
  },

  {
    question: "Qual o país teve o maior número de vítimas fatais ?",
    imgUrl: urlImages[2],

    answers: [
      {
        isCorrect: true,
        content: "EUA",
        message: "Correto! ",
      },
      {
        isCorrect: false,
        content: "India",
        message: "Errado! ",
      },
      {
        isCorrect: false,
        content: "China",
        message: "Errado! ",
      },
      {
        isCorrect: false,
        content: "Rússia",
        message: "Errado! ",
      },
    ],
  },

  {
    question:
      "Qual é o total acumulado de infecções por COVID no Brasil em meados de Novembro de 2020 ?",
    imgUrl: urlImages[1],

    answers: [
      {
        isCorrect: true,
        content: "5.65 milhões",
        message:
          "Correto! Cerca de 2% de toda a população do país já foi afetada pelo corona",
      },
      {
        isCorrect: false,
        content: "30 milhões",
        message: "Errado! Também não foi tanta gente assim não, calma!",
      },
      {
        isCorrect: false,
        content: "240 mil",
        message: "Errado! Não vem subdimenisonar os dados não, tá bom?",
      },
      {
        isCorrect: false,
        content: "1.32 milhão",
        message: "Errado! nossa marca infelizmente já é bem maior...",
      },
    ],
  },
];
