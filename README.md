# GJHealth MVP Dashboard
update: env fix test
Simple React + Vite dashboard used to demo the GJHealth MVP flow.

## Scripts

- `npm install` – install dependencies
- `npm run dev` – run locally
- `npm run build` – build for production
- `npm run preview` – preview the production build

## Environment

Copy `.env.example` to `.env` and set:

```bash
VITE_API_BASE_URL=https://your-api-id.execute-api.eu-north-1.amazonaws.com/prod
```

This should match your AWS API Gateway **Invoke URL** for the `prod` stage.
