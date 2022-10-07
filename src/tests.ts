import * as vscode from "vscode";

export async function askTestCase() {
  const input = await vscode.window.showInputBox({
    prompt: "URL to pass through to asExternalUri",
  });

  if (input) {
    const output = await vscode.env.asExternalUri(vscode.Uri.parse(input));
    vscode.window.showInformationMessage(`input: ${input} output: ${output}`);
  } else {
    vscode.window.showErrorMessage(
      `Failed to run test case. No input provided.`
    );
  }
}
