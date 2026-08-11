# js/

Scripts em ES modules (P3).

```
js/
├── main.js              ← entry (type="module")
└── modules/
    ├── utils.js         prefers-reduced-motion
    ├── feedback.js      toast + aria-live
    ├── nav.js           menu mobile
    ├── filters.js       filtros + busca na grade
    ├── forms.js         submit busca/contato
    ├── carousel.js      carrossel do hero
    └── header.js        header ao scroll
```

Carregado em `index.html` (raiz) via:

```html
<script type="module" src="js/main.js"></script>
```
