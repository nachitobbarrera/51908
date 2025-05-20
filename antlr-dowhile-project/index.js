import fs from "fs";
import antlr4 from "antlr4";
import CsubLexer from "./generated/CSubLexer.js";
import CsubParser from "./generated/CSubParser.js";
import CustomCsubVisitor from "./CustomCSubVisitor.js";

async function main() {
  let input;
  try {
    input = fs.readFileSync("input.txt", "utf8");
  } catch {
    console.error("No se pudo leer input.txt");
    return;
  }

  const chars = new antlr4.InputStream(input);
  const lexer = new CsubLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  tokens.fill();

  const parser = new CsubParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.prog();

  if (parser._syntaxErrors > 0) {
    console.error("Entrada con errores de sintaxis.");
    return;
  }
  console.log("Entrada válida.\n");

  console.log("Tabla de tokens:");
  console.log("LEXEMA".padEnd(20) + "TOKEN");
  tokens.tokens
    .filter((t) => t.type > 0)
    .forEach((t) => {
      const name = parser.symbolicNames[t.type];
      console.log(t.text.padEnd(20) + name);
    });
  console.log("");

  console.log("Árbol de derivación:");
  console.log(tree.toStringTree(parser.ruleNames));
  console.log("");

  const visitor = new CustomCsubVisitor();
  visitor.visit(tree);

  console.log("Código traducido a JavaScript:");
  console.log(visitor.jsLines.join("\n"));
  console.log("");

  console.log("Salida de la ejecución:");
  try {
    eval(visitor.jsLines.join("\n"));
  } catch (e) {
    console.error("Error en tiempo de ejecución:", e.message);
  }
}

main();
