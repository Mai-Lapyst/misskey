<template>
<MkSpacer :content-max="800">
	<XNotes :pagination="pagination" @before="before()" @after="after()"/>
</MkSpacer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Progress from '@/scripts/loading';
import XNotes from '@/components/notes.vue';
import * as symbols from '@/symbols';

export default defineComponent({
	components: {
		XNotes
	},

	data() {
		return {
			[symbols.PAGE_INFO]: {
				title: this.$ts.mentions,
				icon: 'fas fa-at',
				bg: 'var(--bg)',
			},
			pagination: {
				endpoint: 'notes/mentions',
				limit: 10,
			},
		};
	},

	methods: {
		before() {
			Progress.start();
		},

		after() {
			Progress.done();
		}
	}
});
</script>
