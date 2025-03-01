import * as vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    // Register the 'Create Project' command
    const createProjectCommand = vscode.commands.registerCommand('cartana.create', () => {
        vscode.window.showInformationMessage('Create Project command executed!');
    });
    context.subscriptions.push(createProjectCommand);
    
    // Register the 'Refresh' command
    const refreshCommand = vscode.commands.registerCommand('cartana.refresh', () => {
        vscode.window.showInformationMessage('Cartana Explorer refreshed!');
    });
    context.subscriptions.push(refreshCommand);
    
    // Register Sidebar Webview
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('cartanaViewSidebar', {
            resolveWebviewView(webviewView, _context, _token) {
                webviewView.webview.options = {
                    enableScripts: true,
                    localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
                };
                webviewView.webview.html = getHtmlForWebview(webviewView.webview);
            }
        })
    );

    // Register the 'Show Webview' command
    const showWebviewCommand = vscode.commands.registerCommand('cartana.showWebview', () => {
        const panel = vscode.window.createWebviewPanel(
            'cartanaWebview', // Identifies the type of the webview. Used internally
            'Cartana', // Title of the panel displayed to the user
            vscode.ViewColumn.One, // Editor column to show the new webview panel in
            {
                enableScripts: true,
                localResourceRoots: [vscode.Uri.joinPath(vscode.extensions.getExtension('CartanaStudio.cartana').extensionUri, 'media')]
            }
        );

        panel.webview.html = getHtmlForWebview(panel.webview);
    });
    context.subscriptions.push(showWebviewCommand);
}

function getHtmlForWebview(_webview) {
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

export function deactivate() {
    console.log('Cartana is now deactivated!');
}