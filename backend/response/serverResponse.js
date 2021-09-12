export const successResponse = (res, data, code = 200) => {
	return res.status(code).json({
		response: data ? data : "OK",
		success: true,
	});
};

export const errorResponse = (res, error, code = 500) => {
	return res.status(code).json({
		error: error?.message ? error?.message : error,
		success: false,
	});
};
