import * as vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    // Register the data provider for the cartanaViewSidebar view
    const cartanaViewProvider = new CartanaViewProvider();
    vscode.window.registerTreeDataProvider('cartanaViewSidebar', cartanaViewProvider);

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

class CartanaViewProvider {
    getTreeItem(element) {
        return element;
    }

    getChildren(element) {
        // Return an empty array to indicate that the view is empty
        return [];
    }
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}