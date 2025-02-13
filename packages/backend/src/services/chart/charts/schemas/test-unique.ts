export const schema = {
	type: 'object' as const,
	optional: false as const, nullable: false as const,
	properties: {
		foo: {
			type: 'array' as const,
			optional: false as const, nullable: false as const,
			items: {
				type: 'string' as const,
				optional: false as const, nullable: false as const,
			},
		},
	},
};

export const name = 'testUnique';
