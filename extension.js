import * as vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    const createProjectCommand = vscode.commands.registerCommand('cartana.create', () => {
        vscode.window.showInformationMessage('Create Project command executed!');
    });
    // what dose this cartanaViewProvider dose ? 
    const cartanaViewProvider = new CartanaViewProvider(context.extensionUri);

    // Register the view provider
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(CartanaViewProvider.viewType, cartanaViewProvider)
    );

    context.subscriptions.push(createProjectCommand);
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}

class CartanaViewProvider {
    static viewType = 'CartanaView';

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