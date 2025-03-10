import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        setupFiles: ["tests/setup.ts"],
        include: ["**/*.{test,spec}.ts"],
        root: "src",
        reporters: ["default"],
        coverage: {
            provider: "istanbul",
            reporter: ["lcov", "html", "text"],
            reportsDirectory: "../coverage",
            exclude: ["**/dev.ts"],
        },
    },
});
