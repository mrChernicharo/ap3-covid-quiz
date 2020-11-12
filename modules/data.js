const urlImages = [
  "https://conteudo.imguol.com.br/c/entretenimento/1a/2020/03/23/mascara-de-nao-tecido-coronavirus-1584992534058_v2_1920x1280.jpg", // 0 gatinha de máscara
  "https://www.telessaude.unifesp.br/images/noticias/tele---coronavirussite.jpg", // moleculas
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Novel_Coronavirus_SARS-CoV-2.jpg/1200px-Novel_Coronavirus_SARS-CoV-2.jpg", // 2 informe-se feião
  "https://www.aovivodebrasilia.com.br/wp-content/uploads/2020/07/vacina-covid-19-coronavirus-vaccine.jpeg", // vacina
  "https://exame.com/wp-content/uploads/2020/08/GettyImages-1217170434.jpg?quality=70&strip=info&resize=680,453", // 4 bolinha
  "https://assets.b9.com.br/wp-content/uploads/2020/02/Coronaviirus-china-mascaras.jpg", // montão de japas
  "https://specials-images.forbesimg.com/imageserve/1202239593/960x0.jpg?fit=scale", // 6 lockdown,
  "https://image.kurier.at/images/cfs_landscape_616w_347h/4741017/46-168668159.jpg", // bar vazio
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRiqSpgY3HPgM-li8QMwMrI0MnfBqCiB8VApQ&usqp=CAU", // 8 conspiração
  "https://s.yimg.com/ny/api/res/1.2/ibbEZHfQuK08Mbarh92pBg--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NjQwO2g9Mzcy/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/7f89d6b0-8e27-11ea-9fee-a2c8cf8b5b1b", // Aldir
];

export const questions = [
  {
    question:
      "Qual o nome da província chinesa onde surgiram os primeiros casos de COVID-19 ?",
    imgUrl: urlImages[5],
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
    imgUrl: urlImages[8],

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
    imgUrl: urlImages[4],
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
    imgUrl: urlImages[1],
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
    imgUrl: urlImages[6],

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
    imgUrl: urlImages[7],

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

  {
    question:
      "Qual dos medicamentos abaixo se mostrou eficaz na prevenção do COVID-19 ?",
    imgUrl: urlImages[3],
    answers: [
      {
        isCorrect: true,
        content: "Nenhuma das alternativas",
        message: "Correto! ",
      },
      {
        isCorrect: false,
        content: "Cloroquina",
        message: "Errado! Tocar o berrante vc vem correndo né?",
      },
      {
        isCorrect: false,
        content: "Azitromicina",
        message: "Errado! ",
      },
      {
        isCorrect: false,
        content: "Canabis",
        message:
          "Errado! Apesar dos efeitos agradáveis e de suas propriedades medicinais, não se tem evidências de que a planta cura Covid",
      },
    ],
  },

  {
    question:
      "A lei de auxílio emergencial para artistas aprovada esse ano recebeu o nome de que poeta e compositor?",
    imgUrl: urlImages[9],
    answers: [
      {
        isCorrect: true,
        content: "Aldir Blanc",
        message: "Correto! ",
      },
      {
        isCorrect: false,
        content: "João Bosco",
        message:
          "Errado! O artista a que nos referimos foi um grande parceiro de João Bosco, mas não ele.",
      },
      {
        isCorrect: false,
        content: "Guinga",
        message: "Errado! ",
      },
      {
        isCorrect: false,
        content: "Benito de Paula",
        message: "Errado! Vai-te embora Charlie Brown!",
      },
    ],
  },
];
