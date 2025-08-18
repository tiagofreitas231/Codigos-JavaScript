let valores = [];
const addValor = (x) => {
    valores.push([valores.length+1,x]);
}

const media = () => {
    let soma = 0;
    for(x of valores)
    soma += x[1];
    return soma / valores.length;
    }

    const drawbasic = () => {
        var data = new google.visualization.DataTable();
        data.addColumn('number','Pos');
        data.addColumn('number','x');
        data.addRows(valores);
        var options = hAxis:{title:'posicao'}, vAxis: {title:'Valor de X'}
        
        var chart = new google.visualization.LineChart(document.getElementbyld('chart_div'));

        chart.draw(data,options);
    }