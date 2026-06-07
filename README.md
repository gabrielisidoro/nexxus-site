# Site Institucional — Nexxus

Site institucional da **Nexxus** (terceirização, mentoria e estruturação comercial), construído com **Vite + React + TypeScript + Tailwind CSS**, com blog, animações e design responsivo.

---

## 🚀 Como rodar o projeto

Pré-requisitos: **Node.js 18+** (já instalado nesta máquina) e npm.

```bash
npm install      # instala as dependências (só na primeira vez)
npm run dev      # ambiente de desenvolvimento  → http://localhost:5173
npm run build    # gera a versão de produção na pasta /dist
npm run preview  # pré-visualiza a versão de produção
npm run lint     # checagem de tipos (TypeScript)
```

Abra **http://localhost:5173** no navegador depois do `npm run dev`.

---

## 🎨 Onde editar as cores da marca

Todas as cores ficam em **[`tailwind.config.js`](tailwind.config.js)**, no objeto `colors`:

- `brand` → azul Nexxus. O tom principal é o **`brand.500` (`#175eff`)**, usado em botões e destaques.
- `ink` → cinza escuro Nexxus. O tom da marca é o **`ink.700` (`#414042`)**; o `ink.950` é o fundo do footer.

Troque os valores de `500` (azul) e `700` (cinza) para mudar a identidade do site inteiro. As demais tonalidades (50–950) são variações para hover, fundos e textos.

> **Fonte:** os títulos usam **Poppins** e o corpo usa **Inter** (carregadas via Google Fonts em `index.html`) — uma aproximação geométrica da fonte **Nexa** da marca. Quando você tiver a licença da Nexa, basta adicioná-la e trocar `fontFamily.display` no `tailwind.config.js`.

---

## ✍️ Onde adicionar / editar as matérias do blog

Cada matéria é um arquivo em **[`src/data/posts/`](src/data/posts)**.

**Para criar um post novo:**

1. Copie um arquivo existente (ex.: `por-que-terceirizar-operacao-comercial.ts`) e renomeie.
2. Ajuste o conteúdo (`slug`, `title`, `excerpt`, `date`, `category`, `content`...).
   - O `slug` vira a URL: `/blog/seu-slug`.
   - O `content` é uma lista de blocos: `{ type: 'p' }` (parágrafo), `{ type: 'h2' }` (subtítulo), `{ type: 'ul', items: [...] }` (lista) e `{ type: 'quote' }` (citação).
3. Importe e registre o post em **[`src/data/posts/index.ts`](src/data/posts/index.ts)** (array `registered`).

Pronto — listagem, ordenação por data e página individual funcionam automaticamente.

---

## 🖼️ Fotos e vídeo do escritório

As **fotos e o vídeo reais do escritório já estão integrados** ao site (hero, "Quem somos", página Sobre e cards de estrutura). Os arquivos ficam otimizados em **WebP** em `src/assets/escritorio/` e são importados por `src/assets/escritorio/index.ts`.

**Para trocar uma foto/vídeo:** substitua o arquivo correspondente em `src/assets/escritorio/` mantendo o mesmo nome. Para adicionar imagens novas, coloque os arquivos `.jpg`/`.png` nessa pasta e rode:

```bash
npm run optimize:images   # converte para .webp otimizado e remove o original
```

Depois, importe o novo arquivo em `src/assets/escritorio/index.ts` e use onde quiser.

> Os componentes `MediaPlaceholder` e `VideoPlaceholder` continuam disponíveis: se você remover um `src`, eles voltam a mostrar um bloco de marca marcado **"Substituir"** — útil para novos espaços.

- **`MediaPlaceholder`** — fotos. Assim que você passar a prop `src`, ele mostra a imagem real (com lazy loading).
- **`VideoPlaceholder`** — vídeo. Passe a prop `src` com o `.mp4` e ele renderiza o vídeo.

**Passo a passo para trocar uma imagem:**

1. Coloque o arquivo em `src/assets/` (ex.: `src/assets/escritorio/recepcao.jpg`). Prefira **WebP** otimizado.
2. No componente onde aparece o placeholder, importe e passe em `src`:

   ```tsx
   import recepcao from '@/assets/escritorio/recepcao.jpg'
   // ...
   <MediaPlaceholder src={recepcao} label="recepção" ratio="wide" />
   ```

Principais lugares com placeholders de mídia:

| Onde | Arquivo | O que vai ali |
|------|---------|---------------|
| Hero da home | `src/pages/Home.tsx` | foto/vídeo de destaque do escritório |
| "Quem somos" (home) | `src/pages/Home.tsx` | foto da equipe/escritório |
| Operação física (Sobre) | `src/pages/Sobre.tsx` | foto do edifício + **vídeo da fachada** |
| Estrutura interna (Sobre) | `src/pages/Sobre.tsx` | ambiente, salas de mentoria, estúdio |
| Equipe (Sobre) | `src/data/team.ts` | foto de cada integrante (campo `photo`) |
| Capas do blog | `src/data/posts/*` | imagem de capa de cada matéria (campo `cover`) |

---

## 📞 Onde editar contato, WhatsApp e redes sociais

Tudo num único arquivo: **[`src/data/site.ts`](src/data/site.ts)**.

Preencha os campos marcados com `[INSERIR ...]`:

- `whatsapp.number` → número no formato internacional, só dígitos (ex.: `5511999999999`).
- `phoneDisplay` → telefone exibido.
- `social.instagram` / `social.linkedin` → URLs reais.
- `email` e `address` já estão preenchidos.

> Procure por `[INSERIR` no projeto para encontrar rapidamente tudo que falta completar (incluindo os **números reais** da home, em `src/data/metodo.ts` → `resultStats`).

---

## 📨 Formulário de contato

O formulário (`src/pages/Contato.tsx`) está com o `onSubmit` **preparado** para você plugar o envio. Há um comentário `TODO` indicando onde conectar **Formspree**, **EmailJS** ou uma API própria. Hoje ele apenas registra os dados no console e mostra a confirmação.

---

## 🗂️ Estrutura de pastas

```
src/
├── assets/          Logo e imagens
├── components/      Header, Footer, Logo, Button, SEO, Mandala, InfernoCeu, placeholders…
├── data/            Conteúdo editável:
│   ├── site.ts        contato, WhatsApp, redes, navegação
│   ├── services.ts    os 3 serviços
│   ├── metodo.ts      método, pilares, papéis, números
│   ├── team.ts        equipe e valores
│   └── posts/         matérias do blog (1 arquivo por post)
├── pages/           Home, Sobre, Servicos, Blog, BlogPost, Contato, NotFound
├── lib/ · hooks/    utilitários
├── App.tsx          rotas
└── main.tsx         entrada da aplicação
```

---

## ☁️ Publicar (deploy)

O projeto gera arquivos estáticos (`npm run build` → pasta `dist/`). Pode ser publicado em **Vercel**, **Netlify**, **Cloudflare Pages** ou **GitHub Pages**.

> Por ser uma SPA com React Router, configure o host para redirecionar todas as rotas para `index.html` (na Vercel/Netlify isso é automático).

Lembre de atualizar `site.url` em `src/data/site.ts` com o domínio final (usado nas meta tags de SEO).
