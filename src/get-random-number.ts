import rng from 'random-number-csprng';
export function getRandomNumber(range: { min: number, max: number }) {
    return rng(range.min, range.max);
}