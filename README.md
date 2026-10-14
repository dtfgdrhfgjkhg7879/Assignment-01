# Assignment-01

## Export Software Frontend

Built on top of [fe-zen-arch](https://github.com/shivamkj/fe-zen-arch), the core shared architecture for B2B SaaS frontends.

### Libraries

- **React:** [Documentation](https://react.dev/reference/react)
- **Tailwind CSS:** [Documentation](https://tailwindcss.com/docs/installation)
- **React Query:** [Documentation](https://tanstack.com/query/latest/docs/framework/react/overview)
- **React Hook Form:** [Documentation](https://www.react-hook-form.com/get-started)
- **Zustand:** [Documentation](https://zustand.docs.pmnd.rs/)

### Setup

```bash
pnpm install
pnpm dev
pnpm lint
pnpm build
```

The `fe-zen-arch` package is included as a Git submodule.

### Notes

- `core`, `ui`, `auth`, and `icons` are workspace packages provided by `fe-zen-arch`.
- Forms use `useForm` from `core/form` and components from `core/form/components`.
- Routes are defined in `src/shared/routes.tsx`.
- Authentication uses the `fe-zen-arch` auth module.
- The API base URL is configured using `PUBLIC_API_URL` in `.env`.
- Follow the existing project conventions for form submission and hot-module replacement.

## Shipping Bill Form Refactoring

The Shipping Bill form was refactored to improve readability, maintainability, and separation of concerns while preserving the existing application workflow.

### Key Changes

- **Form structure:** Improved component organization and readability.
- **Mock services:** Added `src/shipping-bills/shipping-bill-mock-service.ts` for listing bills, retrieving a bill by ID, fetching form options, and saving a bill.
- **Promise-based operations:** Mock service methods return Promises with a simulated delay.
- **Data access:** Uses the existing demo store to retrieve and save shipping bill data.
- **Type safety:** Uses TypeScript types for shipping bill values and saved bills.
- **Dependencies:** No new application dependencies were added.

### Running the Application

```bash
pnpm install
pnpm dev
```

Open the local URL displayed by Vite, normally `http://localhost:5173`.

### Validation

```bash
pnpm exec tsc --noEmit
pnpm build
```

### AI Usage & Approach

AI assistance was used for code review, refactoring, debugging, and documentation.

The approach was to:

1. Inspect the existing application structure and form implementation.
2. Improve form readability while retaining the existing UI architecture.
3. Implement an asynchronous mock service using Promises and the existing demo store.
4. Resolve TypeScript and production build issues.
5. Run TypeScript checks and a production build to verify compilation.

AI assistance was used as a development aid. The developer should review the changes and verify the final application behavior before submission.