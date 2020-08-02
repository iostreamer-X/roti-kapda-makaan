import { getRandomNumber } from "./get-random-number";
import { getRandomAdjective } from "./word-store/hinglish-adjectives";
import { getRandomNoun } from "./word-store/hinglish-nouns";

export async function generate() {
    const [randomNumberPrefix, firstRandomAdjective, firstRandomNoun, secondRandomAdjective, secondRandomNoun] = await Promise.all([
        getRandomNumber({ min: 1, max: 32 }),
        getRandomAdjective(),
        getRandomNoun(),
        getRandomAdjective(),
        getRandomNoun(),
    ]);
    return `${randomNumberPrefix}-${firstRandomAdjective}-${firstRandomNoun}-${secondRandomAdjective}-${secondRandomNoun}`;
}