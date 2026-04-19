declare module '@microflash/rehype-figure' {
  import type * as unified from 'unified'
  type RehypePlugin<PluginParameters extends any[] = any[]> = unified.Plugin<PluginParameters, hast.Root>
  const plugin: RehypePlugin
  export default plugin
}
