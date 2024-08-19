fetch('data.csv')
  .then(response => response.text())
  .then(data => {
    const rows = data.trim().split('\n').map(row => row.split(','));
    console.log(rows);
  })
  .catch(error => console.error(error));
