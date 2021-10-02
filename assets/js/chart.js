$(function() {
    "use strict";

        var chart = c3.generate({
            bindto: '#chart-Event-sale-overview ', // id of chart wrapper
            data: {
                columns: [
                    // each columns data
                    ['data1', "2000000", 3000000, 1000000, 6000000, 3500000,5200000,1800000],
                    ['data2', "55", 110, 70, 30, 170,85,11]
                ],
                labels: true,
                type: 'line', // default type of chart
                colors: {
                    'data1': '#333333',
                    'data2': '#4fcce9',
                },
                names: {
                    // name of each serie
                    'data1': 'مبلغ',
                    'data2': 'تعداد'
                }
            },
            axis: {
                x: {
                    type: 'category',
                    // name of each category
                    categories: ['1400/1/1', '1400/1/2', '1400/1/3', '1400/1/4', '1400/1/5', '1400/1/6', '1400/1/7', '1400/1/8', '1400/1/9', '1400/1/10', '1400/1/11', '1400/1/10', '1400/1/11', '1400/1/12', '1400/1/13', '1400/1/14', '1400/1/15', '1400/1/16', '1400/1/17','1400/1/18','1400/1/19','1400/1/20','1400/1/21','1400/1/22','1400/1/23','1400/1/24','1400/1/25','1400/1/26','1400/1/27','1400/1/28','1400/1/29','1400/1/30','1400/1/31']
                },
            },
            legend: {
                show: true, //hide legend
            },
            padding: {
                bottom: 20,
                top: 0
            },
        });

    });