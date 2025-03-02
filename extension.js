import * as vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    // Register the command to show the webview
    let disposable = vscode.commands.registerCommand('cartana.showWebview', () => {
        showCartanaWebview(context);
    });

    context.subscriptions.push(disposable);

    // Automatically show the webview when the icon is clicked
    vscode.commands.executeCommand('cartana.showWebview');
}

/**
 * Function to create and display the webview
 */
function showCartanaWebview(context) {
    const panel = vscode.window.createWebviewPanel(
        'cartanaWelcome', 
        'Welcome to Cartana',
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    panel.webview.html = getWebviewContent();
}

/**
 * HTML content for the webview
 */
function getWebviewContent() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Cartana</title>
        <style>
            body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
            h1 { color: #007acc; }
            .button { display: block; margin: 10px auto; padding: 10px 20px; font-size: 16px; color: white; background-color: #007acc; border: none; border-radius: 5px; text-decoration: none; }
        </style>
    </head>
    <body>
        <h1>Welcome to Cartana</h1>
        <p>Cartana helps streamline Cartesi Rollup development within VS Code.</p>
        <a href="command:cartana.create" class="button">Create Project</a>
        <a href="command:vscode.openFolder" class="button">Open Project</a>
        <a href="https://github.com/Cartana-Studio/Cartana-vs-code" class="button">Documentation</a>
    </body>
    </html>`;
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}
