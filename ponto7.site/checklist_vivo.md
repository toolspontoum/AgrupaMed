# Checklist Vivo

## Tarefa Atual: Inicialização do Sistema de Tracking e Setup Inicial
- [x] Criar o arquivo `checklist_vivo.md` para guiar a execução das tarefas.
- [x] Criar o arquivo `worklog.md` para documentar o histórico de desenvolvimento e regras de contexto.
- [x] Documentar no `worklog.md` a estratégia de desenvolvimento futura.
- [x] Aguardar próximos comandos do usuário para o desenvolvimento.

## Tarefa Atual: Internalização do Contexto do Produto (Ponto7)
- [x] Receber e processar a definição do produto (Assistente de Residência Médica).
- [x] Atualizar o `worklog.md` com os pilares estratégicos do site.
- [x] Mapear seções atuais do `index.html` para os novos pilares do produto (Hero criada).
- [x] Planejar adaptação de textos e componentes para o novo nicho.

## Tarefa Atual: Aprimoramento e Padronização do Design System Master
- [x] Analisar os arquivos `dlocal.com/design-system.html` e `ponto7.site/design-system.html`.
- [x] Padronizar a navegação e a estrutura de seções (Hero, Typography, Colors, Components, Layout, Motion, Icons).
- [x] Mover/renomear seções atuais para estarem de acordo com a nova estrutura.
- [x] Adicionar os componentes faltantes (Inputs, Marquee/Carrossel, Accordions, Iconografia).
- [x] Manter e proteger a estética "base branca" do SaaSwiftie em todos os componentes importados.
- [x] Iniciar a extração ou cópia de classes originais para o novo HTML (index.html hero).

## Tarefa Atual: Criação da Homepage (@/index.html)
- [x] Implementar Hero Section (estética SaaSwiftie) — **Feito**.
- [x] **Implementar Seção "Quem Somos" (extensão da hero)** — **Feito**
  - [x] Criar o CSS: layout 2 colunas (texto + imagem), responsivo.
  - [x] Criar label decorativo (ds-label style) "Quem Somos".
  - [x] Criar h1 de impacto (font-display, large).
  - [x] Criar texto descritivo (font-body, text-muted).
  - [x] Criar CTA com botão primário (btn-primary).
  - [x] Criar a composição visual do lado direito (imagem circular + arcos decorativos SVG azuis).
  - [x] Aplicar animação de scroll reveal (fade-up + stagger via IntersectionObserver).
  - [x] Garantir background "extensão" da hero (sem corte visual, transição suave).
  - [x] Testar responsividade (mobile stack, desktop side-by-side).
  - [x] Gerar imagem com generate_image para uso na composição visual.
- [x] **Implementar Seção "Solução" (extensão do fluxo Hero → Quem Somos)** — **Feito**
- [x] **Refinar Seção "Solução"** — **Feito**
  - [x] Suavizar animação do gráfico (duração de 4s + cubic-bezier clean).
  - [x] Adicionar CTAs de texto com setas animadas nos cards 1, 3, 4 e 5.
  - [x] Manter o card do gráfico sem CTA (conforme solicitado).
- [x] **Refinar Hover das CTAs da Seção "Solução"**
  - [x] Implementar underline suave (scaleX) conforme padrão dLocal.
  - [x] Sincronizar animação de slide da seta com easing cubic-bezier(0.22, 0.61, 0.36, 1).
  - [x] Garantir que o underline pare antes da seta (padding/width calc).
- [x] **Implementar Seção "Passo a Passo" (acima da Solução)** — **Feito**
  - [x] Criar CSS: layout com nav-tabs no topo + 2 colunas (imagem esquerda + texto direita).
  - [x] Criar label decorativo (ds-label style) "Como Funciona".
  - [x] Criar h1 de impacto centralizado.
  - [x] Criar nav-tabs com 5 passos (filtro interativo com barra ativa scaleX).
  - [x] Criar coluna esquerda com imagens que alternam por passo (fade + scale).
  - [x] Criar coluna direita com label, h2, texto e CTA por passo.
  - [x] Criar controles (setas + dots numerados).
  - [x] Implementar JavaScript de interatividade (goToStep, nav clicks, arrow clicks, dot clicks).
  - [x] Gerar 5 imagens ilustrativas para os passos via generate_image.
  - [x] Aplicar animação de scroll reveal (fade-up via IntersectionObserver).
  - [x] Garantir background `--color-bg-subtle` (extensão visual do design).
  - [x] Inserir seção no HTML acima da seção "Solução".
  - [x] Testar consistência visual com Design System Master.
- [x] **Implementar Seção "Dores" (acima da Solução, abaixo do Passo a Passo)** — **Feito**
  - [x] Adicionar variáveis CSS de cor vermelha (--color-danger-base, --color-danger-dark, --color-danger-light, --color-danger-ultralight).
  - [x] Criar CSS: section com background `--color-white` (continuidade visual).
  - [x] Criar label decorativo "O Problema" com cor vermelha.
  - [x] Criar h1 de impacto centralizado.
  - [x] Criar subtítulo descritivo centralizado.
  - [x] Criar grid de cards: primeira linha 2 colunas (1col + 2col wide com gráfico).
  - [x] Criar grid de cards: segunda linha 3 colunas (3 cards regulares).
  - [x] Card regular: ícone vermelho, título, texto, CTA com seta (estilo sol-card).
  - [x] Card wide (gráfico): título "Eficiência do Processo Manual", valor "23%", badge de queda "-77%", SVG chart com linha DESCENDENTE animada (stroke-dashoffset + vermelho).
  - [x] Aplicar animação de scroll reveal (fade-up + stagger via IntersectionObserver).
  - [x] Implementar JavaScript para trigger da animação do gráfico descendente.
  - [x] Garantir responsividade (mobile stack 1 coluna, tablet 2 colunas).
  - [x] Inserir seção no HTML acima da seção "Solução" e abaixo de "Passo a Passo".
  - [x] Testar aspecto de "continuidade" visual com seções adjacentes.
  - [x] Atualizar worklog.md com registro da implementação.
- [ ] Implementar Seção de Depoimentos.
- [ ] Implementar Seção de FAQ (usando o novo Accordion dLocal).
- [ ] Implementar Footer.
