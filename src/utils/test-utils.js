import React from "react";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { render as rtlRender, renderHook } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../redux/saga/saga";
import userEvent from "@testing-library/user-event";
import reducer, { initState } from "../redux/slices";
import configureMockStore from "redux-mock-store";

const sagaMiddleware = createSagaMiddleware();

function customRender(
  ui,
  {
    store = configureStore({
      reducer,
      middleware: [sagaMiddleware],
    }),
    ...renderOptions
  } = {}
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    sagaMiddleware.run(rootSaga);
    return (
      <ThemeProvider theme={Theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export function setup(jsx) {
  return {
    user: userEvent.setup(),
    ...customRender(jsx),
  };
}

const routerPropertiesMapper = (props) => {
  return {
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
    push: props.push,
    events: props.events,
  };
};

// re-export everything
export * from "@testing-library/react";

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

const mockedStore = configureMockStore();

export const renderReduxHook = (hook, mockedState = initState) =>
  renderHook(hook, {
    wrapper: (props) => (
      <Provider store={mockedStore(mockedState)} {...props} />
    ),
  });

// override render method
export { customRender as render, wait, renderHook };
