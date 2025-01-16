const vscode = require('vscode');

function activate(context) {
  let disposable1 = vscode.commands.registerCommand('cartesi.runEmulator', function () {
    vscode.window.showInformationMessage('Running Cartesi Emulator!');
  });

  let disposable2 = vscode.commands.registerCommand('cartesi.showDocumentation', function () {
    vscode.window.showInformationMessage('Showing Cartesi Documentation!');
  });

  context.subscriptions.push(disposable1);
  context.subscriptions.push(disposable2);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
