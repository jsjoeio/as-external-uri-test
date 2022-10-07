import * as vscode from "vscode";
import { askTestCase } from "./tests";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    `as-external-uri.askTestCase`,
    async () => {
      await askTestCase();
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
