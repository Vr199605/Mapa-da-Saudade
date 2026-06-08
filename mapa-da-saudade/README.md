# O Mapa da Saudade ❤️

> Um presente digital para o Dia dos Namorados — uma experiência de amor entre João Pessoa e Rio de Janeiro.

## 🚀 Como fazer o deploy

### 1. Suba para o GitHub

```bash
git init
git add .
git commit -m "O Mapa da Saudade ❤️"
git remote add origin https://github.com/SEU_USUARIO/mapa-da-saudade.git
git push -u origin main
```

### 2. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Importe o repositório do GitHub
4. Configure:
   - **Framework**: Next.js (detectado automaticamente)
   - **Build Command**: `npm run build`
   - **Output Directory**: `out`
5. Clique em **Deploy** ✅

### 3. Personalize a data do reencontro

Edite o arquivo `components/Countdown.tsx` e altere a linha:

```typescript
const TARGET_DATE = new Date("2025-06-22T00:00:00");
```

Coloque a data real do seu reencontro no formato `YYYY-MM-DD`.

---

## 🛠️ Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`

## ✨ Tecnologias

- **Next.js 15** + TypeScript
- **Tailwind CSS**
- **Framer Motion** — animações cinematográficas
- **Google Fonts** — Cormorant Garamond, Jost, Great Vibes

---

*Feito com amor. Para você.*
