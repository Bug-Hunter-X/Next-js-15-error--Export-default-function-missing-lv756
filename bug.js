```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello world!</div>
  );
}
```
This code will throw an error in Next.js 15 if you forget to export the default function. Next.js 15 requires all pages to export a default function or component. 