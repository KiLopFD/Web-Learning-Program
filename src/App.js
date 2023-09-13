import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { AllRoutesPages } from './services/routes';
import { Suspense } from 'react';
import { ErrorFallBack, Loading, LoadingComponents } from './components';
import { useSelector } from 'react-redux';



function App() {
  document.addEventListener('contextmenu', event => event.preventDefault());

  document.onkeydown = function (e) {

      // disable F12 key
      if(e.keyCode == 123) {
          return false;
      }

      // disable I key
      if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
          return false;
      }

      // disable J key
      if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
          return false;
      }

      // disable U key
      if(e.ctrlKey && e.keyCode == 85) {
          return false;
      }
  }


  const isLoading = useSelector((state) => state.loadingState.isLoading)

  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
      >
        {isLoading && <Loading />}
        {/* <LoadingComponents /> */}

        <Suspense fallback={<Loading />}>
          <AllRoutesPages />
        </Suspense>
      </ErrorBoundary>

    </>
  );
}

export default App;
