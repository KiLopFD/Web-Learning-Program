import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { AllRoutesPages } from './services/routes';
import { Suspense } from 'react';
import { ErrorFallBack } from './components';



function App() {


  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
      >
        <Suspense>
          <AllRoutesPages />
        </Suspense>
      </ErrorBoundary>

    </>
  );
}

export default App;
