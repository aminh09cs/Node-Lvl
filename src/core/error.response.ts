const StatusCode = {
  FORBIDDEN: 403,
  CONFLICT: 409,
} as const;

type StatusCodeType = (typeof StatusCode)[keyof typeof StatusCode];

const ReasonStatusCode = {
  FORBIDDEN: "Bad Request Error",
  CONFLICT: "Conflict Error",
} as const;

type ReasonStatusCodeType =
  (typeof ReasonStatusCode)[keyof typeof ReasonStatusCode];

class ErrorResponse extends Error {
  public status: StatusCodeType;

  constructor(message: string, statusCode: StatusCodeType) {
    super(message);
    this.message = message;
    this.status = statusCode;
  }
  toJSON() {
    return {
      message: this.message,
      status: this.status,
    };
  }
}

class ConflictRequestError extends ErrorResponse {
  constructor(
    message: string = ReasonStatusCode.CONFLICT,
    statusCode: StatusCodeType = StatusCode.CONFLICT
  ) {
    super(message, statusCode);
  }
}

class BadRequestError extends ErrorResponse {
  constructor(
    message: string = ReasonStatusCode.FORBIDDEN,
    statusCode: StatusCodeType = StatusCode.FORBIDDEN
  ) {
    super(message, statusCode);
  }
}

export { ConflictRequestError, BadRequestError };
