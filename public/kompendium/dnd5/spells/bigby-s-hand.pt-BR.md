---
title: "Mão de Bigby"
spell:
  originalName: "Bigby's Hand"
  level: 5
  school: "evocation"
  castingTime: "Ação"
  range: "36 metros"
  components:
    v: true
    s: true
    m: "uma casca de ovo e uma luva de couro de cobra"
  duration: "Concentração, até 1 minuto"
  casters:
    - artificer
    - sorcerer
    - wizard
  type:
    - damage
    - utility
  damageTypes:
    - bludgeoning
    - force
  savingThrow:
    - str
  spellAttack: "spell-melee"
  source: "Livro do Jogador"
  upcast: true
---

<>
<Paragraph>
Você cria uma mão Grande de energia cintilante e translucida em um
espaço desocupado que você possa ver dentro do alcance. A mão
permanece pela duração da magia e ela se move ao seu comando, imitando
os movimentos da sua própria mão.
</Paragraph>

        <Paragraph>
          A mão é um objeto com CA 20 e pontos de vida igual ao seu máximo de
          pontos de vida. Se ela cair a 0 pontos de vida, a magia termina. Ela
          tem Força 26 (+8) e Destreza 10 (+0). A mão não preenche o espaço
          dela.
        </Paragraph>

        <Paragraph>
          Quando você conjura essa magia você pode, com uma ação bônus, nos seus
          turnos subsequentes, mover a mão até 18 metros e então causar um dos
          seguintes efeitos com ela.
        </Paragraph>

        <UList>
          <ListItem>
            <Span variant="bold">Mão Esmagadora. </Span> A mão tenta agarrar uma
            criatura Enorme ou menor a 1,5 metro dela. Você usa o valor de Força
            da mão para determinar o agarrão. Se o alvo for Médio ou menor, você
            terá vantagem no teste. Enquanto a mão estiver agarrando o alvo,
            você pode usar uma ação bônus para fazer a mão esmaga-lo. Quando o
            fizer, o alvo sofre dano de concussão igual a 2d6 + seu modificador
            de habilidade de conjuração.
          </ListItem>

          <ListItem>
            <Span variant="bold">Mão Interposta. </Span> A mão se interpõem
            entre você e uma criatura a sua escolha até você lhe dar um comando
            diferente. A mão se move para ficar entre você e o alvo, concedendo
            a você meia-cobertura contra o alvo. O alvo não pode se mover
            através do espaço da mão se o valor de Força dele for menor ou igual
            ao valor de Força da mão. Se o valor de Força dele for maior que o
            valor de Força da mão, o alvo pode se mover até você através do
            espaço da mão, mas aquele espaço será considerado terreno difícil
            para o alvo.
          </ListItem>

          <ListItem>
            <Span variant="bold">Mão Poderosa. </Span> A mão tenta empurrar uma
            criatura a 1,5 metro dela em uma direção a sua escolha. Realize um
            teste com a Força da mão, resistido por um teste de Força
            (Atletismo) do alvo. Se o alvo for Médio ou menor, você tem vantagem
            no teste. Se você for bem sucedido, a mão empurra o alvo até 1,5
            metro mais uma quantidade de metros igual ao modificador da sua
            habilidade de conjuração multiplicado por 1,5. A mão se move com o
            alvo, permanecendo a 1,5 metro dele.
          </ListItem>

          <ListItem>
            <Span variant="bold">Punho Cerrado. </Span> A mão golpeia uma
            criatura ou objeto a 1,5 metro dela. Realize uma jogada de ataque
            corpo-a-corpo com magia para a mão usando suas estatísticas de jogo.
            Se atingir, o alvo sofre 4d8 de dano de energia.
          </ListItem>
        </UList>
      </>

**Em Níveis Superiores:** Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, o dano da opção punho cerrado aumenta em 2d8 e o dano da mão esmagadora aumenta em 2d6 para cada nível do espaço acima do 5°.
