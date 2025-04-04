---
title: "Controlar o Clima"
spell:
  originalName: "Control Weather"
  level: 8
  school: "transmutation"
  castingTime: "10 minutos"
  range: "Pessoal, 7,5 quilômetros de raio"
  components:
    v: true
    s: true
    m: "incenso aceso e pedaços de terra e madeira misturados em água"
  duration: "Concentração, até 8 horas"
  casters:
    - cleric
    - druid
    - wizard
  type:
    - utility
  source: "Livro do Jogador"
---

<>
<Paragraph>
Você toma controle do clima numa área de 7,5 quilômetros de você pela
duração. Você deve estar ao ar livre para conjurar essa magia. Se
mover para um lugar onde você não tenha uma visão clara do céu termina
a magia prematuramente.
</Paragraph>

        <Paragraph>
          Quando você conjurar essa magia, você muda as condições climáticas
          atuais, que são determinadas pelo Mestre baseado no ambiente e
          estação. Você pode mudar a precipitação, temperatura e vento. Leva 1d4
          x 10 minutos para as novas condições fazerem efeito. Quando a magia
          terminar, o clima, gradualmente, volta ao normal.
        </Paragraph>

        <Paragraph>
          Quando você altera as condições climáticas, encontre a condição atual
          nas tabelas a seguir e mude em um estágio, para cima ou para baixo.
          Quando mudar o vento, você pode mudar a direção do mesmo.
        </Paragraph>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader colSpan={2}>Precipitação</TableHeader>
            </TableRow>

            <TableRow>
              <TableHeader>Estágio</TableHeader>
              <TableHeader>Condição</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Céu claro</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Parcialmente encoberto</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Céu escuro ou nublado</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Chuva, granizo ou neve</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>
                Chuva torrencial, tempestade de granizo ou nevasca
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader colSpan={2}>Temperatura</TableHeader>
            </TableRow>

            <TableRow>
              <TableHeader>Estágio</TableHeader>
              <TableHeader>Condição</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Calor insuportável</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Quente</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Morno</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Frio</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Gelado</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Frio ártico</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHead>
            <TableRow>
              <TableHeader colSpan={2}>Vento</TableHeader>
            </TableRow>

            <TableRow>
              <TableHeader>Estágio</TableHeader>
              <TableHeader>Condição</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Calmo</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Vento moderado</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Vento forte</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Ventania</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Temporal</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </>
