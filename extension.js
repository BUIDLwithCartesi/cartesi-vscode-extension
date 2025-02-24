import * as vscode from 'vscode';

export function activate(context) {
    console.log('Cartana is now activated!');

    const createProjectCommand = vscode.commands.registerCommand('cartana.create', () => {
        vscode.window.showInformationMessage('Create Project command executed!');
    });

    const cartanaViewProvider = new CartanaViewProvider(context.extensionUri);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider(CartanaViewProvider.viewType, cartanaViewProvider)
    );

    context.subscriptions.push(createProjectCommand);
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}

class CartanaViewProvider {
    static viewType = 'cartanaView';

    constructor(private readonly extensionUri: vscode.Uri) {}

    resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, _token: vscode.CancellationToken) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this.extensionUri]
        };

        webviewView.webview.html = this.getHtmlForWebview(webviewView.webview);
    }

    getHtmlForWebview(webview: vscode.Webview): string {
        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Cartana</title>
            </head>
            <body>
                <h1>Welcome to Cartana!</h1>
            </body>
            </html>
        `;
    }
}