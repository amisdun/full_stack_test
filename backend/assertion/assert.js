export const assert = (result, errorMessage) => {
	if (result === false || !result || result == null) {
		throw new Error(errorMessage);
	}
	if (result instanceof Object && !Array.isArray(result) && result != null) {
		if (!Object.keys(result)?.length) throw new Error(errorMessage);
	}
	if (Array.isArray(result)) {
		if (!result?.length) throw new Error(errorMessage);
	}
};
