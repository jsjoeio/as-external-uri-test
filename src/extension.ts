import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "as-external-uri" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "as-external-uri.helloWorld",
    async () => {
      const callableUri = await vscode.env.asExternalUri(
        vscode.Uri.parse("http://localhost:8000")
      );
      console.log(callableUri)
      vscode.window.showInformationMessage(
        `your url: ${callableUri.toString()}`
      );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
