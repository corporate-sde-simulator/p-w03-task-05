# PLATFORM-2881: Build CSV and JSON format conversion service

**Status:** In Progress · **Priority:** High
**Sprint:** Sprint 25 · **Story Points:** 5
**Reporter:** Raj Kapoor (Data Engineering Lead) · **Assignee:** You (Intern)
**Due:** End of sprint (Friday)
**Labels:** `backend`, `javascript`, `data`, `feature`
**Task Type:** Feature Ship

---

## Description

We need a data format converter that transforms between CSV and JSON. A working `SchemaMapper` exists for field mapping. Implement the conversion logic in `FormatConverter`.

## Acceptance Criteria

- [ ] `csvToJson()` parses CSV with proper header handling
- [ ] `csvToJson()` handles quoted fields containing commas
- [ ] `jsonToCsv()` flattens nested objects using dot notation
- [ ] `jsonToCsv()` escapes values containing commas or quotes
- [ ] Schema mapping applied during conversion
- [ ] All unit tests pass
