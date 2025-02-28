import * as vscode from 'vscode';
import CartanaDataProvider from './src/webview/CartanaDataProvider';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    // Register the CartanaDataProvider
    const explorerdataProvider = new CartanaDataProvider();
    vscode.window.registerTreeDataProvider('cartanaViewExplorer', explorerdataProvider);  // Updated for Explorer view

    const createProjectCommand = vscode.commands.registerCommand('cartana.create', () => {
        vscode.window.showInformationMessage('Create Project command executed!');
    });

    context.subscriptions.push(createProjectCommand);

    const sidebarViewProvider = new CartanaViewProvider(context.extensionUri);

    // Register Webview for the sidebar view (cartanaViewSidebar)
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(CartanaViewProvider.viewTypeSidebar, sidebarViewProvider)
    );

    // Register Webview for the explorer view (cartanaViewExplorer)
    context.subscriptions.push(
        vscode.window.registerTreeDataProvider('cartanaViewExplorer', dataProvider)
    );
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}

class CartanaViewProvider {
    static viewTypeSidebar = 'cartanaViewSidebar';  // Updated for Sidebar
    static viewTypeExplorer = 'cartanaViewExplorer'; // Updated for Explorer

    /**
     * @param {vscode.Uri} extensionUri
     */
    constructor(extensionUri) {
        this.extensionUri = extensionUri;
    }

    /**
     * @param {vscode.WebviewView} webviewView
     * @param {vscode.WebviewViewResolveContext} context
     * @param {vscode.CancellationToken} _token
     */
    resolveWebviewView(webviewView, context, _token) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this.extensionUri]
        };

        webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);
    }

    /**
     * @param {vscode.Webview} webview
     * @returns {string}
     */
    getHtmlForWebview(webview) {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cartana</title>
            <style>
                body {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                }
                h1 {
                font-weight: bold;
                }
            </style>
            </head>
            <body>
            <h1>Welcome to Cartana!</h1>
            </body>
            </html>
        `;
    }
}
