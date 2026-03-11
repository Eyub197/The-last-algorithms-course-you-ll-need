function sum(n: number): number {
	if (n === 1) return 1;

	console.log(`Staring value ${n}`);
	const temp = n + sum(n - 1);
	console.log(`sum(${n}) is returning ${temp}`);

	return temp;
}

console.log(sum(5));
