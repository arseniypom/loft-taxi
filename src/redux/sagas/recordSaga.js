import { runSaga } from "redux-saga";

export const recordSaga = async (saga, initialAction = null) => {
    const dispatched = [];

    await runSaga(
        {
            dispatch: (action) => dispatched.push(action),
        },
        saga,
        initialAction
    ).done;

    return dispatched;
};
