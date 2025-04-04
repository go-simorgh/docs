# Conditionals & Loops

| Attribute     | Purpose                               | Element Types     | Behavior                   | Status |
|---------------|---------------------------------------|--------------------|----------------------------|--------|
| `visible`     | Conditional visibility                | Any                | Go render logic + TS       | ✅ Core |
| `if`          | Conditional rendering                 | Any                | Go render-time eval        | ✅ Core |
| `for`         | Loop rendering                        | Any container      | Repeats with scoped var    | ✅ Core |

```html
<div for="product in products">
  <p text="product.name" />
</div>
```
