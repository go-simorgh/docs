# Data Binding

## **Data Binding Attributes**

| Attribute     | Purpose                                 | Element Types         | Hydration Behavior               | Status |
|---------------|-----------------------------------------|------------------------|----------------------------------|--------|
| `text`        | Inject text from a variable             | Any                   | One-way bind (SSR)              | ✅ Core |
| `html`        | Inject HTML string                      | Any                   | One-way bind (SSR)              | ✅ Core |
| `value`       | Bind value (input)                      | `<input>`, `<textarea>` | Two-way (SSR + TS update)       | ✅ Core |
| `bind`        | Two-way bind shorthand                  | `<input>`, `<select>` | Full two-way TS binding         | Optional |
