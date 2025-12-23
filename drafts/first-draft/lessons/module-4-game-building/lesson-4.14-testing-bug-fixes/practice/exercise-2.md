# Exercise 2 – Mini Test Runner & Assertions

## Objective
Create a simple test harness to run unit tests against pure logic functions (e.g., `createDeck`, `evaluateHand`).

## Requirements
- Define a global `tests` array of objects `{ name, fn }`
- Each test function runs assertions; throw errors on failure
- Implement `assertEqual(actual, expected, msg)` helper
- Runner iterates tests, counts passes/failures, outputs summary to page + console

## Steps
1. Create `test-runner.js` file
2. Add assertion helpers: `assert(condition, msg)`, `assertEqual(a,b,msg)`
3. Add tests for deck size (52), uniqueness, rank ordering checks
4. Add test for hand comparator (if available)
5. Render results in a `<div id="testOutput">`

## Example Skeleton
```js
const tests = [];
function assert(cond, msg){ if(!cond) throw new Error(msg); }
function assertEqual(a,b,msg){ if(a!==b) throw new Error(msg+` (expected ${b}, got ${a})`); }
function runTests(){
  const out = document.getElementById('testOutput');
  let pass=0, fail=0; out.innerHTML='';
  tests.forEach(t=>{
    try { t.fn(); pass++; out.innerHTML += `<div class='pass'>PASS: ${t.name}</div>`; }
    catch(e){ fail++; out.innerHTML += `<div class='fail'>FAIL: ${t.name} – ${e.message}</div>`; }
  });
  out.innerHTML += `<p><strong>${pass} passed, ${fail} failed</strong></p>`;
}
```

## Validation Checklist
- Running runner shows PASS lines for working tests
- Failing test shows meaningful error
- Summary count appears

## Stretch
Add elapsed time measurement and sort tests by duration.

Proceed to Exercise 3 when basic runner works.
