const {monitorEventLoopDelay} = require('perf_hooks');


// Monitor the event loop delay


module.exports = {
    runMonitoring: () => {

        let maxDelay = 0;
        const h = monitorEventLoopDelay({resolution: 10});
        h.enable();
        setInterval(() => {
            console.log(`The mean event loop delay was ${(h.mean/1e6).toFixed(2)} milliseconds for last 3 seconds`);
            h.reset();

        }, 3000);


    }
}
