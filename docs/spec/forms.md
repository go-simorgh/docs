# Form & Model Attributes

| Attribute                  | Purpose                                      | Where             | Notes                             | Status |
|----------------------------|----------------------------------------------|--------------------|------------------------------------|--------|
| `db`                      | Backend DB name                              | `<form>`           | Admin-defined                      | ✅ Core |
| `table`                   | Table/collection name                        | `<form>`           | Admin-defined                      | ✅ Core |
| `row`                     | Row ID to update (optional for edit mode)    | `<form>`           | Optional                           | ✅ Core |
| `fields.NAME.*`           | Field meta definition                        | `<form>`           | All field metadata inline          | ✅ Core |

```html
<form
  db="app"
  table="users"
  fields.name.type="text"
  fields.name.label="نام"
  fields.phone.type="tel"
/>
```
