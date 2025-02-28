const vscode = require('vscode');

class CartanaDataProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
    }

    refresh() {
        this._onDidChangeTreeData.fire();
    }

    getTreeItem(element) {
        return element;
    }

    getChildren(element) {
        if (element) {
            return Promise.resolve([]);
        } else {
            return Promise.resolve([
                new vscode.TreeItem('Icon', vscode.TreeItemCollapsibleState.None),
                new vscode.TreeItem('Text', vscode.TreeItemCollapsibleState.None)
            ]);
        }
    }
}

module.exports = CartanaDataProvider;
