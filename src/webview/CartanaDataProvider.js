const vscode = require('vscode');

class CartanaDataProvider {
    getTreeItem(element) {
        return element;
    }

    getChildren(element) {
        if (element) {
            return Promise.resolve([]);
        } else {
            return Promise.resolve([
                new vscode.TreeItem('Icon'),
                new vscode.TreeItem('Text')
            ]);
        }
    }
}

module.exports = CartanaDataProvider;