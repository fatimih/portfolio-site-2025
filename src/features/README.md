# features/

Domain-oriented modules live here. Each feature owns its UI glue, hooks, and services
without polluting the shared UI library.

Suggested structure for a feature:
features/
  <feature-name>/
    components/     # feature-scoped UI (wrappers, not generic UI library)
    hooks/          # e.g., use<Feature>Data, use<Feature>Actions
    services/       # API calls, adapters, storage
    index.js        # public surface for the feature (re-exports)

Examples we might add later:
- projects/ (portfolio items listing, filtering)
- contact/ (submit message, client-side status)
- analytics/ (page events, consent)

This folder intentionally contains no global styling; use /styles for globals and tokens.
