import React from 'react';
import { ErrorBoundary as ErrorComponent } from 'react-error-boundary';
import { useHistory } from 'react-router';

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
  const history = useHistory();
  console.log(`🚀 ~ file: index.tsx ~ line 25 ~ history`, history);
  const handleReset = () => {
    // history.push(ROUTING_CONFIG.HOME);
  };
  return (
    <ErrorComponent FallbackComponent={ErrorFallback} onReset={handleReset}>
      {children}
    </ErrorComponent>
  );
};
