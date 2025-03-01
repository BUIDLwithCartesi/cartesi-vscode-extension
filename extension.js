import * as vscode from 'vscode';

/**
 * @param {vscode.ExtensionContext} context
 */
export function activate(context) {
    console.log('Cartana is now activated!');

    // Register the data provider for the cartanaViewSidebar view
    const cartanaViewProvider = new CartanaViewProvider();
    vscode.window.registerTreeDataProvider('cartanaViewSidebar', cartanaViewProvider);
}

class CartanaViewProvider {
    getTreeItem(element) {
        return element;
    }

    getChildren(element) {
\        return [];
    }
}

export function deactivate() {
    console.log('Cartana is now deactivated!');
}