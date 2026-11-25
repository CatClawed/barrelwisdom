import { pathData } from '@app/consts';

export async function getComponentRegistry() {
  const registry: Record<string, Record<string, { list: any; detail: any }>> = {};

  for (const { game, section, listPath=true, detailPath=true } of pathData) {
    if (!registry[game]) registry[game] = {};

    const list = !listPath ? undefined : (await import(`@components/Games/${game}/${section}/List.astro`)).default;
    const detail = !detailPath ? undefined : (await import(`@components/Games/${game}/${section}/Detail.astro`)).default;
    registry[game][section] = { list, detail };
  }
  return registry;
}
