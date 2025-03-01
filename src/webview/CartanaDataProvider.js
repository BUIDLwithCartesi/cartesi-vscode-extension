import * as vscode from 'vscode';

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
            return Promise.resolve([]);
        } else {
            return Promise.resolve([
                this.createTreeItem('Icon', vscode.TreeItemCollapsibleState.None, 'icon-item'),
                this.createTreeItem('Text', vscode.TreeItemCollapsibleState.None, 'text-item'),
                this.createTreeItem('Projects', vscode.TreeItemCollapsibleState.Collapsed, 'projects-item')
            ]);
        }
    }

    // Helper function to create tree items
    createTreeItem(label, collapsibleState, contextValue) {
        const item = new vscode.TreeItem(label, collapsibleState);
        item.tooltip = `Tooltip for ${label}`;
        item.contextValue = contextValue;
        return item;
    }
}

export default CartanaDataProvider;
