let subMenu = document.querySelectorAll('.sub-menu li')
let intCon = document.querySelector('.int-con')
let mobSrch = document.querySelector('.mob-srch')
let intConButton = document.getElementById('int-con')
let mobSrchButton = document.getElementById('mob-srch')

subMenu.forEach(item => {
    item.addEventListener("click", function () {
        subMenu.forEach(i => i.classList.remove("active"));
        this.classList.add("active");
        if(intConButton.classList.contains('active')){
            mobSrch.style.display = 'none'
            intCon.style.display = 'block'
        } else if ((mobSrchButton.classList.contains('active'))){
            mobSrch.style.display = 'block'
            intCon.style.display = 'none'
        }
    });
});

