const vscode = require('vscode');

class CartanaDataProvider {
    constructor() {
        // Event emitter to notify when the tree data changes
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }

    // Method to refresh the tree view
    refresh() {
        this._onDidChangeTreeData.fire();
    }

    // Provide tree item for each element in the tree
    getTreeItem(element) {
        return element;
    }

    // Provide children for the given element
    getChildren(element) {
        console.log("Fetching children for element:", element);

        if (element) {
            // In this case, we return an empty array for elements that are leaf nodes
            return Promise.resolve([]);
        } else {
            // Return root items. These items will appear in the Explorer view.
            return Promise.resolve([
                new vscode.TreeItem('Icon', vscode.TreeItemCollapsibleState.None),
                new vscode.TreeItem('Text', vscode.TreeItemCollapsibleState.None),
                new vscode.TreeItem('Projects', vscode.TreeItemCollapsibleState.Collapsed)
            ]);
        }
    }
}

module.exports = CartanaDataProvider;
