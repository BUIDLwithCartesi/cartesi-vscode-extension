import * as vscode from 'vscode';

export default class CartanaViewProvider {
    static viewTypeSidebar = 'cartanaViewSidebar';

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
            localResourceRoots: [vscode.Uri.joinPath(this.extensionUri, 'media')]
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
                    font-family: Arial, sans-serif;
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
