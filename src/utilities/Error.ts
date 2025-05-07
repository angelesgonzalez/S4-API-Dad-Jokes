export class ApiError extends Error {
	type: string;
	status: number;
	time: string;

	constructor(message: string, type = "API_ERROR", status: number) {
		super(message);
		this.name = "Api Error";
		this.type = type;
		this.status = status;
		this.time = new Date().toISOString();
	}
}
