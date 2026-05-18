# Coffee SPA

## Structure

```plaintext
coffee-spa/
│
├─ public/
│
├─ src/
│   ├─ assets/
│   │   ├─ images/
│   │   ├─ icons/
│   │   └─ styles/
│   │
│   ├─ components/
│   │   ├─ Button/
│   │   │   ├─ Button.tsx
│   │   │   └─ Button.styles.ts
│   │   └─ ...
│   │
│   ├─ pages/
│   │   ├─ Home/
│   │   │   ├─ Home.tsx
│   │   │   └─ Home.styles.ts
│   │   └─ About/
│   │
│   ├─ hooks/
│   │   └─ useFetch.ts
│   │
│   ├─ context/
│   │   └─ AuthContext.tsx
│   │
│   ├─ services/               # HTTP calls, API clients
│   │   └─ api.ts
│   │
│   ├─ utils/
│   │   └─ formatDate.ts
│   │
│   ├─ routes/
│   │   └─ AppRoutes.tsx
│   │
│   ├─ App.tsx
│   └─ main.tsx
│
├─ vite.config.ts
├─ tsconfig.json
└─ package.json
```
