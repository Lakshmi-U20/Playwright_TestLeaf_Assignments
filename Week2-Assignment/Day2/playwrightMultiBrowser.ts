//Launch 2 browsers - one Edge (RedBus) and one Firefox (Flipkart)
import { test, chromium, firefox } from "@playwright/test";

test("Launch Edge and Firefox browsers", async () => {
    const edge = await chromium.launch({ channel: "msedge" });
    const firefoxBrowser = await firefox.launch();

    try {
        const redBusPage = await edge.newPage();
        await redBusPage.goto("https://www.redbus.in");
        console.log(`Red Bus Title: ${await redBusPage.title()}`);
        console.log(`Red Bus URL: ${redBusPage.url()}`);

        const flipkartPage = await firefoxBrowser.newPage();
        await flipkartPage.goto("https://www.flipkart.com");
        console.log(`Flipkart Title: ${await flipkartPage.title()}`);
        console.log(`Flipkart URL: ${flipkartPage.url()}`);
    } finally {
        await Promise.all([edge.close(), firefoxBrowser.close()]);
    }
});
