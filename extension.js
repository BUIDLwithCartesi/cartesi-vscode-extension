import * as vscode from 'vscode';

export function activate(context) {
    console.log('cartesi VS code extention is now activated !');

    const createProjectCommand = vscode.commands.registerCommand('extension.createProject', () => {
        vscode.window.showInformationMessage('Create Project command executed!');
    });

    context.subscriptions.push(createProjectCommand);
}

export function deactivate() {
    console.log('cartesi VS code extention is now deactivated !');
}