<template>
<FormGroup class="_debobigegoItem">
	<template #label><slot></slot></template>
	<div class="drooglns _debobigegoItem" :class="{ tall }">
		<div class="input _debobigegoPanel">
			<textarea v-model="v"
				class="_monospace"
				readonly
				:spellcheck="false"
			></textarea>
		</div>
	</div>
	<template #caption><slot name="desc"></slot></template>
</FormGroup>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from 'vue';
import * as JSON5 from 'json5';
import './debobigego.scss';
import FormGroup from './group.vue';

export default defineComponent({
	components: {
		FormGroup,
	},
	props: {
		value: {
			required: false
		},
		tall: {
			type: Boolean,
			required: false,
			default: false
		},
		pre: {
			type: Boolean,
			required: false,
			default: false
		},
		manualSave: {
			type: Boolean,
			required: false,
			default: false
		},
	},
	setup(props, context) {
		const { value } = toRefs(props);
		const v = ref('');

		watch(() => value, newValue => {
			v.value = JSON5.stringify(newValue.value, null, '\t');
		}, {
			immediate: true
		});

		return {
			v,
		};
	}
});
</script>

<style lang="scss" scoped>
.drooglns {
	position: relative;

	> .input {
		position: relative;
	
		> textarea {
			display: block;
			width: 100%;
			min-width: 100%;
			max-width: 100%;
			min-height: 130px;
			margin: 0;
			padding: 16px var(--debobigegoContentHMargin);
			box-sizing: border-box;
			font: inherit;
			font-weight: normal;
			font-size: 1em;
			background: transparent;
			border: none;
			border-radius: 0;
			outline: none;
			box-shadow: none;
			color: var(--fg);
			tab-size: 2;
			white-space: pre;
		}
	}

	&.tall {
		> .input {
			> textarea {
				min-height: 200px;
			}
		}
	}
}
</style>
