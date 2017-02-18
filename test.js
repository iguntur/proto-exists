import test from 'ava';
import fn from './';

class Foo {
	constructor() {
		this.bar = 'barBaz';
		this.barQuux = () => 'barQuux';
	}
	baz() {
		return this.bar;
	}
	get getter() {
		return 'getter';
	}
	set setter(input) {
		this.bar = input;
	}
}

test('should return a boolean `true` value', t => {
	t.true(fn(Foo, 'baz'));
	t.true(fn(new Foo(), 'baz'));
});

test('should return a boolean `false` value', t => {
	t.false(fn(Foo, 'quux'));
	t.false(fn(Foo, 'barQuux'));
	t.false(fn(Foo, 'bar'));
	t.false(fn(Foo, 'getter'));
	t.false(fn(Foo, 'setter'));
	t.false(fn(new Foo(), 'quux'));
	t.false(fn(new Foo(), 'bar'));
});

test('Throws an error if the name is empty string', t => {
	t.throws(() => fn(Foo));
	t.throws(() => fn(Foo, ''));
});
