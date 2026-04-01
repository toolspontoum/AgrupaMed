# Copy do site — Ponto7 (`index.html`)

Este arquivo é a **fonte editorial** dos textos da homepage.  
**Como usar:** edite os campos abaixo mantendo os **IDs de seção** e os **nomes dos campos**. Depois avise no chat para sincronizar o `index.html` (e o objeto `PRICING_PLANS` no JS, quando aplicável).

**Convenções**

- Use `<br>` onde a quebra de linha for intencional no layout.
- Campos `cta` são só o texto visível (sem SVG).
- `nota:` linhas são instruções para humanos/IA, não vão no site.
- URLs, `href` e caminhos de imagem **não** estão neste arquivo salvo quando forem parte da copy (ex.: `title` do documento).

---

## `meta` (head)

- **title:** Ponto7 — Seu Assistente de Residência Médica com IA
- **meta_description:** Construa e valide seu currículo de residência médica com inteligência artificial. Automatize a leitura de certificados e editais.

---

## `navbar`

- **logo_abrev:** P7
- **logo_texto:** Ponto7
- **link_sobre:** Sobre
- **link_solucao:** Solução
- **link_planos:** Planos
- **cta:** Começar Agora

---

## `hero`

- **social_proof_texto:** Junte-se a 3 mil+ médicos
- **social_proof_cta:** Entrar na Lista
- **h1:** Seu Currículo Médico<br>Construído com IA.
- **p:** Leitura inteligente de certificados, validação automática por edital e pontuação em tempo real — tudo em uma plataforma feita para a sua aprovação na residência.
- **cta_primario:** Criar Minha Conta
- **cta_secundario:** Ver Solução
- **marquee_logos:** (lista, ordem do carrossel — uma volta; o HTML duplica o conjunto para loop)
  - USP
  - Santa Casa
  - UNIFESP
  - UNICAMP
  - HC-FMUSP
  - ENARE
  - SUS-SP
- **dashboard_img_alt:** Ponto7 Dashboard — Design Sprint Timeline

---

## `about` (#about)

- **label:** Quem Somos
- **h1:** Tecnologia que transforma carreiras médicas.
- **p:** O Ponto7 nasceu da dor real de quem já passou pelo processo seletivo de residência médica. Combinamos inteligência artificial e análise de editais para automatizar o que sempre foi manual. **Seu foco é estudar — o currículo fica com a gente.** (manter `<strong>` em volta da segunda frase se quiser o mesmo destaque)
- **cta:** Conhecer a Plataforma
- **portrait_img_alt:** Estudante de medicina usando o Ponto7

---

## `steps` (#steps)

- **label:** Como Funciona
- **h1:** Simples, rápido<br>e inteligente.

### Navegação (tabs)

- **passo_01_label:** Passo 01
- **passo_01_titulo_nav:** Envio de Certificados
- **passo_02_label:** Passo 02
- **passo_02_titulo_nav:** Análise por IA
- **passo_03_label:** Passo 03
- **passo_03_titulo_nav:** Pontuação Automática
- **passo_04_label:** Passo 04
- **passo_04_titulo_nav:** Análise de Gaps
- **passo_05_label:** Passo 05
- **passo_05_titulo_nav:** Benchmarking

### Slides (conteúdo)

**Slide 1**

- **label:** Passo 01
- **h2:** Envie seus<br>certificados
- **p:** Faça upload dos seus certificados em PDF ou imagem. Nossa plataforma aceita qualquer formato e organiza tudo automaticamente no seu cofre digital.
- **cta:** Começar agora
- **img_alt:** Envio de Certificados

**Slide 2**

- **label:** Passo 02
- **h2:** IA categoriza<br>automaticamente
- **p:** Nossa inteligência artificial lê, interpreta e classifica cada certificado — Monitoria, Congresso, Publicação, Liga Acadêmica — sem digitação manual.
- **cta:** Ver demonstração
- **img_alt:** Análise por IA

**Slide 3**

- **label:** Passo 03
- **h2:** Pontuação<br>em tempo real
- **p:** Cada certificado é convertido em pontos baseados nos critérios reais dos editais. Acompanhe sua pontuação acumulada e evolução em um dashboard intuitivo.
- **cta:** Ver meu score
- **img_alt:** Pontuação Automática

**Slide 4**

- **label:** Passo 04
- **h2:** Descubra o<br>que falta
- **p:** A análise de gaps mostra exatamente quantos pontos faltam para atingir sua meta. Receba sugestões de atividades e eventos que agregam mais pontos na sua área.
- **cta:** Analisar gaps
- **img_alt:** Análise de Gaps

**Slide 5**

- **label:** Passo 05
- **h2:** Compare e<br>escolha melhor
- **p:** Compare sua pontuação em múltiplos programas de residência — USP, UNIFESP, ENARE e mais. Tome decisões estratégicas com dados reais e atualizados.
- **cta:** Comparar programas
- **img_alt:** Benchmarking

### Controles

- **aria_anterior:** Passo anterior
- **aria_proximo:** Próximo passo
- **dots:** 01, 02, 03, 04, 05 (rótulos dos botões)

---

## `dores` (#dores)

- **label:** O Problema
- **h1:** O processo manual<br>está te custando caro.
- **p_subtitulo:** Horas desperdiçadas, erros de contagem e oportunidades perdidas — a realidade de quem ainda faz tudo sozinho.

### Card 1

- **h3:** Contagem Manual de Pontos
- **p:** Planilhas, PDFs e tabelas intermináveis. Cada edital tem critérios diferentes e qualquer erro pode custar a sua vaga.
- **cta:** Ver solução

### Card gráfico (wide)

- **chart_titulo:** Eficiência do Processo Manual
- **chart_valor:** 23%
- **badge:** -77%
- **badge_label:** vs processo com IA
- **eixo_y:** 100, 75, 50, 25, 0 (rótulos do gráfico)
- **h3_footer:** Tempo Perdido com Retrabalho
- **p_footer:** A cada mudança de edital, todo o trabalho recomeça. A eficiência cai drasticamente quando o processo depende 100% do esforço manual.

### Card 3

- **h3:** Editais Incompatíveis
- **p:** Cada programa valoriza critérios diferentes. Sem uma análise cruzada, você pode estar investindo esforço nas atividades erradas.
- **cta:** Ver solução

### Card 4

- **h3:** Horas Desperdiçadas
- **p:** Médicos residentes gastam em média 40+ horas organizando documentos que poderiam ser processados em minutos por IA.
- **cta:** Ver solução

### Card 5

- **h3:** Risco de Erros Humanos
- **p:** Certificados esquecidos, pontos não contabilizados e categorizações incorretas — um único erro pode significar a diferença entre aprovação e reprovação.
- **cta:** Ver solução

---

## `solution` (#solution)

- **label:** Solução
- **h1:** Tudo que você precisa,<br>em um só lugar.
- **p:** Ferramentas inteligentes para transformar seus certificados em pontuação competitiva — com clareza e velocidade.

### Card 1

- **mockup_botao:** Enviar Certificado
- **h3:** Leitura por IA em Segundos
- **p:** Envie seu certificado e nossa IA extrai, categoriza e pontua automaticamente — sem digitação manual.
- **cta:** Saiba mais

### Card gráfico (wide)

- **chart_titulo:** Pontuação Acumulada
- **chart_valor:** 847pts
- **badge:** 100%
- **badge_label:** vs mês anterior
- **eixo_y:** 200, 150, 100, 50, 0
- **h3_footer:** Decisões com Base em Dados
- **p_footer:** Acompanhe sua pontuação em tempo real e saiba exatamente onde focar seus esforços para maximizar sua nota.

### Card 3

- **h3:** Publique em Qualquer Edital
- **p:** Compare sua pontuação em múltiplos programas de residência — USP, UNIFESP, ENARE e mais — sem retrabalho.
- **cta:** Explorar editais

### Card 4 (bolhas)

- **bubble_1_nome:** Dr. Lucas
- **bubble_1_msg:** Compartilhou uma atividade recente
- **bubble_2_nome:** Dra. Ana
- **bubble_2_msg:** Adicionou 3 novos certificados!
- **h3:** Sugestões Inteligentes de Currículo
- **p:** Receba recomendações personalizadas de eventos e atividades que agregam mais pontos na sua área.
- **cta:** Ver sugestões

### Card 5 (bolhas)

- **bubble_1_nome:** Dr. Rafael
- **bubble_1_msg:** Isso é incrível!!
- **bubble_2_nome:** Dra. Beatriz
- **bubble_2_msg:** Aprovada na 1ª tentativa! 🎉
- **h3:** Feedbacks da Comunidade
- **p:** Colete e analise insights de outros candidatos diretamente na plataforma com ferramentas integradas.
- **cta:** Ver depoimentos

---

## `funcionalidades` (#funcionalidades)

**nota:** Cada aba tem o mesmo padrão: `label`, `h1`, `p`, `cta` principal + 2 cards (`h3`, `p`, `cta` = “Saiba mais” em todos os cards secundários).

### Tab: Pontuação Automática (`feat-panel-0`)

- **tab_btn:** Pontuação Automática
- **label:** Funcionalidades
- **h1:** Pontuação automática<br>alinhada ao edital
- **p:** O Ponto7 calcula seus pontos conforme regras de editais de referência. Menos planilhas, mais transparência em cada etapa do processo.
- **cta:** Ver como funciona
- **card_a_h3:** Critérios por instituição
- **card_a_p:** Editais USP, UNIFESP, ENARE e outros mapeados em regras de pontuação que você pode auditar a qualquer momento.
- **card_b_h3:** Histórico versionado
- **card_b_p:** Acompanhe mudanças nos critérios e simule seu score antes de publicar o currículo final.
- **card_cta:** Saiba mais

### Tab: Leitura por IA (`feat-panel-1`)

- **tab_btn:** Leitura por IA
- **label:** Inteligência aplicada
- **h1:** Leitura inteligente<br>de certificados
- **p:** Envie PDFs ou fotos e a IA extrai categorias, horas e datas para transformar documentos em pontos auditáveis.
- **cta:** Enviar certificado
- **card_a_h3:** OCR e categorização
- **card_a_p:** Identificação automática de monitoria, congresso, publicação e outras categorias conforme o edital.
- **card_b_h3:** Validação e consistência
- **card_b_p:** Alertas para duplicidade, sobreposição de datas e inconsistências antes da submissão.
- **card_cta:** Saiba mais

### Tab: Cofre de Certificados (`feat-panel-2`)

- **tab_btn:** Cofre de Certificados
- **label:** Organização
- **h1:** Cofre de certificados
- **p:** Armazene tudo em um só lugar com segurança. Importe do Google Drive e mantenha histórico pronto para o processo seletivo.
- **cta:** Organizar meu cofre
- **card_a_h3:** Importação do Drive
- **card_a_p:** Centralize PDFs e imagens já existentes na nuvem sem baixar arquivo por arquivo.
- **card_b_h3:** Busca e etiquetas
- **card_b_p:** Encontre certificados por palavra-chave, período ou tipo de atividade em segundos.
- **card_cta:** Saiba mais

### Tab: Análise de Gaps (`feat-panel-3`)

- **tab_btn:** Análise de Gaps
- **label:** Estratégia
- **h1:** Análise de<br>gaps no currículo
- **p:** Veja quantos pontos faltam para o objetivo e priorize atividades de maior impacto no seu edital.
- **cta:** Ver o que falta
- **card_a_h3:** Meta por programa
- **card_a_p:** Defina o programa desejado e acompanhe a distância até a nota de corte estimada.
- **card_b_h3:** Plano de ação
- **card_b_p:** Sugestões ordenadas por custo-benefício para maximizar pontos até a data limite.
- **card_cta:** Saiba mais

### Tab: Benchmarking (`feat-panel-4`)

- **tab_btn:** Benchmarking
- **label:** Comparativo
- **h1:** Benchmarking<br>entre programas
- **p:** Compare sua pontuação entre institutos e entenda onde você está no cenário competitivo.
- **cta:** Comparar programas
- **card_a_h3:** Cenários simultâneos
- **card_a_p:** Simule USP, UNIFESP e ENARE lado a lado sem recalcular tudo na mão.
- **card_b_h3:** Ranking relativo
- **card_b_p:** Visualize percentis e gaps médios da comunidade para calibrar expectativas.
- **card_cta:** Saiba mais

---

## `testimonials` (#testimonials)

- **label:** Depoimentos
- **h1:** Resultados reais de quem usou o Ponto7.
- **p:** Médicos de diferentes fases da preparação já reduziram retrabalho, organizaram seus documentos e ganharam clareza de pontuação.

**nota:** No HTML há **cópias duplicadas** dos mesmos cards para o carrossel. Ao alterar, mantenha as mesmas frases nas duplicatas ou peça sincronização no chat.

### Depoimentos canônicos (15 — um por “persona”)

**1**

- **nome:** Dra. Ana L.
- **role:** @ana.creates
- **quote:** "Em duas semanas consegui organizar certificados que estavam espalhados há meses. Hoje sei exatamente meus pontos por edital."

**2**

- **nome:** Dr. Lucas P.
- **role:** @lucaspmed
- **quote:** "A análise por IA me poupou horas de planilha. Subi os PDFs e o sistema já categorizou tudo com precisão."

**3**

- **nome:** Dr. Rafael S.
- **role:** @rafael.study
- **quote:** "Descobri onde eu estava perdendo pontuação e consegui priorizar atividades com mais impacto antes da inscrição."

**4**

- **nome:** Dra. Marina C.
- **role:** @marinacmed
- **quote:** "O cofre de certificados virou meu centro de controle. Não perco mais documento na hora de montar currículo."

**5**

- **nome:** Dr. Bruno M.
- **role:** @brunomedrj
- **quote:** "Comparar USP e ENARE no mesmo lugar trouxe clareza para meu plano. Parei de estudar no escuro."

**6**

- **nome:** Dra. Paula R.
- **role:** @paularesid
- **quote:** "Usei o benchmarking para decidir onde tinha maior chance. Foi decisivo para meu direcionamento final."

**7**

- **nome:** Dr. Thiago N.
- **role:** @thiagomed
- **quote:** "A plataforma mostrou inconsistências que eu nem tinha percebido. Evitei enviar documentação com erro."

**8**

- **nome:** Dra. Beatriz F.
- **role:** @biafaria
- **quote:** "A visão de gaps me deu um plano semanal objetivo. Senti que parei de desperdiçar esforço."

**9**

- **nome:** Dr. Igor T.
- **role:** @igortavares
- **quote:** "Consegui importar tudo do Drive em minutos. Antes eu demorava uma tarde só para separar arquivos."

**10**

- **nome:** Dra. Carol V.
- **role:** @carolvmed
- **quote:** "A confiança de saber meu score em tempo real mudou meu ritmo de estudo e de escolha das atividades."

**11**

- **nome:** Dr. Henrique A.
- **role:** @henriqueres
- **quote:** "O sistema me mostrou prioridade por impacto. Troquei tarefas de baixo retorno por atividades que pontuavam mais."

**12**

- **nome:** Dra. Julia M.
- **role:** @juliamed
- **quote:** "A parte que mais gostei foi a clareza. Em poucos cliques entendi minha posição para cada programa."

**13**

- **nome:** Dr. Pedro C.
- **role:** @pedromed
- **quote:** "Os alertas de inconsistência evitaram dor de cabeça no envio final. Isso sozinho já valeu o uso."

**14**

- **nome:** Dra. Fernanda I.
- **role:** @fernandai
- **quote:** "Com o Ponto7 eu finalmente consegui transformar meu currículo em estratégia, não só em acúmulo de certificados."

**15**

- **nome:** Dr. Marcelo G.
- **role:** @marcelog
- **quote:** "A experiência é muito fluida e clara. Fiz tudo em uma noite e já saí com plano para as próximas semanas."

---

## `banner-cta` (#banner-cta)

- **iframe_title:** Vídeo de fundo decorativo
- **label:** Ponto7 · currículo com IA
- **h1:** Simplifique a montagem do seu currículo de residência
- **p:** Envie certificados, valide por edital e acompanhe sua pontuação em tempo real — com segurança para você focar na aprovação.
- **cta_primario:** Criar minha conta
- **cta_secundario:** Ver a solução

---

## `pricing` (#pricing)

- **label:** Investimento & estratégia
- **h2_linha1:** Sua preparação
- **h2_destaque:** no nível certo
- **p:** Planos por assinatura para médicos que querem currículo validado, pontuação clara e menos burocracia. Escolha o ritmo do seu crescimento.
- **tab_plano_landing:** Explorador
- **tab_plano_institucional:** Candidato
- **tab_plano_ecommerce:** Estrategista
- **toggle_mes:** Mês
- **toggle_ano:** Ano
- **aria_tabs:** Planos disponíveis
- **aria_toggle_group:** Período de cobrança

**nota:** Os textos dos cards (preço, descrição, lista, CTA) vêm do JavaScript (`PRICING_PLANS` dentro de `initPricingSection`). Ao mudar preços/benefícios, use a estrutura abaixo.

### `pricing.planos.landing`

**mensal**

- **cardTitle:** Explorador
- **price:** Grátis
- **suffix:** /mês
- **badge:** (vazio)
- **desc:** Para começar sua jornada.
- **features:**
  - Acesso básico
  - Até 10 certificados
  - Até 1 programa de residência
- **cta:** Começar grátis

**anual**

- **cardTitle:** Explorador
- **price:** Grátis
- **suffix:** /ano
- **badge:** (vazio)
- **desc:** Para começar sua jornada.
- **features:**
  - Acesso básico
  - Até 10 certificados
  - Até 1 programa de residência
- **cta:** Começar grátis

### `pricing.planos.institucional`

**mensal**

- **cardTitle:** Candidato
- **price:** R$ 19,90
- **suffix:** /mês
- **badge:** (vazio)
- **desc:** Para candidatos focados.
- **features:**
  - Acesso estendido
  - Até 50 certificados
  - Até 3 programas de residência
- **cta:** Assinar agora

**anual**

- **cardTitle:** Candidato
- **price:** R$ 199,00
- **suffix:** /ano
- **badge:** (vazio)
- **desc:** Para candidatos focados.
- **features:**
  - Acesso estendido
  - Até 50 certificados
  - Até 3 programas de residência
- **cta:** Assinar agora

### `pricing.planos.ecommerce`

**mensal**

- **cardTitle:** Estrategista
- **price:** R$ 49,90
- **suffix:** /mês
- **badge:** (vazio)
- **desc:** Para estrategistas completos.
- **features:**
  - Acesso total
  - Certificados ilimitados
  - Programas de residência ilimitados
- **cta:** Assinar

**anual**

- **cardTitle:** Estrategista
- **price:** R$ 499,00
- **suffix:** /ano
- **badge:** (vazio)
- **desc:** Para estrategistas completos.
- **features:**
  - Acesso total
  - Certificados ilimitados
  - Programas de residência ilimitados
- **cta:** Assinar

---

## Checklist rápido ao enviar copy nova

1. Manter os títulos de seção `## \`id\`` como estão.
2. Preencher só os campos que mudaram.
3. Avisar: *“Atualize o site a partir do copy.md”*.
4. Se mudar depoimentos, lembrar das **duplicatas no HTML** ou pedir para o assistente propagar.
