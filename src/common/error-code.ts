//write  the error code with the error message
export const ERROR_CODE = {
    BAD_REQUEST: {
        code: 400,
        message: 'Bad Request',
    },
    UNAUTHORIZED: {
        code: 401,
        message: 'Unauthorized',
    },
    FORBIDDEN: {
        code: 403,
        message: 'Forbidden',
    },
    NOT_FOUND: {

        code: 404,
        message: 'Not Found',
    },
    METHOD_NOT_ALLOWED: {
        code: 405,
        message: 'Method Not Allowed',
    },
    NOT_ACCEPTABLE: {
        code: 406,
        message: 'Not Acceptable',
    },
    REQUEST_TIMEOUT: {
        code: 408,
        message: 'Request Timeout',
    },
    CONFLICT: {
        code: 409,
        message: 'Conflict',
    },
    GONE: {
        code: 410,
        message: 'Gone',
    },
    LENGTH_REQUIRED: {
        code: 411,
        message: 'Length Required',
    },
    PRECONDITION_FAILED: {
        code: 412,
        message: 'Precondition Failed',
    },
    PAYLOAD_TOO_LARGE: {
        code: 413,
        message: 'Payload Too Large',
    },
    URI_TOO_LONG: {
        code: 414,
        message: 'URI Too Long',
    },
    UNSUPPORTED_MEDIA_TYPE: {
        code: 415,
        message: 'Unsupported Media Type',
    },
    RANGE_NOT_SATISFIABLE: {
        code: 416,
        message: 'Range Not Satisfiable',
    },
    EXPECTATION_FAILED: {
        code: 417,
        message: 'Expectation Failed',
    },
    IM_A_TEAPOT: {
        code: 418,
        message: 'I\'m a teapot',
    },
    MISDIRECTED_REQUEST: {
        code: 421,
        message: 'Misdirected Request',
    },
    UNPROCESSABLE_ENTITY: {
        code: 422,
        message: 'Unprocessable Entity',
    },
    LOCKED: {
        code: 423,
        message: 'Locked',
    },
    FAILED_DEPENDENCY: {
        code: 424,
        message: 'Failed Dependency',
    },
    UNORDERED_COLLECTION: {
        code: 425,
        message: 'Unordered Collection',
    },

    UPGRADE_REQUIRED: {
        code: 426,
        message: 'Upgrade Required',
    },
    PRECONDITION_REQUIRED: {
        code: 428,
        message: 'Precondition Required',
    },
    TOO_MANY_REQUESTS: {
        code: 429,
        message: 'Too Many Requests',
    },
    REQUEST_HEADER_FIELDS_TOO_LARGE: {
        code: 431,
        message: 'Request Header Fields Too Large',
    },
    UNAVAILABLE_FOR_LEGAL_REASONS: {
        code: 451,
        message: 'Unavailable For Legal Reasons',
    },
    INTERNAL_SERVER_ERROR: {
        code: 500,
        message: 'Internal Server Error',
    },
    NOT_IMPLEMENTED: {
        code: 501,
        message: 'Not Implemented',
    },
    BAD_GATEWAY: {
        code: 502,
        message: 'Bad Gateway',  
    },
    SERVICE_UNAVAILABLE: {
        code: 503,
        message: 'Service Unavailable',
    },
    GATEWAY_TIMEOUT: {
        code: 504,
        message: 'Gateway Timeout',
    },
    HTTP_VERSION_NOT_SUPPORTED: {
        code: 505,
        message: 'HTTP Version Not Supported',
    },
    VARIANT_ALSO_NEGOTIATES: {
        code: 506,
        message: 'Variant Also Negotiates',
    },
    INSUFFICIENT_STORAGE: {
        code: 507,
        message: 'Insufficient Storage',
    },
    LOOP_DETECTED: {
        code: 508,
        message: 'Loop Detected',
    },
    BANDWIDTH_LIMIT_EXCEEDED: {
        code: 509,
        message: 'Bandwidth Limit Exceeded',
    },
    NOT_EXTENDED: {
        code: 510,
        message: 'Not Extended',
    },
    NETWORK_AUTHENTICATION_REQUIRED: {
        code: 511,
        message: 'Network Authentication Required',
    },
};