const fs = require('fs');
const report = JSON.parse(fs.readFileSync('live-report.json', 'utf8'));

const printIssue = (id) => {
    if (report.audits[id] && report.audits[id].details && report.audits[id].details.items) {
        console.log(`\n--- ${id} ---`);
        report.audits[id].details.items.forEach(item => {
            console.log(item.node ? item.node.snippet : (item.url || JSON.stringify(item)));
        });
    }
}

printIssue('image-delivery-insight');
printIssue('unused-javascript');
