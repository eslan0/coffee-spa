import { Project } from "ts-morph";
import path from "node:path";

const project = new Project({
  tsConfigFilePath: "./tsconfig.app.json",
});

const SRC_DIR = path.resolve("./src");
const ALIAS = "@";

function normalize(p) {
  return p.replace(/\\/g, "/");
}

function toAlias(importPath, currentFile) {
  if (!importPath.startsWith(".")) {
    return importPath;
  }

  const absoluteImportPath = path.resolve(path.dirname(currentFile), importPath);

  const normalizedSrc = normalize(SRC_DIR);
  const normalizedImport = normalize(absoluteImportPath);

  if (!normalizedImport.startsWith(normalizedSrc)) {
    return importPath;
  }

  const relativeToSrc = normalize(path.relative(SRC_DIR, absoluteImportPath));

  return `${ALIAS}/${relativeToSrc}`;
}

const sourceFiles = project.getSourceFiles(["src/**/*.ts", "src/**/*.tsx"]);

let total = 0;

for (const file of sourceFiles) {
  let changed = false;

  for (const imp of file.getImportDeclarations()) {
    const oldPath = imp.getModuleSpecifierValue();

    const newPath = toAlias(oldPath, file.getFilePath());

    if (oldPath !== newPath) {
      imp.setModuleSpecifier(newPath);

      console.log(`✔ ${oldPath} -> ${newPath}`);

      changed = true;
      total++;
    }
  }

  if (changed) {
    await file.save();
  }
}

console.log(`\nFinished. Updated ${total} imports.`);
