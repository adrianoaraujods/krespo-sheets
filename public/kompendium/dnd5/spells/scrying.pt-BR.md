---
title: "Vidência"
spell:
  originalName: "Scrying"
  level: 5
  school: "divination"
  castingTime: "10 minutos"
  range: "Pessoal"
  components:
    v: true
    s: true
    m: "um foco valendo, no mínimo, 1.000 po, como uma bola de cristal, espelho de prata ou fonte cheia de água benta"
  duration: "Concentração, até 10 minutos"
  casters:
    - bard
    - cleric
    - druid
    - warlock
    - wizard
  type:
    - utility
  savingThrow:
    - wis
  source: "Livro do Jogador"
---

<>
<Paragraph>
Você pode ver e ouvir uma criatura em particular, à sua escolha, que
esteja no mesmo plano de existência que você. O alvo deve realizar um
teste de resistência de Sabedoria, que é modificador de acordo com o
quão bem você conhece o alvo e o tipo de conexão física que você tem
com ele. Se um alvo souber que você está conjurando essa magia, ele
pode falhar no teste de resistência voluntariamente, se ele quiser ser
observado.
</Paragraph>

        <Paragraph>
          Com um sucesso na resistência, o alvo não é afetado e você não pode
          usar essa magia contra ele novamente por 24 horas.
        </Paragraph>

        <Paragraph>
          Se falhar na resistência, a magia cria um sensor invisível a até 3
          metros do alvo. Você pode ver e ouvir através do sensor, como se você
          estivesse onde ele está. O sensor se move com o alvo, permanecendo a 3
          metros dele pela duração. Uma criatura que puder ver objetos
          invisíveis verá o sensor como um globo luminoso do tamanho de um
          punho.
        </Paragraph>

        <Paragraph>
          Ao invés de focar em uma criatura, você pode escolher um local que
          você já tenha visto antes como alvo dessa magia. Quando fizer isso, o
          sensor aparece no local e não se move.
        </Paragraph>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Conhecimento</TableHeader>
              <TableHeader>Modificador de Resistência</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Segunda mão (você ouviu falar do alvo)</TableCell>
              <TableCell>+5</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Primeira mão (você foi apresentado ao alvo)</TableCell>
              <TableCell>+0</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Familiar (você conhece bem o alvo)</TableCell>
              <TableCell>-5</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Conexão</TableHeader>
              <TableHeader>Modificador de Resistência</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>Descrição ou foto</TableCell>
              <TableCell>-2</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>Pertences ou roupas</TableCell>
              <TableCell>-4</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>
                Parte do corpo, mexa de cabelo, recorte de unha ou simular
              </TableCell>
              <TableCell>-10</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
