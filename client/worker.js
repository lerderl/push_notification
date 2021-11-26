// Push event listener
self.addEventListener("push", e => {
  const data = e.data.json();
  self.registration.showNotification(
      data.title, // title of the notification
      {
          body: "Push notification from me", //the body of the push notification
          image: "/360comms.jpeg",
          icon: "/360comms.jpeg" // icon
      }
  );
});