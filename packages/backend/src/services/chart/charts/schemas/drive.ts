const logSchema = {
	/**
	 * 集計期間時点での、全ドライブファイル数
	 */
	totalCount: {
		type: 'number' as const,
		optional: false as const, nullable: false as const,
	},

	/**
	 * 集計期間時点での、全ドライブファイルの合計サイズ
	 */
	totalSize: {
		type: 'number' as const,
		optional: false as const, nullable: false as const,
	},

	/**
	 * 増加したドライブファイル数
	 */
	incCount: {
		type: 'number' as const,
		optional: false as const, nullable: false as const,
	},

	/**
	 * 増加したドライブ使用量
	 */
	incSize: {
		type: 'number' as const,
		optional: false as const, nullable: false as const,
	},

	/**
	 * 減少したドライブファイル数
	 */
	decCount: {
		type: 'number' as const,
		optional: false as const, nullable: false as const,
	},

	/**
	 * 減少したドライブ使用量
	 */
	decSize: {
		type: 'number' as const,
		optional: false as const, nullable: false as const,
	},
};

export const schema = {
	type: 'object' as const,
	optional: false as const, nullable: false as const,
	properties: {
		local: {
			type: 'object' as const,
			optional: false as const, nullable: false as const,
			properties: logSchema,
		},
		remote: {
			type: 'object' as const,
			optional: false as const, nullable: false as const,
			properties: logSchema,
		},
	},
};

export const name = 'drive';
