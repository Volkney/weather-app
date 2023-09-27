

export default async function changeBackground(currentHour) {
    const hour = parseInt(currentHour.split(":")[0], 10);
    let image;

    if (hour >= 6 && hour < 8) {
        image = 1;
    } else if (hour >= 8 && hour < 10) {
        image = 2;
    } else if (hour >= 10 && hour < 12) {
        image = 3;
    } else if (hour >= 12 && hour < 14) {
        image = 4;
    } else if (hour >= 14 && hour < 16) {
        image = 5;
    } else if (hour >= 18 && hour < 20) {
        image = 6;
    } else if (hour >= 22 && hour <= 23) {
        image = 7;
    } else {
        image = 8; // default image
    }

    // Now set the background image
    document.body.style.backgroundImage = `url(./images/bg-reduced-images/The-Beach-${image}-dragged.webp)`;
}
