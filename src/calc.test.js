import { sum } from "./calc";

test (' Adding 5 + 5 should give me 10', ( ) => {
    expect(sum(5, 5)).toBe(10);
})