import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// funcion de saneamiento lo que hace es despues de cada testeo limpiar 
afterEach(() => {
  cleanup();
});