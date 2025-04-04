---
title: "Animar Objetos"
spell:
  originalName: "Animate Objects"
  level: 5
  school: "transmutation"
  castingTime: "Ação"
  range: "36 metros"
  components:
    v: true
    s: true
  duration: "Concentração, até 1 minuto"
  casters:
    - bard
    - sorcerer
    - wizard
  type:
    - utility
  source: "Livro do Jogador"
  upcast: true
---

<>
<Paragraph>
Objetos ganham vida ao seu comando. Escolha até dez objetos
não-mágicos dentro do alcance, que não estejam sendo vestidos ou
carregados. Alvos Médios contam como dois objetos, alvos Grandes
contam como quatro objetos e alvos Enormes contam como oito objetos.
Você não pode animar um objeto maior que Enorme. Cada alvo se anima e
torna-se uma criatura sob seu controle até o final da magia ou até ser
reduzido a 0 pontos de vida.
</Paragraph>

        <Paragraph>
          Com uma ação bônus, você pode comandar mentalmente qualquer criatura
          que você criar com essa magia se a criatura estiver a até 150 metros
          de você (se você controla várias criaturas, você pode comandar
          qualquer ou todas elas ao mesmo tempo, emitindo o mesmo comando para
          cada uma). Você decide qual ação a criatura irá fazer e para onde ela
          irá se mover durante o próximo turno dela, ou você pode emitir um
          comando geral, como para guardar uma câmara ou corredor especifico. Se
          você não der nenhum comando, as criaturas apenas se defenderão contra
          criaturas hostis. Uma vez que receba uma ordem, a criatura continuará
          a segui-la até a tarefa estar concluída.
        </Paragraph>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader colSpan={6}>
                Estatísticas de Objeto Animado
              </TableHeader>
            </TableRow>

            <TableRow>
              <TableHeader>Tamanho</TableHeader>
              <TableHeader>PV</TableHeader>
              <TableHeader>CA</TableHeader>
              <TableHeader>Ataque</TableHeader>
              <TableHeader>For</TableHeader>
              <TableHeader>Des</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Miúdo</TableCell>
              <TableCell>20</TableCell>
              <TableCell>18</TableCell>
              <TableCell>+8 para atingir, 1d4 + 4 dano</TableCell>
              <TableCell>4</TableCell>
              <TableCell>18</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pequeno</TableCell>
              <TableCell>25</TableCell>
              <TableCell>16</TableCell>
              <TableCell>+6 para atingir, 1d8 + 2 dano </TableCell>
              <TableCell>6</TableCell>
              <TableCell>14</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Médio</TableCell>
              <TableCell>40</TableCell>
              <TableCell>13</TableCell>
              <TableCell>+5 para atingir, 2d6 + 1 dano</TableCell>
              <TableCell>10</TableCell>
              <TableCell>12</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Grande</TableCell>
              <TableCell>50</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+6 para atingir, 2d10 + 2 dano</TableCell>
              <TableCell>14</TableCell>
              <TableCell>10</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Enorme</TableCell>
              <TableCell>80</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+8 para atingir, 2d12 + 4 dano</TableCell>
              <TableCell>18</TableCell>
              <TableCell>6</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Paragraph>
          Um objeto animado é um constructo com CA, pontos de vida, ataques,
          Força e Destreza determinados pelo seu tamanho. Sua Constituição é 10
          e sua Inteligência e Sabedoria são 3 e seu Carisma é 1. Seu
          deslocamento é 9 metros; se o objeto não tiver pernas ou outros
          apêndices que ele possa usar para locomoção, ao invés, ele terá
          deslocamento de voo 9 metros e poderá planar. Se o objeto estiver
          firmemente preso a uma superfície ou objeto maior, como uma corrente
          presa a uma parede, seu deslocamento será 0. Ele tem percepção às
          cegas num raio de 9 metros e é cego além dessa distância. Quando o
          objeto animado cair a 0 pontos de vida, ele reverte a sua forma normal
          de objeto e qualquer dano restante é transferido para sua forma de
          objeto original.
        </Paragraph>

        <Paragraph>
          Se você ordenar a um objeto que ataque, ele pode realizar um único
          ataque corpo-a-corpo contra uma criatura a até 1,5 metro dele. Ele
          realiza um ataque de pancada com um bônus de ataque e dano de
          concussão determinado pelo seu tamanho. O Mestre pode definir que um
          objeto especifico inflige dano cortante ou perfurante, baseado na
          forma dele.
        </Paragraph>
      </>

**Em Níveis Superiores:** Se você conjurar essa magia usando um espaço de magia de 6° nível ou superior, você pode animar dois objetos adicionais para cada nível do espaço acima do 5°.
