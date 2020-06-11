'use strict';

self.addEventListener('notificationclose', event => {
    console.log('closed');
})

// when clicking on notification, take me to Google
self.addEventListener('notificationclick', event => {
    clients.openWindow('https://google.com');
})