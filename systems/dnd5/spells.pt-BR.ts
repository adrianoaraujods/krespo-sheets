import type { Spell } from "@/systems/dnd5";

export const SPELLS: Spell[] = [
  {
    name: "Acalmar Emoções",
    source: "players-handbook",
    level: 2,
    school: "enchantment",
    casters: ["bard", "cleric"],
    castingTime: "Ação",
    range: "18 metros",
    components: {
      v: true,
      s: true,
    },
    duration: "Concentração, até 1 minuto",
    description: [
      "Você tenta suprimir emoções fortes em um grupo de pessoas. Cada humanoide em uma esfera de 6 metros de raio, centrada em um ponto que você escolher dentro do alcance, deve realizar um teste de resistência de Carisma; uma criatura pode escolher falhar nesse teste, se desejar. Se uma criatura falhar na resistência, escolha um dentre os dois efeitos a seguir.",
      "Você pode suprimir qualquer efeito que esteja deixando a criatura enfeitiçada ou amedrontada. Quando essa magia terminar, qualquer efeito suprimido volta a funcionar, considerando que sua duração não tenha acabado nesse meio tempo.",
      "Alternativamente, você pode tornar um alvo indiferente às criaturas que você escolher que forem hostis a ele. Essa indiferença acaba se o alvo for atacado ou ferido por uma magia ou se ele testemunhar qualquer dos seus amigos sendo ferido. Quando a magia terminar, a criatura se tornará hostil novamente, a não ser que o Mestre diga o contrário.",
    ],
  },
  {
    name: "Adivinhação",
    source: "players-handbook",
    level: 4,
    school: "divination",
    ritual: true,
    casters: ["cleric", "druid", "wizard"],
    castingTime: "Ação",
    range: "Pessoal",
    components: {
      v: true,
      s: true,
      m: "incenso e uma oferenda apropriada para sacrifício à sua religião, juntos valendo, no mínimo, 25 po, consumidos pela magia",
    },
    duration: "Instantânea",
    description: [
      "Sua magia e uma oferenda colocam você em contato com um deus ou servo divino. Você faz uma única pergunta a respeito de um objetivo, evento ou atividade específico que irá ocorrer dentro de 7 dias. O Mestre oferece uma resposta confiável. A resposta deve ser uma frase curta, uma rima enigmática ou um presságio.",
      "A magia não leva em consideração qualquer possível circunstância que possa mudar o que está por vir, como a conjuração de magias adicionais ou a perda ou ganho de um companheiro.",
      "Se você conjurar a magia duas ou mais vezes antes de completar seu próximo descanso longo, existe uma chance cumulativa de 25 por cento de cada conjuração, depois da primeira que você fez, ter um resultado aleatório. O Mestre faz essa jogada secretamente.",
    ],
  },
  {
    name: "Ajuda",
    source: "players-handbook",
    level: 2,
    school: "abjuration",
    casters: ["artificer", "bard", "cleric", "paladin", "ranger"],
    castingTime: "Ação",
    range: "9 metros",
    components: {
      v: true,
      s: true,
      m: "uma pequena fita de tecido branco",
    },
    duration: "8 horas",
    description:
      "Sua magia inspira seus aliados com vigor e determinação. Escolha até três criaturas dentro do alcance. O máximo de pontos de vida e os pontos de vida atuais de cada alvo aumentam em 5, pela duração.",
    upcastDescription:
      "Quando você conjurar essa magia usando um espaço de magia de 3° nível ou superior, os pontos de vida dos alvos aumentam em 5 pontos adicionais para cada nível do espaço acima do o 2°.",
  },
];
