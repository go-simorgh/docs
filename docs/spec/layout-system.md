# Navigation & Layout


| Attribute       | Purpose                       | Where                | Notes                         | Status |
|------------------|-------------------------------|----------------------|-------------------------------|--------|
| `href`           | Navigate to page              | `<a>`                | Uses `mode=` to pick strategy | ✅ Core |
| `mode`           | Navigation mode (client/server) | `<a>`                | SSR or SPA routing            | ✅ Core |
| `// url=""`      | Declare route for page        | Top of `.sim`        | Parsed as metadata            | ✅ Core |
| `// layout=""`   | Use named layout              | Top of `.sim`        | Layout component injected     | ✅ Core |
