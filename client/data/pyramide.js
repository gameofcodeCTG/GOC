export const pyramide = {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Age Pyramide'
  },
  subtitle: {
    text: 'Source: https://data.public.lu'
  },
  xAxis: {
    categories: [
      '[00-05]',
      '[05-10]',
      '[10-15]',
      '[15-20]',
      '[25-25]',
      '[25-30]',
      '[30-35]',
      '[35-40]',
      '[40-45]',
      '[45-50]',
      '[50-55]',
      '[55-60]',
      '[60-65]',
      '[65-70]',
      '[70-75]',
      '[75-80]',
      '[80-85]',
      '[85-90]',
      '[90-95]',
      '[95-100]',
      '[100- +]'
    ],
    crosshair: true
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Nombre'
    }
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    footerFormat: '</table>',
    shared: true,
    useHTML: true
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0
    }
  },
  series: [{
    name: 'Femme',
    data: [1,4,6,74, 93, 88, 89, 65, 89, 78, 112, 121, 111, 100, 70,66,15,16,4,1,0]

  }, {
    name: 'Homme',
    data: [3,7,8,30, 96, 80, 80, 77, 90, 90, 119, 109, 108, 107, 55,55,10,10,0,1,0]

  }]
};
