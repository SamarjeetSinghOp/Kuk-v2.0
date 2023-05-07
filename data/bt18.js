google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(
    function() { // Anonymous function that calls drawChart1 and drawChart2
        bt2018();
        me2018();
        ec2018();
        cse2018();
        cse2019();
        cse2020();
        cse2021();
        cse2022();
        cse2023();
        bt2019();
        bt2020();
        bt2021();
        bt2022();
        bt2023();
        ec2019();
        ec2020();
        ec2021();
        ec2022();
        ec2023();
        me2019();
        me2020();
        me2021();
        me2022();
        me2023();
    });


async function bt2018() {

    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["IDS Infotech", 5], ["Panacea Biotec", 1]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-bt18'));
    chart.draw(data, options);
}

async function cse2018() {

    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 20], ["IBM", 7], ["Cryptographics IT Solution", 5], ["Wipro Limited", 11], ["Byjus Pvt Limited", 1], ["British Telecom", 2], ["Saifintex", 5], ["TCS", 1]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-cs18'));
    chart.draw(data, options);
}

async function ec2018() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 6], ["IBM", 1], ["Cryptographics IT Solution", 2], ["Wipro Limited", 1], ["British Telecom", 2], ["Samsung", 1], ["Talent Pull", 7], ["Perfect RFID", 1]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-ec18'));
    chart.draw(data, options);
}

async function me2018() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 2], ["Adani", 5], ["Daikin AC", 1], ["Samsung", 2], ["Bosch", 3]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-me18'));
    chart.draw(data, options);
}

async function cse2019() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 40], ["TCS", 23], ["IBM", 25], ["Yamaha Motors", 4], ["Wipro Limited", 2], ["Cognizent", 1], ["IDS Infotech", 1]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-cs19'));
    chart.draw(data, options);
}

async function cse2020() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["TCS", 27], ["Hexaware", 6], ["Cognizant", 14], ["Capegemini", 5], ["Hughes Systique", 2], ["Yamaha Motors", 2], ["Amazon", 2], ["Byjus", 1], ["Daffodils", 1], ["Infosys", 46]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-cs20'));
    chart.draw(data, options);
}

async function cse2021() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["TCS", 21], ["Infosys", 24], ["Accenture", 8], ["Code Quotient", 6], ["Hexaware", 2], ["Rupine", 1], ["Yamaha Motors", 2], ["Wipro", 5], ["Capgemini", 1], ["Slemens", 1], ["Byjus", 1], ["Spider Innovative Technologies", 1], ["KPMG", 1], ["Zibal Technology", 1]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-cs21'));
    chart.draw(data, options);
}

async function cse2022() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 24], ["Yamaha Motors", 3], ["Daffodil", 4], ["Hexaware", 3], ["Wipro", 36], ["Step2gen", 7], ["Henceforth", 1], ["Bebo Technology", 25], ["CronJ", 2], ["Forcebolt", 4], ["TCS", 20], ["Hitachi", 2], ["Dealer Matrix", 4], ["Byjus", 1], ["Aspirefox", 7], ["Indiamart", 10], ["Info Edge", 1], ["Josh Technology", 1], ["Deloitte", 2], ["Pentagon CSR", 3], ["Byteridge Software", 1], ["Vitalic Health Pvt Ltd", 1]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-cs22'));
    chart.draw(data, options);
}

async function cse2023() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Deloitte", 6], ["Input Zero Pvt Ltd.", 5], ["Solitaire Infosys", 2], ["TCS", 8], ["Antier Solutions Pvt Ltd", 2], ["Infosys", 9], ["Hexaware", 7], ["Hughes Systique", 2], ["ADP India", 5], ["Embitel Technologies", 17], ["Byteridge Software", 2], ["Indus Valley", 2], ["Yamaha Motors Solution", 10], ["Bebo Educational Foundation", 21], ["Learning Routes", 2]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-cs23'));
    chart.draw(data, options);
}

async function bt2019() {

    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 1], ["TCM", 1], ["IDS INFOTECH", 2]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-bt19'));
    chart.draw(data, options);
}

async function bt2020() {

    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Healthviser", 7], ["Infosys", 1]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-bt20'));
    chart.draw(data, options);
}

async function bt2021() {

    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["IDS", 5], ["Infosys", 4], ["TCS", 1]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-bt21'));
    chart.draw(data, options);
}

async function bt2022() {

    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Pulsus", 2], ["TCS", 2], ["Byjus", 3], ["IDS", 1], ["Advanced Microdevices Pvt Ltd", 1]
    ]);
    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-bt22'));
    chart.draw(data, options);
}

async function bt2023() {

    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Unavailable", 1]
    ]);
    var options = {
        colors: ['grey'],
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-bt23'));
    chart.draw(data, options);
}

async function ec2019() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 16], ["TCS", 2], ["IBM", 6], ["Vivo", 3], ["Vector India", 1]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-ec19'));
    chart.draw(data, options);
}

async function ec2020() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 21], ["TCS", 6], ["Vivo", 11], ["Hexaware", 8], ["Cognizant", 4]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-ec20'));
    chart.draw(data, options);
}

async function ec2021() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["TCS", 3], ["Infosys", 3], ["Accenture", 3], ["Code Quotient", 2], ["NewGen", 4], ["IBM", 2], ["HCL", 1], ["Manras Technology", 1], ["Wipro", 2], ["Uno Minda", 1], ["Zopper", 1], ["Tech Mahindra", 1]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-ec21'));
    chart.draw(data, options);
}

async function ec2022() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 9], ["Hexaware", 1], ["Wipro", 14], ["Henceforth", 4], ["Bebo Technology", 8], ["Dealer Matrix", 1], ["Xenon Stack", 1], ["TT Consultant", 2], ["Byjus", 1], ["Exicom", 1], ["Coforge", 1], ["ABACA Pvt Ltd", 5], ["Signoff", 2], ["Qspider", 5], ["Pentagon CSR", 2], ["Anviam Solutions Pvt Ltd", 1], ["Lumax Industries Pvt Ltd", 1], ["Frick India Corporation", 1], ["TCS", 8]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-ec22'));
    chart.draw(data, options);
}

async function ec2023() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 2], ["Hexaware", 3], ["ADP India", 3], ["Embitel Technologies", 3], ["Indus Valley", 1], ["SOTI Inc Gurugram", 1], ["Bebo Educational Foundation", 11], ["Input Zero Pvt Ltd", 5], ["TCS", 11], ["JSW (TalenTech 2023)", 4], ["Antier Solutions Pvt Ltd", 3], ["Learning Routes", 2]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };

    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-ec23'));
    chart.draw(data, options);
}

async function me2019() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 10], ["Adani", 1], ["Daikin AC", 2]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-me19'));
    chart.draw(data, options);
}

async function me2020() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 5]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-me20'));
    chart.draw(data, options);
}

async function me2021() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["NewGen", 4], ["Thermal Panipat", 1]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-me21'));
    chart.draw(data, options);
}


async function me2022() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["Infosys", 1], ["Wipro", 3], ["TCS", 2], ["Byjus", 1], ["Green Fuel Pvt Ltd", 4], ["ABACA Pvt Ltd", 5], ["Intellipaat", 1], ["Qspider", 3], ["Chanderpur Solid Works", 2], ["Lumax Industries Ltd", 4], ["Indosaw Industrial Products Pvt Ltd", 1], ["Amber Industries", 3], ["Brightway Soles", 1], ["Advance Microdevices (MDI)", 1], ["JBM Technology", 1], ["Daikin AC", 3], ["IFB", 2], ["Continental Engine India", 1], ["Federal Bank", 1], ["Frick India Cooperation", 2], ["Orion Water Treatment", 1], ["Honda Cars India Pvt Ltd.", 8], ["Escorts Kubota Ltd", 7]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-me22'));
    chart.draw(data, options);
}

async function me2023() {
    var data = google.visualization.arrayToDataTable([
        ["Company", "Number of Students"],
        ["ISGEC Heavy Engineering Ltd", 2], ["JSW (TalenTech 2023)", 5], ["Maruti Suzuki India Ltd.", 3]
    ]);

    var options = {
        pieHole: 0.4,
        legend: { position: 'bottom' },
        width: '100%',
        height: '100%',
        pieSliceText: 'percentage',
        chartArea: {
            left: "3%",
            top: "3%",
            height: "84%",
            width: "94%"
        }
    };
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart-me23'));
    chart.draw(data, options);
}