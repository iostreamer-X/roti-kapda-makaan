# A JS lib to generate unique combinations of hinglish words. 🌯 🥻 🏠
Website: [https://roti-kapda-makaan.dev/](https://roti-kapda-makaan.dev/)
![](https://roti-kapda-makaan.dev/img/rkm-logo.png)

# Why?
Imagine interacting with a company's help support and then receiving this robotic reference id: 
```js 
'9e93d8dd-22aa-4439-a008-f33f4c8b0c69'
``` 
Now imagine doing the same but getting this reference id: 
```js
'23-mast-chai-cool-coffee'
```
The latter is enough to slightly amuse you, and much much easier to tell the company representative on call.

And that's the whole idea behind it, share ids which humans understand. It's easy to quote and might put a smile on their faces as well.

# Installation
### Node
```
npm install roti-kapda-makaan
```
### Web
```
<script src="https://cdn.jsdelivr.net/npm/roti-kapda-makaan@1.0.2/dist/roti-kapda-makaan.js"></script>
```

# Usage
### Node
```ts
import { generate } from 'roti-kapda-makaan'

async function getHinglishId() {
    const id = await generate();
    return id;
}
```
### Web
```js
async function getHinglishId() {
    const id = await rotiKapdaMakaan.generate();
    return id;
}
```

# How does it work?
I searched the internet to get a big enough list of hinglish words, and then separated them based on the word being a noun or an adjective. There were some other filters involved as well, for example frequency of the words used in day to day life and length of the words.

Once this set was prepared, I handpicked 64 adjectives and 128 nouns. Now, why 64 and 128 exactly?

Each id is combination of words, prefixed by a number. Something like:
```js
number_prefix + random_adjective + random_noun + random_adjective + random_noun
```

The `number_prefix` can be from range 1-32, i.e. 2^`5`(32) different values of `number_prefix` are possible. In simple words, `number_prefix` represents 5 bits of information.

Coming to `random_adjective`, we only have 64 or 2^`6` adjectives. So it represents 6 bits of information.

And together they represent 11 bits, and 2^11 being 2048, that's the total number of unique combinations we can have:
```
number_prefix(5 bits) + random_adjective(6 bits) = 11 bits of information
```

And hence:
```
number_prefix(5 bits) + random_adjective(6 bits) + random_noun(7 bits) + random_adjective(6 bits) + random_noun(7 bits) = 32 bits of information
```

Which means there are 2^32(4,29,49,67,296) unique combinations of numbers, nouns and adjectives our function can generate!


