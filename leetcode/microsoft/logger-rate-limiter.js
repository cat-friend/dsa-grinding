/*
Logger class
each instance of logger class makes an object = {
    this.messages = {
        "unique message": [timestamp, timestamp, timestamp]
    }
}

valid timestamps are pushed into the array of timestamps

so the shouldPrintMessage method will:
1) key into the this.messages and see if the message is there
2) if message is there, check the last timestamp (this.messages["message"][this.messages["message"].length - 1])
2b) if incoming timestamp - last timestamp >= 10, push the last timestamp AND THEN
return true; ELSE return false
2c) if incoming timestamp isn't there, make a new property; key: message, value is [timestamp] --> return true

*/


class Logger {
    constructor() {
        this.messages = {};
    }
};

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
    if (this.messages.hasOwnProperty(message)) {
        if (timestamp - this.messages[message][this.messages[message].length - 1] >= 10) {
            this.messages[message].push(timestamp);
            return true;
        }
        else return false;
    }
    else {
        this.messages[message] = [timestamp];
        return true;
    }
};

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
