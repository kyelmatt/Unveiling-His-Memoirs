document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const updateTime = () => {
        console.log('Updating time and date...'); // Add this line
        const currentDate = new Date();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const formattedTime = `${hours}:${minutes.toString().padStart(2, '0')}`;

        timeElement.textContent = formattedTime;

        const fullDate = currentDate.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

        dateElement.textContent = fullDate;
    };

    setInterval(updateTime, 1000);

    document.addEventListener('DOMContentLoaded', function () {
        const body = document.body;
    
        document.querySelector('.wallpaper').addEventListener('click', function (event) {
            if (event.target.classList.contains('wallpaper')) {
                body.classList.add('page-transition');
    
                setTimeout(function () {
                    window.location.href = 'logIn.html';
                }, 1000); // 
            }
        });
    });    
});
