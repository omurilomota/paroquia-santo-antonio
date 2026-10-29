# Paróquia Santo Antônio

Site institucional para paróquia com agenda, sacramentos e liturgia.

> **Demonstração pública.** Telefones, WhatsApp, e-mail, endereço, CNPJ, redes sociais e dados de clientes são fictícios. Nenhum pedido, mensagem ou formulário é enviado a um canal real.

[**Ver demonstração**](https://paroquia-santo-antonio-muriloinc.vercel.app) · React 19 · Vite 7 · TypeScript · Tailwind CSS 4

## O que tem

- Agenda de celebrações e eventos
- Sacramentos e pastoral
- Capelas e comunidade
- Liturgia e leituras
- Contato com aviso de demonstração
- Build em arquivo único

## Stack

- React 19
- Vite 7
- TypeScript
- Tailwind CSS 4

## Rodando localmente

```bash
npm ci
cp .env.example .env.local
# edite .env.local com a sua connection string
npm run dev
```

Acesse `http://localhost:5173`.

## Variáveis de ambiente

Nenhuma variável obrigatória. O build é estático.

## Rotas

| Rota | Descrição |
| --- | --- |
| `/` | Página única com seções |

## Testes e qualidade

```bash
npm run typecheck
npm test
npm run build
```

## Deploy

O deploy é feito na Vercel. Configure as variáveis acima no painel do projeto, conecte o repositório e use `npm run build`.

## Estrutura

| Caminho | Responsabilidade |
| --- | --- |
| `src/components/` | Seções da página |
| `src/data/` | Conteúdo institucional |
| `src/utils/` | Utilitários de liturgia |
| `public/` | Ícones e imagens |

## Licença

MIT — veja [LICENSE](LICENSE).
