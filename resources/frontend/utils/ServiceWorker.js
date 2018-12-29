/**
 * Register the service worker file.
 */
export function _register(serviceWorkerFile) {
    if ('serviceWorker' in navigator) {
        if (serviceWorkerFile) {
            navigator.serviceWorker
                .register(`${serviceWorkerFile}`)
                .then(() => console.log('Service worker registered.'))
                .catch(error => console.error(error));
        }
    }
}
