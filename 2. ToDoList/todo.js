function add() {
    var input = document.querySelector('#box');
    if (inputValue.trim() === "")
        return;
    var list = document.querySelector('#list');
    var prior = document.querySelector('#priority');
    var li = document.createElement('li');
    var optiondiv = document.createElement('div');
    var span = document.createElement('span');
    var finished = document.createElement('span');
    var check = document.createElement('button');
    var x = document.createElement('button');
    //span.classList.add('normal');
    finished.classList.add('finished');
    optiondiv.classList.add('normal');
    check.classList.add('switch');
    x.classList.add('xxx');
    x.textContent = "X";
    check.onclick = toggle;
    x.onclick = remove;
    list.append(li);
    optiondiv.append(span);
    optiondiv.append(finished);
    li.append(optiondiv);
    li.append(check);
    li.append(x);
    var inputValue = input.value;
    var priority = prior.value;
    //console.log(li);
    //console.log(list);
    //console.log(inputValue);
    span.textContent = inputValue;
    finished.textContent = "Congrats! You Did It!"
    check.textContent = "Done"
    input.value = '';
    if (priority === "important") {
        optiondiv.className = "important";
    } else if (priority === "urgent") {
        optiondiv.className = "urgent";
    }
}

function remove() {
    event.target.closest('li').remove();
}

function remind() {
    var list = document.querySelector('#list').children;
    if (list.length === 0)
        return;
    var msg = "Today's Quests\n";
    var k = 1;
    for (let item of list) {
        var classname = item.children[0].className;
        var p_msg = item.children[0].children[0].textContent;
        var show = item.children[0].children[1].style.opacity;

        if (classname === "normal") {
            if (show) {
                msg += `${k}. ${p_msg} (Done) \n`;
            } else {
                msg += `${k}. ${p_msg} \n`;
            }
        } else if (classname === "important") {
            if (show) {
                msg += `${k}. *${p_msg}* (Done) \n`;
            } else {
                msg += `${k}. *${p_msg}* \n`;
            }
        } else if (classname === "urgent") {
            if (show) {
                msg += `${k}. **${p_msg}** (Done) \n`;
            } else {
                msg += `${k}. **${p_msg}** \n`;
            }
        }
        k++;
    }
    alert(msg);
}

function importance() {
    var prior = event.target.value;
    var input = document.getElementById('box');
    var select = document.getElementById('priority');
    if (prior === "important") {
        input.classList.remove("urgent-input");
        input.classList.add("important-input");
        select.classList.remove("urgent-select");
        select.classList.remove("normal-select");
        select.classList.add("important-select");
    } else if (prior === "urgent") {
        input.classList.remove("important-input");
        input.classList.add("urgent-input");
        select.classList.add("urgent-select");
        select.classList.remove("normal-select");
        select.classList.remove("important-select");
    } else if (prior === "normal") {
        input.classList.remove("important-input");
        input.classList.remove("urgent-input");
        select.classList.remove("urgent-select");
        select.classList.remove("important-select");
        select.classList.add("normal-select");
    }
}

function toggle() {
    let t = event.target;
    if (t.textContent === "Done") {
        t.classList.add("not-over");
        t.textContent = "Not Yet";
        t.closest('li').querySelector('.finished').style.opacity = 1;
    } else {
        t.classList.remove("not-over");
        t.textContent = "Done";
        t.closest('li').querySelector('.finished').style.opacity = 0;
    }
}
