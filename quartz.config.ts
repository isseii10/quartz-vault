import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "ユリイカ",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-NJ276HPQCY",
    },
    locale: "ja-JP",
    baseUrl: "isseii10.github.io/quartz-vault/",
    ignorePatterns: [
      ".claude",
      ".git",
      ".github",
      ".obsidian",
      "asset",
      "daily_notes",
      "monthly_notes",
      "objectives",
      "permanent_notes/scg",
      "projects",
      "resume",
      ".gitignore",
      ".obsidian.vimrc",
      "README.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",
          lightgray: "#f5f5f5",
          gray: "#d0d0d0",
          darkgray: "#666666",
          dark: "#000000",
          secondary: "#333333",
          tertiary: "#666666",
          highlight: "rgba(0, 0, 0, 0.1)",
          textHighlight: "#00000015",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#1a1a1a",
          gray: "#333333",
          darkgray: "#cccccc",
          dark: "#ffffff",
          secondary: "#cccccc",
          tertiary: "#999999",
          highlight: "rgba(255, 255, 255, 0.1)",
          textHighlight: "#ffffff15",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
