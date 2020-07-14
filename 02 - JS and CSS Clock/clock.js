
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const minutes = now.getMinutes();
      const minutesDegrees = ((minutes / 60) * 360) + 90;
      minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;

      const timeComponents = [secondHand, minuteHand, hourHand]

      if (secondsDegrees === 90 || minutesDegrees === 90 || hourDegrees === 90) {
        timeComponents.forEach(component => component.style.transition = 'all 0s');
      } else {
        timeComponents.forEach(component => component.style.transition = 'all 0.05s');
      }
    }

    setInterval(setDate, 1000);
