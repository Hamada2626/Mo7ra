
importScripts("https://www.gstatic.com/firebasejs/13.3.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/13.3.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCvKGIiz6cUcBtJuTVxsqOH1kQ4TrCxiq9Q",
  authDomain: "mohra-love.firebaseapp.com",
  projectId: "mohra-love",
  storageBucket: "mohra-love.firebasestorage.app",
  messagingSenderId: "281974991762",
  appId: "1:281974991762:web:b58bd63c7edc114d4c6f4b"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Mø7rä";

  self.registration.showNotification(title, {
    body: payload.notification?.body || "عندك إشعار جديد",
    data: {
      url: "https://hamada2626.github.io/Mo7ra/"
    }
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(
      event.notification.data?.url ||
      "https://hamada2626.github.io/Mo7ra/"
    )
  );
});
