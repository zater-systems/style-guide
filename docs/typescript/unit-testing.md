# Typescript Unit Testing

## Contents

- [Overview](#overview)
- [Describe Blocks](#describe-blocks)
- [Nested Describe Blocks](#nested-describe-blocks)
- [It Blocks](#it-blocks)

## Overview

This guide covers unit testing in general using the Typescript progrmaming language. It can be applied to all kinds of projects using Typescript, including client, server, desktop or mobile.

## Describe Blocks

Top level descibe blocks feature a short, semantic description that informs the reader what system is under test. 

> **DO:** Use a consistent approach to writing describe blocks.

> **WHY:** Using a consistent approach to writing describe blocks allows for the type of system and it's semantic name to be much more quickly identified by the reader.

```ts
describe('{SystemType}: ${SystemName}', () => {
  // test...
});
```

- SystemType: The type of the system under test.
- SystemName: The semantic name of the system under test. Make sure not to repeat the SystemType if is normally included in the SystemName.

See framework or platform specific guides for usable system types.

## Nested Describe Blocks

When testing simple systems, it is normally not necessary to use nested describe blocks. But more complex systems may require a deeper organization of describe blocks.

> **DO:** Use a consistent approach to writing nested describe blocks.

> **WHY:** Using a consistent approach to writing nested describe blocks allows for a sub system and it's nature to be much more quickly identified by the reader.

```ts
describe('{SystemType}: ${SystemName}', () => {
  describe('{SubSystemType}: ${SubSystemName}', () => {
    // test...
  });
});
```
