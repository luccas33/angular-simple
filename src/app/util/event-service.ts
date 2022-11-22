
class EventService {
    private callbacks: CallbackList[] = [];

    constructor() { }

    registerCallback(key: string, callback: Function) {
        if (!key || !callback) {
            return;
        }
        let keyCallbacks = this.getCallback(key);
        if (!keyCallbacks) {
            keyCallbacks = { key: key, callbacks: [] };
            this.callbacks.push(keyCallbacks);
        }
        keyCallbacks.callbacks.push(callback);
    }

    execCallback(key: string) {
        if (!key) {
            return;
        }
        let keyCallbacks = this.getCallback(key);
        if (!keyCallbacks) {
            return;
        }
        for (let func of keyCallbacks.callbacks) {
            try {
                func();
            }
            catch (e) { }
        }
    }

    private getCallback(key: string): CallbackList | undefined {
        if (!key) {
            return;
        }
        return this.callbacks.find(value => value.key === key);
    }
}

interface CallbackList {
    key: string;
    callbacks: Function[];
}

const eventService = new EventService();

export default eventService;
