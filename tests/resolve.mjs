// Resolve the application's bundler-style relative imports for native Node tests.
export async function resolve(specifier, context, nextResolve) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) specifier += '.ts';
  return nextResolve(specifier, context);
}
