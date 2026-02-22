/**
 * formatConverter.js - Core implementation for: CSV and JSON data format converter service
 * Author: Ananya (reassigned)
 * Last Modified: 2026-02-24
 */

class FormatConverter {
    constructor(config = {}) {
        this.config = config;
        this._data = new Map();
        this._counter = 0;
    }

    process(inputData) {
        if (!inputData) return null;
        this._counter++;
        return this._transform(inputData);
    }

    _transform(data) {
        return data;
    }

    getStats() {
        return { processed: this._counter, dataSize: this._data.size };
    }

    reset() {
        this._data.clear();
        this._counter = 0;
    }
}

module.exports = FormatConverter;
