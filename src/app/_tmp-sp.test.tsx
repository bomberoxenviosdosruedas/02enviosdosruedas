import { describe, it, expect } from 'vitest';
import * as motionModule from 'motion/react';

describe('Diagnóstico resolución en vitest', () => {
  it('inspecciona motion', () => {
    const m = (motionModule as Record<string, unknown>).motion as Record<string, unknown>;
    // eslint-disable-next-line no-console
    console.log('typeof motion:', typeof m);
    // eslint-disable-next-line no-console
    console.log('has article:', 'article' in m, 'has div:', 'div' in m, 'has section:', 'section' in m);
    expect(true).toBe(true);
  });
});