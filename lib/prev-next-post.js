export function prevNextPost(allSlugs, currentSlug) {
	const numberOfPosts = allSlugs.length

	const index = allSlugs.findIndex(
		({ slug }) => slug === currentSlug,
	)

	const prevPost =
		index + 1 === numberOfPosts
	? { title: '', slug: '' }
	: allSlugs[index + 1]

	const nextpost =
		index === 0
	? { title: '', slug: '' }
	: allSlugs[index - 1]

	return [prevPost, nextpost]
}

