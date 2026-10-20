# 📋 Sobre o Projeto

Este repositório contém o Design System estruturado e o protótipo navegável do **Localy**, uma aplicação para gerenciamento de aluguéis, permitindo o controle de inquilinos, pagamentos mensais e status de aluguel. O projeto implementa um Design System com suporte a **Light Mode** e **Dark Mode**.

**Acesso ao Figma:** [Localy - Figma](https://www.figma.com/design/P0DmbD2EjCRQYUWzCUUQm6/Sem-t%C3%ADtulo?node-id=0-1&p=f&t=pRdmlxPNz71vaRqi-0)

---

## 🎨 Design System Estruturado

### 1. Paleta de Cores

#### Light Mode 🌞

| Cor | Hex | Uso |
|---|---|---|
| Primary | `#006A67` | Botões primários, links, destaques |
| Secondary | `#4A6362` | Elementos secundários, badges |
| Tertiary | `#4A607B` | Acentos, ícones especiais |
| Background | `#F4FBF9` | Fundo geral da aplicação |
| OnBackground | `#161D1C` | Texto sobre fundo |
| OnSurface | `#AFFFF4` | Texto/elementos sobre superfícies |

#### Dark Mode 🌙

| Cor | Hex | Uso |
|---|---|---|
| Primary | `#80D5D1` | Botões primários em dark |
| Secondary | `#B0CCCA` | Elementos secundários em dark |
| Tertiary | `#B1C8E8` | Acentos em dark |
| Background | `#0E1514` | Fundo geral em dark |
| OnBackground | `#DDE4E3` | Texto em dark |
| OnSurface | `#09A6A1` | Texto/elementos sobre superfícies em dark |

Cores estruturadas como variáveis locais reutilizáveis no Figma.

---

### 2. Tipografia

Sistema tipográfico de 5 estilos base mantendo hierarquia clara e legibilidade:

| Estilo | Fonte | Tamanho | Espaçamento |
|---|---|---|---|
| Title | Inter Semi Bold | 32px | auto |
| Headline | Inter Regular | 24px | auto |
| Subtitle | Inter One Mono SemiBold | 18px | auto |
| Body | Inter Regular | 18px | auto |
| Button | Inter Semi Bold | 16px | auto |

---

### 3. Componentes Reutilizáveis

#### Botões

Variantes disponíveis:

**Primary (Filled)**
- Estados: Default, Outline, Disable
- Cor: Primary (`#006A67` Light | `#80D5D1` Dark)

**Secondary (Filled)**
- Estados: Default, Outline, Disable
- Cor: Secondary (`#4A6362` Light | `#B0CCCA` Dark)

**Tertiary (Filled)**
- Estados: Default, Outline, Disable
- Cor: Tertiary (`#4A607B` Light | `#B1C8E8` Dark)

Todos os botões foram criados como **componentes reais** no Figma (com variantes), não apenas frames estilizados.

#### AppBar

Componente de navegação superior com:
- Título da aplicação ("Aluguel")
- Suporte a variante Light e Dark

**Variantes:**
- AppBar - Light Mode (fundo Primary Light, texto claro)
- AppBar - Dark Mode (fundo Primary Dark, texto escuro)

---

## 🗂️ Estrutura do Protótipo

### Páginas Desenvolvidas

```
Design System
├─ Paleta de Cores (Light & Dark)
├─ Tipografia (5 estilos)
└─ Componentes Base (Botões e AppBar)

Protótipo
├─ 📱 Boas-vindas / Cloud
├─ 📱 Login
│  └─ Tela de autenticação com AppBar
├─ 📱 Dashboard - Aluguel (variante 1)
│  ├─ AppBar
│  ├─ Lista de inquilinos e pagamentos
│  └─ Filtros por status
└─ 📱 Dashboard - Aluguel (variante 2)
   ├─ AppBar
   └─ Lista de pagamentos detalhada
```

### Fluxo de Navegação

```
┌──────────────┐
│  Boas-vindas │
└──────┬───────┘
       ▼
┌──────────────┐
│    Login     │
└──────┬───────┘
       ▼
┌────────────────────┐
│ Dashboard - Aluguel │ ◄──────┐
├────────────────────┤        │
│ - AppBar            │        │
│ - Lista de aluguéis │        │
└──────┬─────────────┘        │
       ▼                      │
┌────────────────────┐        │
│ Dashboard - Aluguel │────────┘
│    (detalhado)      │
└────────────────────┘
```

---

## ✅ Checklist de Conformidade

**Cores**
- [x] Primary, Secondary, Tertiary definidas
- [x] Background e OnBackground implementados
- [x] OnSurface adicionado em paleta
- [x] Light Mode (`#006A67`, `#4A6362`, `#4A607B`)
- [x] Dark Mode (`#80D5D1`, `#B0CCCA`, `#B1C8E8`)

**Tipografia**
- [x] Headline: 24px | Inter Regular
- [x] Subtitle: 18px | Inter One Mono SemiBold
- [x] Body: 18px | Inter Regular
- [x] Button: 16px | Inter Semi Bold
- [x] Title: 32px | Inter Semi Bold (NOVO)

**Componentes**
- [x] Button Primary com variantes
- [x] Button Secondary com variantes
- [x] Button Tertiary com variantes
- [x] AppBar (Light)
- [x] AppBar (Dark)
- [x] Estados: Default, Outline, Disable

**Protótipo Navegável**
- [x] Tela de boas-vindas
- [x] Login com AppBar
- [x] Dashboard - Aluguel com AppBar
- [x] Navegação entre telas funcional
- [x] Consumo de variáveis em componentes

---

## 📁 Estrutura do Repositório

```
seuNome/Atividades/design_system/
├── README.md (este arquivo)
├── figma_link.txt
└── prints/
    ├── 01_paleta_cores.png
    ├── 02_escala_tipografica.png
    ├── 03_componentes.png
    └── 04_primeira_tela_prototipo.png
```

---

## 📝 Histórico de Versões

**v1.0.0 - 2026 (Atual)**
- ✅ Design System completo
- ✅ Cores Light & Dark com OnSurface
- ✅ Tipografia padronizada (5 estilos + Title)
- ✅ Componentes reutilizáveis (Botões e AppBar)
- ✅ Protótipo navegável
- ✅ AppBar com variante Dark Mode

---

## 📧 Contato

**Nome:** Arthur Felipe Queiroz Costa
**Figma:** [Localy - Figma](https://www.figma.com/design/P0DmbD2EjCRQYUWzCUUQm6/Sem-t%C3%ADtulo?node-id=0-1&p=f&t=pRdmlxPNz71vaRqi-0)
