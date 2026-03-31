# Worklog & Changelog

## Contexto de Desenvolvimento e Estratégia
O projeto `ponto7.site` utiliza HTML, CSS (com Design Tokens/Tipografia no próprio arquivo) e JS nativo. Para as futuras execuções de desenvolvimento do site, o contexto e o direcionamento de layout devem seguir rigorosamente o design original mantendo total fidelidade aos componentes declarados no `design-system.html`.

A **metodologia de desenvolvimento contínuo** segue um fluxo inquebrável para controle de contexto e assertividade em cada etapa:
1. **Planejamento na Etapa Zero:** Cada nova solicitação passa por uma análise antes de abrir o editor de código.
2. **Setup do Checklist:** Todos os passos essenciais para a modificação são listados em `checklist_vivo.md`.
3. **Execução Rastreada:** Ao finalizar um arquivo, marco no checklist para evitar retrabalho, omissão ou loop infinito de alterações.
4. **Fechamento e Worklog:** Todas as mudanças feitas na tarefa (inclusão, alteração ou exclusão de novos scripts, bibliotecas ou marcações HTML) são registradas ao final de cada iteração neste `worklog.md`.

---

## Log de Atividades e Alterações


### [31-03-2026] Setup Inicial do Ambiente de Documentação
- **Migração do HTML Base:** Movimentação do arquivo `index.html` original do diretório `/AgrupaMed` para o diretório `/ponto7.site`.
- **Criação do Showcase (Design System):**
  - Scripts Extratores Node.js executados para clonar seções-chave do `index.html` e formatar num documento de amostra para visualização sem mexer na árvore original.
  - Arquivo base de documentação vivo gerado em: `ponto7.site/design-system.html`.
- **Implementação do Tracking System:**
  - `checklist_vivo.md`: Criado e inicializado com sucesso para conter os guias instantâneos.
  - `worklog.md`: Criado contendo a estratégia de construção e o log inicial (este commit).

### [31-03-2026] Definição de Produto e Posicionamento (Ponto7)
O Ponto7 é um assistente inteligente focado em **Currículo para Residência Médica**. Ele preenche um GAP estratégico no ciclo de preparo do médico, automatizando a parte burocrática e oferecendo clareza competitiva.

**Funcionalidades Estratégicas:**
1.  **Cálculo da Pontuação:** Automatiza a soma de pontos baseando-se em editais (Ex: USP).
2.  **Análise Documental por IA:** O usuário envia o certificado (PDF/Imagem) e a IA categoriza (Monitoria, Congresso, Publicação) e converte em pontos.
3.  **Cofre de Certificados:** Organização segura e centralizada, com importação do Google Drive.
4.  **Análise de Gaps (O que falta):** Orientação tática sobre quantos pontos faltam para o objetivo.
5.  **Benchmarking:** Comparativo de pontuação entre diferentes programas de residência.
6.  **Farm de Currículo:** Sugestão ativa de eventos e atividades que agregam pontos específicos.

**Mote do Produto:** "O Duolingo do currículo médico".
**Valor Entregue:** Menos burocracia, clareza sobre o ranking e estratégia de aprovação.

---
*Aguardando próximos comandos para o desenvolvimento.*

---

### [31-03-2026] Planejamento: Design System Mestre Combinado (@assets)
**Objetivo:** Criar um `design_system.html` definitivo e altamente criativo, mesclando múltiplos repositórios: `dlocal.com`, `ponto7.site`, e com forte ênfase (base) no `saaswiftie.framer.website`.
**Diretrizes de Construção:**
- **Estética Base:** Branco/Claro (inspirado no SaaSwiftie), uso de transparent lettering.
- **Integração Criativa:** Absorver animações de surgimento, glows, backgrounds interativos e componentes complexos dos demais sistemas (`dlocal` e `ponto7`).
- **Arquitetura Requerida no Documento:**
  1. Hero Demo impressiva.
  2. Documentação detalhada de Tipografia.
  3. Sistema de Cores (roles, opa, swatches).
  4. UI Components animados.
  5. Ícones e Animações gerais.
- **Regra Rígida:** Reutilizar e referenciar classes originais para funcionar de forma nativa.

### [31-03-2026] Execução: Design System Master Combinado (@assets)
- **Criação Concluída:** Criado o documento único `c:\PontoUm\AgrupaMed\@assets\design_system.html`.
- **Implementação do Hero & Header:** Criado um navbar fixo com blur (glassmorphism). O Hero possui typography de alto impacto usando *transparent lettering* com `background-clip` (inspirado no SaaSwiftie) e `Intersection Observer` para scroll reveal (fade-up stagger).
- **Tipografia e Cores:** Documentados os tokens com as fontes Space Grotesk (display) e Inter (body), mantendo a paleta central focada no "Clean White Base" com asserções em Azul e tons vívidos (Pink/Purple) para microinterações.
- **Componentes Interativos (Glows):** Programada a recriação fiel dos botões Ponto7 contendo gradientes complexos e efeito de *plasma hover glow* fluído nas bordas.
- **Bento Grid Cards (Glow Hover Mouse Tracking):** Montagem do layout tático do dLocal para uso nas features do assistente de residência médica (Análise IA, Score Dashboard, Cofre e Currículo Farmável). Um script em JS calcula o target do hover no grid gerando uma orbe interativa embutida nos cartões.
- **Workflow:** Checklist Vivo (`checklist_vivo.md`) atualizado e marcado como concluído nas frentes de design system.

### [31-03-2026] Upgrading Design System: dLocal-style Accordion
- **Componente:** Substituído o accordion básico por uma versão premium (dLocal style) em `@assets/design_system.html`.
- **Funcionalidades:** Layout de 2 colunas (Texto + Imagem), estados ativos com gradiente, stack de cards sobrepostos e animação em grid-template-rows para expansão suave.

### [31-03-2026] Homepage: Lançamento da Hero Section
- **Criação do Index:** Inicializado o arquivo `c:\PontoUm\AgrupaMed\index.html`.
- **Destaque (Hero):** Recriação da Hero do `saaswiftie.framer.website` com fidelidade visual absoluta:
  - Navbar fixo (glassmorphism pill).
  - Social Proof Badge (avatares + call to action amarelo).
  - Headline de impacto com Space Grotesk 74px.
  - Infinite Logo Marquee com as principais instituições médicas (USP, ENARE, etc).
  - Sistema de animações sequenciais (fade-up stagger) e micro-interações.

### [31-03-2026] Homepage: Seção "Quem Somos" (About)
- **Layout:** Inspirado na seção FAQ do `saaswiftie.framer.website` — grid de 2 colunas (texto à esquerda + composição visual à direita).
- **Coluna de Texto (Left):**
  - Label decorativo "Quem Somos" em uppercase + tracking + azul primário (padrão `ds-label`).
  - H1 de impacto: `Tecnologia que transforma carreiras médicas.` (Space Grotesk, clamp 36-56px).
  - Descrição com fonte body, cor `--text-muted`, ênfase em `<strong>` para call-out.
  - CTA: botão `btn-about-cta` com gradiente azul primary, seta animada e hover lift.
- **Coluna Visual (Right):**
  - Retrato circular (border-radius 50%) com white border e drop-shadow azul.
  - SVG decorativo: arco primário (stroke 40px, azul `#2469fe`) e anel secundário (thin outline `#173ae1`).
  - Blob sólido azul na base (organic shape com border-radius custom).
  - Glow ambient radial gradient com blur.
  - Imagem gerada via `generate_image` e salva em `@assets/quem-somos-portrait.png`.
- **Animações:** IntersectionObserver com `about-fade-up` + stagger delays (0.1s–0.5s incrementais).
- **Integração:** Seção funciona como extensão visual da hero — sem corte visual, background `--color-bg-base` contínuo com `::before` gradient suavizador.
- **Responsivo:** `900px` → stack vertical, centralização de texto. `480px` → reajuste de tamanhos do portrait e padding.
- **Design System:** Tokens `--font-display`, `--font-body`, `--text-main`, `--text-muted`, `--color-primary-base`, `--ease-out-expo` todos reutilizados do DS Master.

### [31-03-2026] Refinamento Seção "Solução"
- **Animação do gráfico SVG:** Suavizada de 2s para 4s com `cubic-bezier(0.4, 0, 0.2, 1)`.
- **CTAs:** Adicionados links de texto animado com setas nos cards 1, 3, 4 e 5.
- **Estilo:** Implementada classe `.sol-card__cta` integrada ao design system.

### [31-03-2026]- Padronização de Labels de Seção:
    - O label "Solução" foi alterado do formato "pílula" para o padrão de texto `ds-label` (`uppercase`, `letter-spacing: 2.5px`, cor primária), harmonizando com o label de "Quem Somos" e o Design System Master.
- Efeito de "Spotlight" (luz do cursor) tornado global.

### [31-03-2026] Homepage: Seção "Passo a Passo como Funciona"
- **Layout:** Adaptado da seção "Processos" do `ponto7.site/index.html` e re-estilizado para o Design System Master (white theme, SaaSwiftie aesthetic).
- **Posição:** Inserida entre "Quem Somos" e "Solução" como extensão natural do fluxo visual.
- **Estrutura:**
  - Label decorativo "Como Funciona" (padrão `ds-label`: `uppercase`, `letter-spacing: 2.5px`, cor primária `--color-primary-base`).
  - H1 de impacto centralizado: "Simples, rápido e inteligente." (Space Grotesk, clamp 36-56px).
  - Container principal (`.steps-box`) com `border-radius: 24px`, `box-shadow` e `border` no padrão do DS.
- **Nav-Tabs (filtro):** Grid de 5 colunas no topo do container, cada uma com:
  - Barra ativa azul (`scaleX`) no topo (4px).
  - Label ("Passo 01") e título ("Envio de Certificados") com transições de cor.
  - Scroll horizontal no mobile com scrollbar oculta.
- **Slider de 2 Colunas:**
  - **Esquerda:** Imagem (fade + scale transition), com número decorativo grande (`10rem`, `rgba(36,105,254,0.04)`).
  - **Direita:** Label, H2, descrição, CTA (botão `btn-primary` com gradiente azul), controles (setas + dots numerados).
- **5 Passos Implementados:**
  1. Envio de Certificados
  2. Análise por IA
  3. Pontuação Automática
  4. Análise de Gaps
  5. Benchmarking
- **Imagens:** 5 ilustrações geradas via `generate_image` e salvas em `@assets/step-0X-*.png`.
- **JavaScript:** IIFE com `goToStep()`, nav clicks, arrow clicks, dot clicks — tudo isolado em escopo.
- **Scroll Reveal:** IntersectionObserver com classes `.steps-fade-up` + `.steps-stagger-X`.
- **Responsividade:** `1024px` → tabs scroll horizontal, grid 1fr. `640px` → padding reduzido, font ajustada.
- **Design System:** Todos os tokens reutilizados: `--font-display`, `--font-body`, `--text-main`, `--text-muted`, `--color-primary-base`, `--ease-out-expo`, `--color-bg-subtle`, `--shadow-sm`, `--color-border`.

### [31-03-2026] Homepage: Seção "Dores" (Pain Points)
- **Conceito:** Seção de "dor" que expõe os problemas do processo manual, criando contraste narrativo imediato antes da seção "Solução" que vem logo em seguida.
- **Posição:** Entre "Passo a Passo" e "Solução", completando o fluxo: Hero → Quem Somos → Como Funciona → **Problema** → Solução.
- **Design Tokens Novos:** Adicionados 4 tokens de cor vermelha ao `:root`:
  - `--color-danger-base: #ef4444`
  - `--color-danger-dark: #dc2626`
  - `--color-danger-light: #fecaca`
  - `--color-danger-ultralight: #fef2f2`
- **Estrutura:**
  - Label "O Problema" com cor vermelha (`--color-danger-base`).
  - H1: "O processo manual está te custando caro." (Space Grotesk, tight kerning).
  - Subtítulo descritivo centralizado.
- **Grid de Cards (2 linhas):**
  - **Linha 1:** `grid-template-columns: 1fr 2fr` — 1 card regular + 1 card wide com gráfico.
  - **Linha 2:** `grid-template-columns: repeat(3, 1fr)` — 3 cards regulares.
- **Card Regular:** Ícone vermelho (fundo `--color-danger-ultralight`), título, texto, CTA "Ver solução →" com underline animado `scaleX` (estilo dLocal).
- **Card com Gráfico Descendente:**
  - Título: "Eficiência do Processo Manual", valor "23%".
  - Badge vermelho: "↓ -77% vs processo com IA".
  - SVG com linha que desce (começa em y=10, termina em y=130), representando a queda de eficiência.
  - Animação: `stroke-dashoffset 800→0` em 4s + fill gradiente vermelho + dot final.
  - Trigger: IntersectionObserver com threshold 0.3.
- **5 Dores Abordadas:**
  1. Contagem Manual de Pontos
  2. Tempo Perdido com Retrabalho (gráfico)
  3. Editais Incompatíveis
  4. Horas Desperdiçadas
  5. Risco de Erros Humanos
- **Continuidade Visual:** Background `--color-white` (contrastando com `--color-bg-subtle` do Passo a Passo acima), e a seção "Solução" abaixo retoma o `--color-bg-base`, criando fluxo orgânico de alternância.
- **Responsividade:** `900px` → tudo empilha em 1fr. `480px` → padding e font reduzidos.
