let bar_btn = document.querySelector('#bar-menu-btn');
let drop_menu = document.querySelector('#dropdown-menu');
let icon = document.querySelector('#icon');
let show_work_btn = document.querySelector('#see-more-work')
let hidden_works = document.querySelectorAll('#hidden_work');


bar_btn.addEventListener('click',()=>{
    let check_display = drop_menu.classList.contains('invisible');
    let upContains = drop_menu.classList.contains('animate__slideOutUp');
    let downContains = drop_menu.classList.contains('animate__slideInDown');
    if(check_display){
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-x');
        if(upContains){
            drop_menu.classList.remove('animate__slideOutUp');
        }
        drop_menu.classList.add('animate__slideInDown');
        drop_menu.classList.remove('invisible');
    }else{
        icon.classList.remove('fa-x');
        icon.classList.add('fa-bars');
        drop_menu.classList.remove('animate__slideInDown');
        drop_menu.classList.add('animate__slideOutUp');
        setTimeout(()=>{
            drop_menu.classList.add('invisible');
        },800);
    }
});

show_work_btn.addEventListener('click',()=>{
    const isHidden = show_work_btn.innerHTML === 'See More';
    hidden_works.forEach(hidden_work => {
        if(isHidden){
            hidden_work.classList.remove('hidden');
        }else{
            hidden_work.classList.add('hidden');
        }
    });
    isHidden ? show_work_btn.innerHTML = 'See Less': show_work_btn.innerHTML = 'See More';
});

