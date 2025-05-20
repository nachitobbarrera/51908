import CsubVisitor from "./generated/CSubVisitor.js";

export default class CustomCsubVisitor extends CsubVisitor {
  constructor() {
    super();
    this.jsLines = [];
    this.indentLevel = 0;
  }

  indent() {
    return "  ".repeat(this.indentLevel);
  }

  visitProg(ctx) {
    ctx.instruccion().forEach((instr) => this.visit(instr));
    return null;
  }

  visitBucle(ctx) {
    this.jsLines.push(this.indent() + "do {");
    this.indentLevel++;
    this.visit(ctx.sentencias());
    this.indentLevel--;
    const cond = ctx.condicion().getText();
    this.jsLines.push(this.indent() + `} while (${cond});`);
    return null;
  }

  visitSentencias(ctx) {
    ctx.instruccion().forEach((instr) => this.visit(instr));
    return null;
  }
  visitSalida(ctx) {
    const text = ctx.cadena().getText();
    this.jsLines.push(this.indent() + `console.log(${text});`);
    return null;
  }

  visitTerminar(ctx) {
    this.jsLines.push(this.indent() + "break;");
    return null;
  }
}
