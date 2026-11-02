import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HomePage from '../src/app/page';

try {
  const html = renderToStaticMarkup(React.createElement(HomePage));
  console.log('SUCCESS! Rendered characters:', html.length);
  console.log('Snippet:', html.slice(0, 300));
} catch (err) {
  console.error('Error during renderToStaticMarkup:', err);
}
