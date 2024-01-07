export default () => {
    return import.meta.env.DEV
        ? "http://localhost:3000/"
        : window.location.href;
};
