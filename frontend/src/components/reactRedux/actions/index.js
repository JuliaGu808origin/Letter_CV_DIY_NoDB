export const previewLetterAction = letter => {
    return {
        type: "PREVIEW_LETTER",
        payload: letter
    };
};

export const cancelLetterAction = () => {
    return {
        type: "CANCEL_LETTER",
        payload: null
    };
};