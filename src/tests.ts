import * as vscode from "vscode";

export const TEST_CASES = {
  localhostPort: {
    input: "http://localhost:3000",
    expected: "<host>/proxy/3000",
  },
  localhostNoPort: {
    input: "http://localhost",
    expected: "<host>/proxy/80",
  },
  localhostNoPortHttps: {
    input: "https://localhost",
    expected: "<host>/proxy/443",
  },
  noLocalhost: {
    input: "https://google.com",
    expected: "https://google.com",
  },
};

export type ValidTestCase = keyof typeof TEST_CASES;

export async function handleTestCase(testCase: ValidTestCase) {
  const externalUri = await vscode.env.asExternalUri(
    vscode.Uri.parse(TEST_CASES[testCase].input)
  );
  vscode.window.showInformationMessage(`
input: ${TEST_CASES[testCase].input} 
output: ${externalUri}
expected: ${TEST_CASES[testCase].expected} 
  `);
}
