---
title: "Confusão"
spell:
  originalName: "Confusion"
  level: 4
  school: "enchantment"
  castingTime: "1 ação"
  range: "27 metros"
  components:
    v: true
    s: true
    m: "três cascas de noz"
  duration: "Concentração, até 1 minuto"
  casters:
    - bard
    - druid
    - sorcerer
    - wizard
  type:
    - utility
  savingThrow:
    - wis
  source: "Livro do Jogador"
  upcast: true
---

<>
<Paragraph>
Essa magia ataca e embaralha as mentes das criaturas, gerando delírios
e provocando ações descontroladas. Cada criatura em uma esfera com 3
metros de raio, centrada num ponto, à sua escolha, dentro do alcance,
deve ser bem sucedida num teste de resistência de Sabedoria, quando
você conjurar essa magia ou for afetada por ela.
</Paragraph>

        <Paragraph>
          Um alvo afetado não pode realizar reações e deve rolar um d10 no
          início de cada um dos seus turnos para determinar seu comportamento
          nesse turno.
        </Paragraph>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>d10</TableHeader>

              <TableHeader>Comportamento</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>

              <TableCell>
                A criatura usa todo seu deslocamento para se mover em uma
                direção aleatória. Para determinar a direção, role um d8 e
                atribua uma direção a cada face do dado. A criatura não realiza
                uma ação nesse turno.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2-6</TableCell>

              <TableCell>
                A criatura não se move ou realiza ações nesse turno.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>7-8</TableCell>

              <TableCell>
                A criatura usa sua ação para realizar um ataque corpo-acorpo
                contra uma criatura, determinada aleatoriamente, ao seu alcance.
                Se não houver criaturas dentro do alcance, a criatura não faz
                nada nesse turno.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>9-10</TableCell>

              <TableCell>
                A criatura pode agir e se mover normalmente.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Paragraph>
          Ao final de cada um dos seus turnos, um alvo afetado pode realizar um
          teste de resistência de Sabedoria. Se for bem sucedido, esse efeito
          acaba nesse alvo.
        </Paragraph>
      </>

**Em Níveis Superiores:** Se você conjurar essa magia usando um espaço de magia de 5° nível ou superior, o raio da esfera aumenta em 1,5 metro para cada nível do espaço acima do 4°.
