# PR Review - CSV and JSON data format converter service (by Ananya)

## Reviewer: Raj Kapoor
---

**Overall:** Good foundation but critical bugs need fixing before merge.

### `formatConverter.js`

> **Bug #1:** CSV parser does not handle quoted commas so it splits 'Smith, Jr.' into two columns
> This is the higher priority fix. Check the logic carefully and compare against the design doc.

### `schemaMapper.js`

> **Bug #2:** JSON-to-CSV flattening loses nested objects such as {address:{city:'NYC'}} becoming empty column
> This is more subtle but will cause issues in production. Make sure to add a test case for this.

---

**Ananya**
> Acknowledged. I have documented the issues for whoever picks this up.
