import { Scene, Enemy } from "@prisma/client";

type CreateScene = Omit<Scene, "id" | "createdAt" | "updatedAt">;
type CreateManyScenes = CreateScene[];

const Scenes: CreateManyScenes = [
  {
    description:
      "Você entra no labirinto e, apesar de não saber o caminho certo, sua inteligência avançada e capacidade de armazenar dados em memória faz ser possível criar um mapa dos lugares que já passou no labirinto, portanto não ficará perdido, mesmo podendo errar o caminho. Depois de dar algumas voltas e mapear uma porção do labirinto, você encontra um guarda que aparentemente não percebeu sua presença, mas não sabe se o caminho que ele está guardando é o correto.",
  },
  {
    description:
      "Após sua vitória, continua pelo caminho do guarda e percebe que apesar de estar sendo guardado anteriormente, era apenas uma distração para te cansar, pois tinha um beco sem saída. Você volta e vai pelo outro caminho que estava próximo ao guarda. Após alguns minutos caminhando, se depara com outro guarda parecendo um escorpião, mas este notou sua presença e o combate é inevitável.",
  },
  {
    description:
      "O guarda era mais forte que o outro, mas ao derrotá-lo você percebe que ele carrega um tipo de artefato, ao pegá-lo você o identifica como sendo um tipo de sensor, com ele você consegue saber a posição dos outros guardas e tem um que emana uma energia especial, então decide que ele deve estar guardando o “Fim da Humanidade” e vai para lá. Chegando no local se depara com o Rei Mechius, um dos reis da raça robótica e protetor do “Fim da Humanidade”.",
  },
  {
    description:
      "Ao ir pelo outro caminho você anda por alguns minutos e nota que tem um guarda mais forte, parecido com um escorpião, de costas.",
  },
  {
    description:
      "Você tenta assassinar o guarda, mas falha, ele reage no último instante e te golpeia (-10HP).",
  },
  {
    description:
      "Ao derrotá-lo você percebe que ele carrega um tipo de artefato, ao pegá-lo você o identifica como sendo um tipo de sensor, com ele você consegue saber a posição dos outros guardas e tem um que emana uma energia especial, então decide que ele deve estar guardando o “Fim da Humanidade” e vai para lá. Chegando no local se depara com o Rei Mechius, um dos Reis da raça robótica e protetor do “Fim da Humanidade”.",
  },
  {
    description:
      "Você volta e tenta encontrar outros caminhos, após algumas horas evitando combates encontra uma sala suspeita. Ao entrar nela se depara com ninguém menos que o Rei Mechius, um dos reis da raça robótica e protetor do “Fim da Humanidade”.",
  },
  {
    description:
      "Por fim vence a árdua batalha e vê em um pedestal o “Fim da Humanidade”. Você o pega e escapa, restaurando a água para a humanidade e lhes garantindo a sobrevivência. Com os ânimos restaurados os humanos fazem uma nova investida e massacram o restante dos robôs! Infelizmente você não foi uma exceção... apesar de tê-los salvado ninguém o reconhecia como amigo e, por fim, viu que a raça humana não merecia sua compaixão pois são mesquinhos e egoístas.",
  },
  {
    description:
      "Você encontra um guarda no seu caminho enquanto mapeava o labirinto.",
  },
  {
    description:
      "Você anda sem encontrar desafios e se depara com uma bifurcação.",
  },
];

export { Scenes };