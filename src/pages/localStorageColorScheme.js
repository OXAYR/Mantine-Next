import {
    isMantineColorScheme,
    MantineColorScheme,
    MantineColorSchemeManager,
} from '@mantine/core';

/**
 * @typedef {Object} LocalStorageColorSchemeManagerOptions
 * @property {string} [key='mantine-color-scheme'] - Local storage key used to retrieve value with `localStorage.getItem(key)`
 */

/**
 * Creates a local storage color scheme manager.
 * @param {LocalStorageColorSchemeManagerOptions} [options={}] - Options for the local storage color scheme manager.
 * @returns {MantineColorSchemeManager} The local storage color scheme manager.
 */
export function localStorageColorSchemeManager({
    key = 'mantine-color-scheme',
} = {}) {
    let handleStorageEvent;

    return {
        /**
         * Retrieves the color scheme from local storage.
         * @param {MantineColorScheme} defaultValue - The default color scheme value.
         * @returns {MantineColorScheme} The color scheme value.
         */
        get: (defaultValue) => {
            if (typeof window === 'undefined') {
                return defaultValue;
            }

            try {
                return (
                    window.localStorage.getItem(key) || defaultValue
                );
            } catch {
                return defaultValue;
            }
        },

        /**
         * Sets the color scheme in local storage.
         * @param {MantineColorScheme} value - The color scheme value to set.
         */
        set: (value) => {
            try {
                window.localStorage.setItem(key, value);
            } catch (error) {
                console.warn(
                    '[@mantine/core] Local storage color scheme manager was unable to save color scheme.',
                    error
                );
            }
        },

        /**
         * Subscribes to storage events.
         * @param {Function} onUpdate - The callback function to execute when the color scheme is updated.
         */
        subscribe: (onUpdate) => {
            handleStorageEvent = (event) => {
                if (
                    event.storageArea === window.localStorage &&
                    event.key === key
                ) {
                    isMantineColorScheme(event.newValue) &&
                        onUpdate(event.newValue);
                }
            };

            window.addEventListener('storage', handleStorageEvent);
        },

        /**
         * Unsubscribes from storage events.
         */
        unsubscribe: () => {
            window.removeEventListener('storage', handleStorageEvent);
        },

        /**
         * Clears the color scheme from local storage.
         */
        clear: () => {
            window.localStorage.removeItem(key);
        },
    };
}
