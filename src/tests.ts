import * as vscode from "vscode";

export const TEST_CASES = {
  locahostPort: {
    input: "http://localhost:3000",
    expected: "http://localhost:8080/proxy/3000",
  },
  locahostNoPort: {
    input: "http://localhost",
    expected: "http://localhost:8080/proxy/80",
  },
  locahostNoPortHttps: {
    input: "https://localhost",
    expected: "http://localhost:8080/proxy/443",
  },
  noLocalhost: {
    input: "https://google.com",
    expected: "https://google.com",
  },
};

export type ValidTestCase = keyof typeof TEST_CASES;

export async function handleTestCase(testCase: ValidTestCase) {
  const externalUri = await vscode.env.asExternalUri(
    vscode.Uri.parse("http://localhost:8000")
  );
  vscode.window.showInformationMessage(`
  input: ${TEST_CASES[testCase].input} 
  output: ${externalUri}
  expected: ${TEST_CASES[testCase].expected} 
  `);
}