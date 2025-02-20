const assert = require('assert');
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

suite('Webview Test Suite', () => {
    let document;

    suiteSetup(() => {
        const html = fs.readFileSync(path.resolve(__dirname, 'webtest.html'), 'utf8');
        const dom = new JSDOM(html);
        document = dom.window.document;
    });

    test('Sample test - Check if title is correct', () => {
        const title = document.querySelector('title').textContent;
        assert.strictEqual(title, 'Expected Title');
    });

    test('Sample test - Check if button exists', () => {
        const button = document.querySelector('button');
        assert.ok(button, 'Button should exist');
    });

    test('Sample test - Check button text', () => {
        const button = document.querySelector('button');
        assert.strictEqual(button.textContent, 'Click Me');
    });
});