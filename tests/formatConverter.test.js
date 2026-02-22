const FormatConverter = require("../src/formatConverter.js");
const SchemaMapper = require("../src/schemaMapper.js");

describe("CSV and JSON data format converter service", () => {
    test("should process valid input", () => {
        const obj = new FormatConverter();
        expect(obj.process({ key: "val" })).not.toBeNull();
    });
    test("should handle null", () => {
        const obj = new FormatConverter();
        expect(obj.process(null)).toBeNull();
    });
    test("should track stats", () => {
        const obj = new FormatConverter();
        obj.process({ x: 1 });
        expect(obj.getStats().processed).toBe(1);
    });
    test("support should work", () => {
        const obj = new SchemaMapper();
        expect(obj.process({ data: "test" })).not.toBeNull();
    });
});
