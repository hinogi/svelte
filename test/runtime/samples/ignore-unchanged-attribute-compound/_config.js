import counter from './counter.js';

export default {
	data: {
		x: 1,
		y: 2
	},

	html: `
		<p>1</p>
		<p class='-2-'></p>
	`,

	test(assert, component) {
		counter.count = 0;

		component.set({ x: 3 });
		assert.equal(counter.count, 0);

		component.set({ x: 4, y: 5 });
		assert.equal(counter.count, 1);

		component.set({ x: 5, y: 5 });
		assert.equal(counter.count, 1);
	}
};
