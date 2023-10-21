import * as assert from 'node:assert';

import * as fc from 'fast-check';

describe('test', function() {
  it('value is 1, 2 or 3', function() {
    const nums = fc.constantFrom(1,2,3)

    fc.assert(
      fc.property(nums, (num) => {
        return num > 0 && num < 4;
      })
    );
  });
  it('value has id and age', function() {
    const record = fc.record({
      id: fc.uuidV(4),
      age: fc.nat(100),
    });

    fc.assert(
      fc.property(record, (obj: { id: string, age: number }) => {
        assert.strictEqual(typeof obj, "object");
        assert.strictEqual(typeof obj.id, "string");
        assert.ok(obj.age >= 0 && obj.age <= 100);
      })
    )
  });
});
