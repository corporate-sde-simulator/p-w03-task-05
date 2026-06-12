# Beginner Explanatory Guide: PLATFORM-2881: Build CSV and JSON format conversion service

> **Task Type**: Product Task  
> **Domain/Focus**: Data Format Conversion

---

## 1. The Goal (In-Depth Beginner Explanation)

### The Core Problem
In modern applications, data is often exchanged in various formats, with CSV (Comma-Separated Values) and JSON (JavaScript Object Notation) being two of the most common. CSV is widely used for tabular data, while JSON is favored for its ability to represent complex data structures, such as nested objects. The core problem this task addresses is the need for a service that can seamlessly convert data between these two formats. Currently, the application lacks this functionality, which can lead to inefficiencies and errors when handling data interchange between systems that expect different formats.

Without a proper conversion service, developers and users may face challenges such as data loss, incorrect data representation, or increased manual effort to transform data. For instance, if a user exports data in CSV format but needs it in JSON for a web application, they would have to manually convert it, which is not only time-consuming but also prone to mistakes. Implementing this conversion service is crucial for enhancing the application's usability and ensuring that data can be easily shared and processed across different platforms.

### Jargon Buster (Key Terms Explained)
* **CSV (Comma-Separated Values)**: A simple file format used to store tabular data, where each line represents a row and each value is separated by a comma. For example, a CSV file might look like this:
  ```
  Name, Age, City
  Alice, 30, New York
  Bob, 25, Los Angeles
  ```
* **JSON (JavaScript Object Notation)**: A lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON represents data as key-value pairs. For example:
  ```json
  {
      "Name": "Alice",
      "Age": 30,
      "City": "New York"
  }
  ```
* **Schema Mapping**: The process of defining how data fields in one format correspond to fields in another format. For example, mapping the "Name" field in JSON to the first column in a CSV file.
* **Flattening**: The process of converting nested structures into a simpler, one-dimensional format. For example, converting a JSON object with nested properties into a flat structure using dot notation.

### Expected Outcome
After implementing the conversion service, the system should be able to accurately convert CSV data into JSON format and vice versa. 

**Before**: Users manually convert data between CSV and JSON formats, leading to potential errors and inefficiencies.

**After**: Users can input CSV data and receive a correctly formatted JSON output, or input JSON data and receive a properly formatted CSV output, all handled automatically by the conversion service. This will streamline data handling and improve overall user experience.

---

## 2. Related Coding Concepts & Syntax (50% Theory, 50% Practice)

### Concept 1: Data Parsing
#### 📘 Theoretical Overview (50%)
* **Why it exists**: Data parsing is essential for interpreting and converting data from one format to another. Without parsing, the application would not be able to understand the structure of the incoming data, leading to errors or incorrect processing.
* **Key Mechanisms**: Parsing involves breaking down a string of data into its components. For CSV, this means identifying rows and columns based on commas and line breaks. For JSON, it involves recognizing key-value pairs and nested structures.

#### 💻 Syntax & Practical Examples (50%)
* **Language Syntax**:
  ```javascript
  // Example of parsing CSV data
  const csvData = "Name,Age,City\nAlice,30,New York\nBob,25,Los Angeles";
  const rows = csvData.split("\n"); // Split by line
  const headers = rows[0].split(","); // Split header by comma
  const data = rows.slice(1).map(row => {
      const values = row.split(","); // Split each row by comma
      return headers.reduce((obj, header, index) => {
          obj[header] = values[index]; // Map values to headers
          return obj;
      }, {});
  });
  console.log(data); // Output: [{ Name: 'Alice', Age: '30', City: 'New York' }, { Name: 'Bob', Age: '25', City: 'Los Angeles' }]
  ```
* **Real-World Application**:
  ```javascript
  // Function to convert CSV to JSON
  function csvToJson(csv) {
      const rows = csv.split("\n");
      const headers = rows[0].split(",");
      return rows.slice(1).map(row => {
          const values = row.split(",");
          return headers.reduce((obj, header, index) => {
              obj[header] = values[index];
              return obj;
          }, {});
      });
  }
  const jsonData = csvToJson(csvData);
  console.log(jsonData);
  ```

---

## 3. Step-by-Step Logic & Walkthrough

1. **Step 1: Locate and Analyze the Target File**
   * Navigate to the `p-w03-task-05` folder and open `formatConverter.js`.
   * Focus on the `FormatConverter` class, particularly the `_transform` method, which is where the conversion logic will be implemented.

2. **Step 2: Input Verification & Validation**
   * Before processing the input data, check if it is null or undefined. If it is, return null immediately to avoid errors.

3. **Step 3: Core Implementation / Modification**
   * Implement the `csvToJson()` method to parse CSV data. Use string manipulation methods to split the data into rows and columns, and map the values to their corresponding headers.
   * Implement the `jsonToCsv()` method to convert JSON data into CSV format. Flatten nested objects using dot notation and ensure that values containing commas or quotes are properly escaped.

4. **Step 4: Output Verification & Testing**
   * After implementing the conversion methods, run the existing test cases in `formatConverter.test.js` to ensure that all tests pass. Add new tests if necessary to cover edge cases.

---

## 4. Detailed Walkthrough of Test Cases

### Test Case 1: Standard / Success Case
* **Description**: This test checks if the `process` method can handle valid input data.
* **Inputs**:
  ```json
  { "key": "val" }
  ```
* **Step-by-Step Execution Trace**:
  1. The `process` method is called with the input `{ "key": "val" }`.
  2. The method checks if the input is null (it is not).
  3. The `_transform` method is invoked, which currently returns the input data unchanged.
  4. The final result `{ "key": "val" }` is returned.
* **Expected Output**: The output is not null, confirming that the input was processed successfully.

### Test Case 2: Edge Case / Validation Fail
* **Description**: This test checks how the `process` method handles null input.
* **Inputs**:
  ```json
  null
  ```
* **Step-by-Step Execution Trace**:
  1. The `process` method is called with `null` as the input.
  2. The method immediately checks if the input is null (it is).
  3. The method returns null without further processing.
* **Expected Output**: The output is null, indicating that the method correctly handles invalid input.