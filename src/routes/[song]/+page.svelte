<script lang="ts">
	export let data;
</script>

<div class="flex justify-center gap-1">
	<div class="space-y-2">
		<p class="text-xl">{data.original.title} by {data.original.artist}</p>
		<p class="whitespace-pre-line">{data.original.lyrics}</p>
	</div>
	<div class="space-y-2">
		<p class="text-xl">{data.kidzBop.title} by {data.kidzBop.artist}</p>
		<p class="whitespace-pre-line">{data.kidzBop.lyrics}</p>
	</div>
</div>
