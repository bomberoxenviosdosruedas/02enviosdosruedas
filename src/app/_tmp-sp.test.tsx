import { describe, it, expect } from 'vitest';
import { motion } from 'motion/react';

describe('Diagnóstico motion en runtime de vitest', () => {
  it('inspecciona el objeto motion', () => {
    const keys = ['article', 'div', 'section', 'span', 'p', 'h3', 'button', 'a'];
    for (const k of keys) {
      // eslint-disable-next-line no-console
      console.log(`motion.${k} =`, typeof (motion as Record<string, unknown>)[k]);
    }
    expect(typeof motion).toBe('object');
  });
});