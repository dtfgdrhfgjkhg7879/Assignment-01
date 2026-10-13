## Export Software Frontend

Built on top of [fe-zen-arch](git@github.com:shivamkj/fe-zen-arch.git) — the core shared architecture for B2B SaaS frontends.

### Libraries

- **React** [Docs](https://react.dev/reference/react)
- **Tailwind CSS** [Docs](https://tailwindcss.com/docs/installation)
- **React Query** [Docs](https://tanstack.com/query/latest/docs/framework/react/overview)
- **React Hook Form** [Docs](https://www.react-hook-form.com/get-started)
- **Zustand** [Docs](https://zustand.docs.pmnd.rs/)

### Setup

```bash
pnpm install   # fe-zen-arch is included as a git submodule, init it first if missing
pnpm dev       # dev server on port 5173
pnpm lint      # prettier + tsc + eslint (fe-zen-arch lint pipeline)
pnpm build     # production build
```

### Notes

- `core`, `ui`, `auth`, `icons` are fe-zen-arch workspace packages, aliased via tsconfig paths & vite aliases.
- Forms are built directly with `useForm` from `core/form` + `Form` / `SubmitButton` from `core/form/components` — no generic form templates.
- Routing uses fe-zen-arch's zustand router: routes defined in `src/shared/routes.tsx`, paths in `src/shared/route-paths.ts`.
- Auth uses the fe-zen-arch auth module (routes, interceptors, login pages) out of the box.
- API base URL comes from `PUBLIC_API_URL` (`.env`).
- Don't use react-query mutation for react-hook-form submit handler.
- For HMR (hot refresh), the file must export only react component, and not any other constant or object.
- While most input elements use `...register('name')`, custom elements like select require `<Select<T> name="name" />` instead.
### Shipping Bill Form Refactoring

The Shipping Bill form has been refactored to improve readability, maintainability, and separation of concerns while preserving the existing application workflow.

#### Key Changes

- **Form structure:** Improved form component organization and readability.
- **Mock services:** Added an asynchronous mock service in `src/shipping-bills/shipping-bill-mock-service.ts` to list shipping bills, retrieve a bill by ID, fetch form options, and save a bill.
- **Promise-based operations:** Mock service methods return Promises with a simulated delay to represent asynchronous operations.
- **Data access:** Uses the existing demo store for retrieving and saving shipping bill data.
- **Type safety:** Uses TypeScript types for shipping bill values and saved bills.
- **Dependencies:** No new application dependencies were added.

#### Running the Application

```bash
pnpm install
pnpm dev
```

Open the local URL displayed by Vite, normally `http://localhost:5173`.

#### Validation

Run the following commands to verify the application:

```bash
pnpm exec tsc --noEmit
pnpm build
```

### AI Usage & Approach

AI assistance was used to support code review, refactoring, debugging, and documentation.

The approach was to:
1. Inspect the existing application structure and form implementation.
2. Improve form code readability while retaining the existing UI architecture.
3. Implement an asynchronous mock service using Promises and the existing demo store.
4. Resolve TypeScript and production build issues.
5. Run TypeScript checks and a production build to verify compilation.

All changes should be reviewed and tested in the application before submission. AI assistance was used as a development aid; the final implementation and behavior should be verified by the developer.
