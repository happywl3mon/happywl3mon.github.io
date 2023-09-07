window.onload = youAreA();
window.onload = reloadsLol();

function youAreA() {
    if ('Notification' in window) {
        Notification.requestPermission()
          .then(permission => {
            if (permission === 'granted') {
              const notification = new Notification('lemongd website', {
                body: 'You are a idiot!',
                icon: 'lemongd.png'
              });
            }
          })
          .catch(error => {
            console.error('Произошла ошибка при запросе разрешения на уведомления:', error);
          });
      }
  };