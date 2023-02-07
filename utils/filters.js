const { DateTime } = require("luxon");

const LOCALE = "en-GB";

module.exports = {
	ISODate: (dateObj) =>
		DateTime.fromJSDate(dateObj, { zone: "utc" }).toISO({
			includeOffset: false,
			suppressMilliseconds: true,
		}),
	readableDate: (dateObj, format, zone) =>
		// Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
		DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
			format || "dd LLLL yyyy"
		),
	shortDate: (dateObj) =>
		DateTime.fromJSDate(dateObj, { zone: "utc" })
			.setLocale(LOCALE)
			.toLocaleString(DateTime.DATE_MED),
	htmlDateString: (dateObj) =>
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd"),
	// Get the first `n` elements of a collection.
	head: (array, n) => {
		if (!Array.isArray(array) || array.length === 0) {
			return [];
		}
		if (n < 0) {
			return array.slice(n);
		}

		return array.slice(0, n);
	},
	// Return the smallest number argument
	min: (...numbers) => Math.min.apply(null, numbers),
	// Return all the tags used in a collection
	getAllTags: (collection) => {
		const tagSet = new Set();
		for (const item of collection) {
			(item.data.tags || []).forEach((tag) => tagSet.add(tag));
		}
		return Array.from(tagSet);
	},
	filterTagList: (tags) =>
		(tags || []).filter(
			(tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
		),
};
