import * as vscode from "vscode";
import { handleTestCase, TEST_CASES, ValidTestCase } from "./tests";

function buildComand(testCase: ValidTestCase) {
  let command = vscode.commands.registerCommand(
    `as-external-uri.${testCase}`,
    async () => {
      await handleTestCase(testCase);
    }
  );
  return command;
}

export function activate(context: vscode.ExtensionContext) {
  let commandsToBuild = Object.keys(TEST_CASES) as ValidTestCase[];
  const disposables = commandsToBuild.map((command) => buildComand(command));
  disposables.forEach((disposable) => context.subscriptions.push(disposable));
}

// this method is called when your extension is deactivated
export function deactivate() {}
