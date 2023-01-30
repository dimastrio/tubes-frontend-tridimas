fetch('https://indonesia-public-static-api.vercel.app/api/heroes')
    .then(res => res.json())
    .then(data => {
        console.log('data', data);

        displayProducts(data);
    })

async function displayProducts(products) {
    let html = '';
    await products.forEach((product, index, array) => {
        html += '<tr>';
        html += `<td>${product.name}</td>
                        <td>${product.birth_year}</td>
                        <td>${product.death_year}</td>
                        <td>${product.description}</td>
                        <td>${product.ascension_year}</td>`;
        html += '</tr>';
    })
    document.querySelector('tbody').innerHTML = await html;
    
    $(document).ready(function () {
        var dataTable = $('#filtertable').DataTable({
            "bPaginate": false,
            'sDom': '"top"i',
            "bInfo": false
        });

        $('#filterbox').on('keyup', function () {
            dataTable.search(this.value).draw();
        });
    });
}