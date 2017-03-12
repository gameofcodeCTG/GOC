export const emploi = {

  title: {
    text: 'Emploi 2009-2016'
  },

  subtitle: {
    text: 'Source: https://data.public.lu'
  },

  yAxis: {
    title: {
      text: 'Number'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      pointStart: 2009
    }
  },

  series: [{
    name: 'emploi',
    data: [900, 940, 1000, 1100, 1098, 1087, 1098, 1160]
  }]

};
