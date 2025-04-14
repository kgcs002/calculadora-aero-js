function simularVoo() {
    const v = parseFloat(document.getElementById("velocidade").value);
    const ang = parseFloat(document.getElementById("angulo").value);
    const tempo = parseInt(document.getElementById("tempo").value);
  
    const g = 9.81;
    const angRad = ang * (Math.PI / 180);
    const vVert = v * Math.sin(angRad);
  
    let t = [];
    let h = [];
    let hMax = 0;
  
    for (let i = 0; i <= tempo; i++) {
      let altura = vVert * i - 0.5 * g * i * i;
      altura = Math.max(0, altura);
      t.push(i);
      h.push(altura);
      if (altura > hMax) hMax = altura;
    }
  
    document.getElementById("output").innerHTML = `📊 Altura máxima alcançada: <strong>${hMax.toFixed(2)} metros</strong>`;
  
    Plotly.newPlot('grafico', [{
      x: t,
      y: h,
      mode: 'lines+markers',
      name: 'Trajetória',
      line: { color: '#0077b6', width: 3 }
    }], {
      title: '📈 Trajetória de Voo',
      xaxis: { title: 'Tempo (s)' },
      yaxis: { title: 'Altura (m)' }
    });
  }
  