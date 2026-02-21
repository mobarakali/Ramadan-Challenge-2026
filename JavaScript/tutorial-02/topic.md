# JavaScript Tutorial 02 - JavaScript Output

Tutorial Link : https://www.youtube.com/watch?v=xTZUEtueu9s

## Topics Covered

### How to show data in JavaScript

### 4 Simple ways to print data in JavaScript

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Output</title>
  </head>
  <body>
        <h1 id="output"></h1>
  </body>
</html>
```

we can add JavaScript functionality using `<script>` tag

```javascript
    <script>
      document.write("JavaScript");
      console.log("JavaScript is a Programing Language.");
      window.alert("JavaScript Alert!");
      document.getElementById("output").innerHTML = "Client Side Language";
    </script>
```

Here is final file:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Output</title>
  </head>
  <body>
    <h1 id="output"></h1>
    <script>
      document.write("JavaScript");
      console.log("JavaScript is a Programing Language.");
      window.alert("JavaScript Alert!");
      document.getElementById("output").innerHTML = "Client Side Language";
    </script>
  </body>
</html>
```
