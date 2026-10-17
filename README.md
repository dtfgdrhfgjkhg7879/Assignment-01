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


## Shipping Bill Form Refactoring

- Kept the existing Shipping Bill workflow and form fields while improving the submission flow.
- Added an API-shaped Promise-based mock service for listing bills, retrieving a bill, loading form options, and saving a bill.
- Added asynchronous save feedback and disabled save controls while a save is in progress.
- Kept party and port search behind the existing `partyMockService`; it returns Promise-based results with a simulated delay.
- No new runtime dependencies are required for these changes.

## Validation

Run the following checks from the repository root:

```bash
pnpm exec tsc --noEmit
pnpm build
```

Then manually test creating and editing a Shipping Bill, required-field validation, party/branch and port searches, empty search results, and save feedback. The production build has been observed to succeed; it emits a non-fatal warning for a JavaScript chunk larger than 500 kB.

## AI Usage & Approach

- **Tools used:** ChatGPT for code review, refactoring suggestions, debugging support, and documentation drafting.
- **How they were used:** Helped inspect the existing form and service boundaries, propose a Promise-based mock service, and improve save/loading behavior.
- **Additional workflows:** Used TypeScript checks and a production build to catch compile-time and bundling issues.
- **Engineering judgment:** Changes were kept focused on the existing form and its current architecture; no new dependency or real backend was introduced.
- **Learnings and validation:** Async UI work needs explicit loading and error handling, and the form should be manually tested beyond a successful build. Review and understand every change before submission.
