export default {
  metadata: {
    title: "krespo sheets",
    description: "Crie e gerencie fichas de personagens para RPGs de mesa.",
  },
  ui: {
    yes: "Sim",
    no: "Não",
    next: "Próxima",
    confirm: "Confirmar",
    create: "Criar",
    cancel: "Cancelar",
    previous: "Anterior",
    back: "Voltar",
    delete: "Deletar",
    new: "Novo",
    open: "Abrir",
    search: "Presquisar",
    myAccount: "Minha Conta",
    login: "Entrar",
    logout: "Sair",
    continueWith: "Continue com",
    resetFilters: "Limpar Filtros",
    sortBy: "Ordenar por",
    name: "Nome",
    level: "Nível",
    noResultsFound: "Nenhum resultado foi encontrado",
    language: "Idioma",
    theme: "Tema",
    themes: {
      light: "Claro",
      dark: "Escuro",
      system: "Sistema",
    },
    pages: {
      next: "Ir para próxima página",
      previous: "Ir para página anterior",
      first: "Ir para primeira página",
      last: "Ir para última página",
      more: "Mais páginas",
      perPage: "Por página",
      amount: "{initial} - {final} de {total}",
    },
    credits: {
      text: "Criado por",
      author: "Adriano Araújo",
    },
    copyright: "All rights reserved. Krespo Sheets { year }",
  },
  pages: {
    home: {
      hero: {
        title: "Seu melhor amigo de RPG de mesa!",
        description:
          "Crie, gerencie e melhore sua experiência de jogo de RPG com facilidade.",
        button: "Criar uma conta",
        cards: {
          characters: {
            title: "Fichas de Personagens",
            description:
              "Interface simples e eficaz para criar e usar seu personagem.",
          },
          kompendium: {
            title: "Kompêndio",
            description:
              "Partes relevantes dos livros de referência para criar personagens.",
          },
          spells: {
            title: "Filtros de Magias",
            description:
              "Diversos filtros para encontrar as magias mais específicas que você precise.",
          },
          systems: {
            title: "Nossos Sistemas",
            description:
              "Sistemas completos e regras de casa projetados apenas para se divertir!",
          },
        },
      },
      characters: {
        title: "Fichas de Personagens",
        description:
          "Crie e gerencie fichas de personagens abrangentes para suas campanhas de RPG. Nossa interface intuitiva permite que você acompanhe as estatísticas, habilidades e equipamentos do seu personagem com facilidade. Seja você um jogador experiente ou novo no jogo, nossas ferramentas ajudam a manter você organizado e focado na aventura.",
        button: "Criar Personagem",
      },
      kompendium: {
        title: "Kompêndio",
        subtitle: "Referências dos Livros Fontes",
        description:
          "Acesse as regras e diretrizes essenciais dos mais populares sistemas de RPG. Nosso Kompêndio garante que você tenha as informações de que precisa na ponta dos dedos, tornando mais fácil criar personagens memoráveis e divertidos. O melhor amigo dos jogadores min-max!",
      },
      spells: {
        title: "Filtros de Magias",
        description:
          "Pesquise e filtre facilmente magias dos seus sistemas de RPG favoritos. Nossa ferramenta de filtro de magias permite que você encontre rapidamente magias com base na classe, nível e escola, ajudando você a se preparar para qualquer cenário com confiança.",
      },
      systems: {
        title: "Nossos Sistemas",
        description:
          "Descubra nossas regras de casa e sistemas personalizados projetados para melhorar suas sessões de RPG. Desde mecânicas de combate únicas até progressão inovadora de personagens, nossos sistemas oferecem novas e emocionantes maneiras de aproveitar seus jogos de RPG.",
      },
    },
    login: {
      title: "Entre no Krespo Sheets",
      description: "Boas-vindas de volta! Entre abaixo com seu provedor",
    },
    kompendium: {
      title: "Kompêndio",
      search: "Pesquisar em Kompêndio",
    },
    characters: {
      title: "Personagens",
      unnamed: "Personagem sem Nome",
      create: {
        title: "Crie uma nova Ficha de Personagem!",
        name: "Nome do Personagem",
        system: "Sistema da Ficha",
        button: "Criar",
      },
      delete: {
        title: "Você tem certeza?",
        description:
          "Essa ação não pode ser desfeita. Isso irá excluir permanentemente esse personagem com o nome de:",
      },
      image: {
        title: "Altere a Imagem do Personagem",
        description: "Selecione uma imagem pela URL",
      },
      responses: {
        "200": "Ação bem sucedida",
        "201": "Personagem criado com sucesso",
        "400": "Ação não aceita, há campos faltando",
        "401": "Você deve estar conectado com uma conta",
        "403": "Personagem de outro usuário",
        "404": "Personagem não encontrado",
        "406": "Sistema de Ficha não implementado",
        "500": "Erro Interno do Servido, tente novamente",
      },
    },
  },
  systems: {
    dnd5: {
      title: "Dungeons & Dragons 5e",
      spells: {
        title: "Magias",
        ritual: "Ritual",
        castingTime: "Tempo de Conjuração",
        range: "Alcance",
        components: "Componentes",
        verbal: "Verbal",
        somatic: "Somático",
        material: "Material",
        duration: "Duração",
        school: "Escolas de magia",
        casters: "Classes conjuradoras",
        spellType: "Tipo",
        types: {
          damage: "Dano",
          healing: "Cura",
          utility: "Utilidade",
        },
        attackTypes: {
          "spell-melee": "Ataque corpo-a-corpo com magia",
          "spell-ranged": "Ataque à distância com magia",
          weapon: "Ataque com arma",
        },
        damageType: "Tipo de dano",
        spellAttack: "Ataque",
        savingThrows: "Teste de resistência",
        description: {
          cantrip: "Truque",
          level: "{level}° nível",
        },
        upcast: "Em Níveis Superiores",
        source: "Fonte",
        schools: {
          abjuration: "Abjuração",
          conjuration: "Conjuração",
          divination: "Adivinhação",
          enchantment: "Encantamento",
          evocation: "Evocação",
          illusion: "Ilusão",
          necromancy: "Necromancia",
          transmutation: "Transmutação",
        },
      },
      attributes: {
        str: "Força",
        dex: "Destreza",
        con: "Constituição",
        int: "Inteligência",
        wis: "Sabedoria",
        cha: "Carisma",
      },
      classes: {
        artificer: "Artífice",
        barbarian: "Bárbaro",
        bard: "Bardo",
        cleric: "Clérigo",
        druid: "Druida",
        fighter: "Guerreiro",
        monk: "Monge",
        paladin: "Paladino",
        ranger: "Patrulheiro",
        sorcerer: "Feitiçeiro",
        warlock: "Bruxo",
        wizard: "Mago",
      },
      damageTypes: {
        acid: "Ácido",
        bludgeoning: "Concussão",
        cold: "Frio",
        fire: "Fogo",
        force: "Energia",
        lightning: "Elétrico",
        necrotic: "Necrótico",
        piercing: "Perfurante",
        poison: "Veneno",
        psychic: "Psíquico",
        radiant: "Radiante",
        slashing: "Cortante",
        thunder: "Trovejante",
      },
      sources: {
        "explorers-guide-to-wildermount": "Guia do Explorador para Wildemount",
        "fizbans-treasury-of-dragons": "Tesouro dos Dragões de Fizban",
        "guildmasters-guide-to-ravnica":
          "Guia Do Mestre de Guildas para Ravnica",
        "mordenkainens-tome-of-foes": "Tomo do Mordenkainen Sobre Inimigos",
        "players-handbook": "Livro do Jogador",
        "tashas-cauldron-of-everything":
          "O Caldeirão de Todas as Coisas de Tasha",
        "xanathars-guide-to-everything": "Guia de Xanathar para Todas as Coisa",
        "acquisitions-inc": "Acquisitions Incorporated",
        "icewind-dale-rime-of-the-frostmaiden":
          "Icewind dale: Rime of the Frostmaiden",
        "strixhaven-a-curriculum-of-chaos": "Strixhaven: A Curriculum of Chaos",
        "astral-adventurers-guide": "Astral Adventurer's Guide",
        "lost-laboratory-of-kwalish": "Lost Laboratory of Kwalish",
        "deck-of-many-things": "Deck of Many Things",
        "planescape-adventures-in-the-multiverse":
          "Planescape Adventures in the Multiverse",
      },
      subraces: {
        "dwarf-hill": "Anão da Colina",
        "dwarf-mountain": "Anão da Montanha",
        "elf-drow": "Elfo Negro (Drow)",
        "elf-forest": "Elfo da Floresta",
        "elf-high": "Alto Elfo",
      },
    },
  },
  errors: {
    "401": {
      title: "Essa página requer autorização!",
      description: "Você deve estar conectado com uma conta",
    },
  },
} satisfies IntlMessages;
