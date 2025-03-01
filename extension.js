import * as vscode from 'vscode';
import CartanaDataProvider from './src/webview/CartanaDataProvider.js';
import CartanaViewProvider from './src/webview/CartanaViewProvider.js';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    // Register the CartanaDataProvider
    const explorerDataProvider = new CartanaDataProvider();
    vscode.window.registerTreeDataProvider('cartanaViewExplorer', explorerDataProvider);

    // Register the 'Create Project' command
    const createProjectCommand = vscode.commands.registerCommand('cartana.create', () => {
        vscode.window.showInformationMessage('Create Project command executed!');
    });
    context.subscriptions.push(createProjectCommand);
    
    // Register the 'Refresh' command
    const refreshCommand = vscode.commands.registerCommand('cartana.refresh', () => {
        explorerDataProvider.refresh();
        vscode.window.showInformationMessage('Cartana Explorer refreshed!');
    });
    context.subscriptions.push(refreshCommand);
    
    // Register Sidebar Webview
    const sidebarViewProvider = new CartanaViewProvider(context.extensionUri);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(CartanaViewProvider.viewTypeSidebar, sidebarViewProvider)
    );
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}
