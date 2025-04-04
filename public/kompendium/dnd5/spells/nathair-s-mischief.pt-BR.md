---
title: "Travessura de Nathair"
spell:
  originalName: "Nathair's Mischief"
  level: 2
  school: "illusion"
  castingTime: "Ação"
  range: "18 metros"
  components:
    s: true
    m: "um pedaço da crosta de uma torda de maça"
  duration: "Concentração, até 1 minuto"
  casters:
    - bard
    - sorcerer
    - wizard
  type:
    - utility
  savingThrow:
    - wis
  source: "Tesouro dos Dragões de Fizban"
---

<>
<Paragraph>
Você preenche um cubo de 6 metros que você pode ver dentro do alcance
com magia feérica e dracônica. Role na tabela de Surto Travesso para
determinar o efeito mágico produzido e role novamente no início de
cada um dos seus turnos até a magia acabar. Você pode mover o cubo até
3 metros antes de rolar.
</Paragraph>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader colSpan={2}>Surto Travesso</TableHeader>
            </TableRow>
            <TableRow>
              <TableHeader>d4</TableHeader>

              <TableHeader>Efeito</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>

              <TableCell>
                O cheiro de torta de maçã enche o ar, e cada criatura no cubo
                deve ser bem-sucedida em um teste de resistência de Sabedoria ou
                ficará encantada por você até o início do seu próximo turno.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2</TableCell>

              <TableCell>
                Buquês de flores aparecem ao redor, e cada criatura no cubo deve
                ser bem-sucedida em um teste de resistência de Destreza ou
                ficará cega até o início do seu próximo turno, enquanto as
                flores borrifam água em seus rostos.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>3</TableCell>

              <TableCell>
                Cada criatura no cubo deve ser bem-sucedida em um teste de
                resistência de Sabedoria ou começará a rir até o início do seu
                próximo turno. Uma criatura rindo fica incapacitada e usa todo o
                seu movimento para se mover em uma direção aleatória.
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4</TableCell>

              <TableCell>
                Gotas de melaço aparecem e pairam no cubo, transformando-o em
                terreno difícil até o início do seu próximo turno.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
