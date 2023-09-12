import { ErrorBoundary } from 'react-error-boundary';
import './App.css';
import { AllRoutesPages } from './services/routes';
import { Suspense } from 'react';
import { ErrorFallBack } from './components';



function App() {
  // document.addEventListener('contextmenu', event => event.preventDefault());

  // document.onkeydown = function (e) {

  //     // disable F12 key
  //     if(e.keyCode == 123) {
  //         return false;
  //     }

  //     // disable I key
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
  //         return false;
  //     }

  //     // disable J key
  //     if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
  //         return false;
  //     }

  //     // disable U key
  //     if(e.ctrlKey && e.keyCode == 85) {
  //         return false;
  //     }
  // }
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallBack}
      >
        <Suspense fallback={<>Loading...</>}>
          <AllRoutesPages />
        </Suspense>
      </ErrorBoundary>

    </>
  );
}

export default App;
