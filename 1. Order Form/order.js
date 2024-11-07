function order() {
    var n = document.getElementById('name').value;
    if (n.trim() === '') {
        alert('Please Enter Your Name.');
        return;
    }
    var g = document.getElementById('gender');
    var g_in = g.selectedIndex;
    var g_text = g.options[g_in].text;
    var g_value = g.options[g_in].value;

    var t = document.getElementById('type');
    var t_in = t.selectedIndex;
    var t_text = t.options[t_in].text;
    var t_value = t.options[t_in].value;

    var number = parseInt(document.getElementById('num').value);
    if (isNaN(number)) {
        alert('Please Enter the Quantity.');
        return;
    } else if (number < 100) {
        alert('Sorry, our minimum order quantity is 100.');
        return;
    } else if (number > 5000) {
        alert('Sorry, our maximum order quantity is 5000.');
        return;
    }
    if (g_value === "") {
        alert('Sorry, please select products gender.');
    }
    if (t_value === "") {
        alert('Sorry, please select clothing type.')
    }

    alert('Welcome ' + n + '. Thank you for having interest in our products! Please contact us for quotation. Our phone number is 0987-654-321.');
    var sum;
    if (g_value === 'man') {
        alert('We are on our anniversary sale recently! Order today to get free stylish neckties!')
        sum = 600 * number;
    } else {
        alert('We are on our anniversary sale recently! Order today to get free elegant scarfs!')
        sum = 500 * number;
    }

    document.getElementById('cur_name').textContent = ' ' + n;
    document.getElementById('cur_gender').textContent = ' ' + g_text;
    document.getElementById('cur_type').textContent = ' ' + t_text;
    document.getElementById('total').textContent = ' ' + number;
    document.getElementById('summary').textContent = ' ' + sum;
}

function info() {
    alert('Quality You Can Trust --- ISO9001 certified excellence from uur factories in New Taipei City!');
}
