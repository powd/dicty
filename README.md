# Dicty

Learn vocabulary and read books with ease!

## Tech assumptions

- Multi-project repo
  - Differences from the "classic" monorepo?
    - Different `package.json` fles, projects are truly independent and "draggable out"
  - Simple _npm workspaces_ feature used
    - Sticking to the "core" solutions should ensure stability (hopefully) and simplicity (nx monorepos look cool, but they seem to add more complexity and require steeper learning curve)
- Contrived directory structure for the sake of this
  - Keep as low levels as possible
  - Ugly naming, but (time will tell) pragmatism-oriented
    - Don't proliferate the number of modules, but create each one whenever:
      - a new `package.json` is needed or convenient (ie. to separate the framework-specific files)
      - runtimes differ (backend vs frontend),
      - given files will go to given bundles (backend vs frontend)
- Mixed style possible
  - Monolithic apps (each launched `<module>.<platform>` imports many modules, eg. `<module-a>.be`, `<module-b>.be`)
  - Microservices (each launched `<module>.<platform>` imports exactly one `<module>.be`)
- Double-inversed: frameworks as libraries
  - Instead of level-above, at least level-equal, ideally level-below
- Strong boundaries
  - Deep imports disallowed
- Thin shared modules
  - Discourage from (over)using them
  - Although it seems to be a bit crazy to completely give them up

> _TODO_: Move tech assumptions to ADRs?

## Explore

Modules:

- Suggestions:
  - [Suggestions Backend](./modules/suggestions.be/README.md)
  - [Suggestions Frontend](./modules/suggestions.fe/README.md)
  - [Suggestions NestJS](./modules/suggestions.nest/README.md)
  - [Suggestions Next.js](./modules/suggestions.next/README.md)
- Users:
  - ... (TODO: Maybe add in the future)

Shared:

- [Suggestions Backend](./shared/misc/README.md)
- [Suggestions Frontend](./shared/testing/README.md)
