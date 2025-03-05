// import { lazy, Suspense } from "react";

// @ts-expect-error Typescript sucks sometimes
import "./App.css";
import Test from "./components/Test";

// const VendorAddresses = lazy(async () =>
//   // @ts-expect-error Typescript sucks sometimes
//   import("parts/VendorAddresses").catch(() => ({
//     default: ({
//       onLoadingError,
//     }: {
//       onLoadingError: (error: Error) => void;
//     }) => {
//       console.log("Service Orders error");
//       onLoadingError(new Error("Unable to load Vendor Addresses"));
//       return <h5>Vendor Addresses Module could not load at this time.</h5>;
//     },
//   }))
// );

function App() {
  function errorHandler(e: Error) {
    console.error(e.message);
    // Your app is saved from bowing up!
    // Do whatever you want here...
  }

  return (
    <>
      <Test />
      {/* <div>
        <Suspense fallback="loading...">
          <VendorAddresses onLoadingError={errorHandler} />
        </Suspense>
      </div> */}
    </>
  );
}

export default App;
