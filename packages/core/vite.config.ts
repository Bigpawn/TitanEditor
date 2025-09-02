import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "TitanEditorCore",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        "prosemirror-model",
        "prosemirror-state",
        "prosemirror-view",
        "prosemirror-keymap",
        "prosemirror-commands",
        "prosemirror-schema-basic",
        "prosemirror-schema-list",
        "prosemirror-history",
      ],
      output: {
        globals: {
          "prosemirror-model": "prosemirrorModel",
          "prosemirror-state": "prosemirrorState",
          "prosemirror-view": "prosemirrorView",
          "prosemirror-keymap": "prosemirrorKeymap",
          "prosemirror-commands": "prosemirrorCommands",
          "prosemirror-schema-basic": "prosemirrorSchemaBasic",
          "prosemirror-schema-list": "prosemirrorSchemaList",
          "prosemirror-history": "prosemirrorHistory",
        },
      },
    },
  },
});
