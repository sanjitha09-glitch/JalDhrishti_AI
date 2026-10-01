<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep prototype watershed records in a typed client-side demo data module and derive visible metrics from the selected watershed; this allows replacement by a future geospatial data service without changing screens.
- Render Leaflet only after hydration and load it dynamically; this keeps server rendering safe while retaining an interactive GIS workspace.
- Use TanStack file routes for each major application section and a shared client-side selection provider; this keeps deep links and cross-page demo state coherent.
