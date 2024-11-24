import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        ".form-input": {
          marginTop: "0.25rem", // mt-1
          padding: "0.5rem", // p-2
          width: "100%", // w-full
          borderWidth: "1px", // border
          borderColor: "#D1D5DB", // border-gray-300
          borderRadius: "0.375rem", // rounded-md
        },
        ".form-label": {
          display: "block", // block
          fontSize: "0.875rem", // text-sm
          fontWeight: "500", // font-medium
          color: "#4A5568", // text-gray-700
        },
      });
    },
  ],
} satisfies Config;
