# Actions & Built-in Triggers


| Attribute     | Purpose                     | Element Types        | Behavior                   | Status |
|---------------|-----------------------------|------------------------|----------------------------|--------|
| `action`      | Run predefined action       | `<button>`, `<form>`   | Matches backend action     | ✅ Core |
| `on`          | Event/action combo          | Any                   | Sugar for `click+action`   | Optional |

```html
<button click="logout" />
<form submit="SaveUser" action="SendEmail" />
```