const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="content" style="display: flex; justify-content: center; align-items: center; ">
        <table style="border: 3px solid black; padding: 10px; border-collapse: collapse; text-align: center; width: 50%;">
  <tr style="border: 3px solid black; padding: 10px; border-collapse: collapse; text-align: center; width: 50%;">
    <th style = "border: 3px solid black;">Key</th>
    <th style = "border: 3px solid black;">Key Code</th>
    <th style = "border: 3px solid black;">Code</th>
  </tr>
  <tr>
    <td style = "border: 3px solid black;" >${e.key}</td>
    <td style = "border: 3px solid black;">${e.keyCode}</td>
    <td style = "border: 3px solid black;">${e.code}</td>
  </tr>
  
</table>
    </div>

`;

});