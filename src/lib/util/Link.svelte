<script>
	export let portableText;
</script>

<a href={portableText.mark.href} target={!portableText.mark.href.startsWith('/') ? '_blank' : ''}>
	{portableText.span.text}
</a>
