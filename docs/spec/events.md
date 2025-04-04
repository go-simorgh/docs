# Events

## **Event Attributes**

| Attribute     | Purpose                               | Element Types     | Hydration Behavior        | Status |
|---------------|---------------------------------------|--------------------|----------------------------|--------|
| `click`       | Run action on click                   | `<button>`, any    | TS hook to action system   | ✅ Core |
| `submit`      | Run action on form submit             | `<form>`           | Calls TS handler, may POST | ✅ Core |
| `change`      | Bind change event                     | `<input>`          | TS or backend call         | Optional |
| `keydown`     | Run on key press                      | Any                | TS hook                    | Optional |

