# Angular Unit Testing

## Contents

- [Overview](#overview)
- [Describe Blocks](#describe-blocks)
- [Nested Describe Blocks](#nested-describe-blocks)
- [Test Bed](#testbed)
- [Examples](#examples)

## Overview

This guide covers unit testing with the Angular framework. Since Angular is used with Typescript, then the [Typesciprt Unit Testing Style Guide](../typescript/unit-testing.md) will apply to Angular unit testing as well.

## Describe Blocks

### System Types

- Component
- ComponentTemplate
- Service
- Module
- Selectors
- Reducer
- Effects

## Nested Describe Blocks

### Sub System Types

- Method
- Property
- Output
- Input

## TestBed

Only use Angular's TestBed for unit testing component templates. For anything else, just directly instantiate or invoke the system under test.

## Examples

### Component

```ts
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from '../home.component';

describe('ComponentTemplate: Home', () => {
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the initial template', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
```
