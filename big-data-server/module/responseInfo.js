/**
 * Created by MonTage_fz on 2019/7/19
 */

class BaseInfo {
    constructor(data, message) {
        if (typeof data === 'string') {
            this.message = data;
            data = null;
            message = null;
        }
        if (data) {
            this.data = data;
        }
        if (message) {
            this.message = message;
        }
        
    }
}

class SuccessInfo extends BaseInfo {
    constructor(data, message) {
        super(data, message);
        this.status = 200;
    }
}

class ErrorInfo extends BaseInfo {
    constructor(data, message) {
        super(data, message);
        this.status = 404;
    }
}

module.exports = {
    SuccessInfo,
    ErrorInfo
};
