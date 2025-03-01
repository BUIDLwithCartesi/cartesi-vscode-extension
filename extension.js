import * as vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    // Register Sidebar Webview
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('cartanaViewSidebar', {
            resolveWebviewView(webviewView, _context, _token) {
                webviewView.webview.options = {
                    enableScripts: true,
                    localResourceRoots: [vscode.Uri.joinPath(context.extensionUri, 'media')]
                };
            }
        })
    );
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}