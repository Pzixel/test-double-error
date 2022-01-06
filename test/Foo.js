const { expect } = require('chai');

const Foo = artifacts.require('Foo');

describe('Test', async () => {
    it('Test', async () => {
        console.log("Hello from JS");
        const foo = await Foo.new();
        await foo.test();
    });
});
