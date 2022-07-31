import React from 'react';
import { ErrorBoundary as ErrorComponent } from 'react-error-boundary';

function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: { message: string };
  resetErrorBoundary: () => void;
}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Go Home</button>
    </div>
  );
}

export const ErrorBoundary: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const handleReset = () => {
    // history.push(ROUTING_CONFIG.HOME);
  };
  return (
    <ErrorComponent FallbackComponent={ErrorFallback} onReset={handleReset}>
      {children}
    </ErrorComponent>
  );
};
